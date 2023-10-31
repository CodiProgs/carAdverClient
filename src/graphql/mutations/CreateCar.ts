import { gql } from "@apollo/client";


export const CREATE_CAR = gql`
    mutation CreateCar(
        $bodyType: String!
        $brandId: Int!
        $fuelType: String!
        $images: String!
        $mileage: Int!
        $modelId: Int!
        $name: String!
        $price: Int!
        $registration: String!
        $transmission: String!
        $userId: Int!
    ){
        createCar(
            createCarInput: {
                bodyType: $bodyType
                brandId: $brandId
                fuelType: $fuelType
                images: $images
                mileage: $mileage
                modelId: $modelId
                name: $name
                price: $price
                registration: $registration
                transmission: $transmission
                userId: $userId
            }
        ){
            car{
                id
                images
            }
        }
    }
`