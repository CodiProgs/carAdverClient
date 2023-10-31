import { gql } from "@apollo/client";


export const UPDATE_TYPE = gql`
    mutation UpdateType(
        $email: String!
        $type: String!
    ){
        updateType(
            updateTypeInput: {
                email: $email
                type: $type
            }
        ){
            user {
                email
                type
            }
        }
    }
`