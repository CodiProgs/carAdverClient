import { gql } from "@apollo/client";


export const GET_CAR_BY_ID = gql`
    query GetCarById($id: Float!) {
        getCarById(id: $id) {
            name
            bodyType
            brand{
                id
                name
            }
            fuelType
            images
            mileage
            model{
                name
            }
            price
            registration
            transmission
            user{
                id
                name
                surname
                location
                createdAt
                email
                phone
                type
                image
            }
        }
    }
`