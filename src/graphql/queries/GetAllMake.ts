import { gql } from "@apollo/client";


export const GET_ALL_MAKE = gql`
    query GetAllMakes {
        getAllMakes {
            name
            image
            id
        }
    }
`