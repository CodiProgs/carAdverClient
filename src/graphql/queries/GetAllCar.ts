import { gql } from "@apollo/client";


export const GET_ALL_CAR = gql`
    query GetAllCars {
        getAllCars {
            id
            name
            price
            images
            model{
                id
                name
            }
            brand{
                id
                name
            }
        }
    }
`