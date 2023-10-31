import { gql } from "@apollo/client";


export const GET_MODEL_ALL = gql`
    query GetModelsAll {
        getModelsAll {
            name
            id
            brand{
                id
                name
            }
        }
    }
`