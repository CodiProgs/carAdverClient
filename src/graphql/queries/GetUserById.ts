import { gql } from "@apollo/client";


export const GET_USER_BY_ID = gql`
    query GetUserById($id: Float!) {
        getUserById(id: $id) {
            user{
                createdAt
                phone
                location
                name
                surname
                email
                id
                image
                type
                cars{
                    id
                    name
                    images
                    price
                    model{
                        name
                    }
                }
            }
            
        }
    }
`