import { gql } from "@apollo/client";


export const GET_USER_BY_TYPE = gql`
    query GetUserByType (
        $type: String!
    ){
        getUsersByType(
            type: $type
        ){
            name
            surname
            id
            image
            email
            createdAt
            location
            cars{
                name
                id
            }
        }
    }
`