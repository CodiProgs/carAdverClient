import { gql } from "@apollo/client";


export const GET_ALL_CAR_BY_MAKE = gql`
    query GetAllCarByMake($makeId: Float!) {
        getAllCarByMake(makeId: $makeId) {
            id
            name
            price
            images
            model{
                id
                name
            }
        }
    }
`