import { gql } from "@apollo/client";


export const UPDATE_USER = gql`
    mutation UpdateUser(
        $email: String!
        $image: String!
        $location: String
        $name: String!
        $phone: String
        $surname: String!
    ){
        updateUser(
            updateInput: {
                email: $email
                image: $image
                location: $location
                name: $name
                phone: $phone
                surname: $surname
            }
        ){
            user {
                email
                image
                location
                name
                phone
                surname
            }
        }
    }
`