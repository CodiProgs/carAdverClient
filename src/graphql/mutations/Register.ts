import { gql } from "@apollo/client";


export const REGISTER_USER = gql`
    mutation RegisterUser(
        $email: String!
        $name: String!
        $password: String!
        $surname: String!
        $image: String!
        $type: String!
    ){
        register(
            registerInput: {
                email: $email
                name: $name
                password: $password
                surname: $surname
                image: $image
                type: $type
            }
        ){
            user {
                id
                name
                email
                surname
                image
                type
            }
        }
    }
`