import { gql } from "@apollo/client";


export const UPDATE_PASSWORD = gql`
    mutation UpdatePassword(
        $password: String!
        $email: String!
    ){
        updatePassword(
            updatePasswordInput: {
                password: $password
                email: $email
            }
        ){
            user {
                email
            }
        }
    }
`