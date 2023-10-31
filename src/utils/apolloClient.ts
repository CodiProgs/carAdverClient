import { ApolloClient, ApolloLink, InMemoryCache, NormalizedCacheObject, Observable, gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error"
import { createUploadLink } from "apollo-upload-client"

async function refreshToken(client: ApolloClient<NormalizedCacheObject>) {
    try {
        const { data } = await client.mutate({
            mutation: gql`
                mutation RefreshToken {
                    refreshToken
                }
            `,
        })

        const newAccessToken = data?.refreshToken
        if(!newAccessToken) {
            throw new Error("New access token not received.")
        }
        localStorage.setItem("accessToken", newAccessToken)
        return `Bearer ${newAccessToken}`
    } catch (err) {
        throw new Error("Error getting new access token.")
    }
}

let retryCount = 0
const maxRetry = 3

const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if(graphQLErrors) {
        for(const err of graphQLErrors) {
            if(err.extensions.code === "UNAUTHENTICATED" && retryCount < maxRetry) {
                retryCount++

                return new Observable((observer) => {
                    refreshToken(client).then((token) => {
                        operation.setContext((previousContext: any) => ({
                            headers: {
                                ...previousContext.headers,
                                authorization: token,
                            },
                        }))
                        const forward$ = forward(operation)
                        forward$.subscribe(observer)
                    }).catch((error) => observer.error(error))
                })
            }
        }
    }
})

const uploadLink = createUploadLink({
    uri: "https://caradverserver-production.up.railway.app/graphql",
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    },
})

export const client = new ApolloClient({
    uri: "https://caradverserver-production.up.railway.app/graphql",
    cache: new InMemoryCache(),
    credentials: "include",
    headers: {
        "apollo-require-preflight": "true",
    },
    link: ApolloLink.from([errorLink, uploadLink]),
})