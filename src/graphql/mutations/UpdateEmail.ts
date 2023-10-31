import { gql } from "@apollo/client";


export const UPDATE_EMAIL = gql`
    mutation UpdateEmail(
        $email: String!
        $id: Int!
    ){
        updateEmail(
            updateEmailInput: {
                email: $email
                id: $id
            }
        ){
            user {
                email
            }
        }
    }
`