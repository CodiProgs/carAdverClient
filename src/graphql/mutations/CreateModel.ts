import { gql } from "@apollo/client";


export const CREATE_MODEL = gql`
    mutation CreateModel(
        $name: String!
        $makeId: Int!
    ){
        createModel(
            createModelInput: {
                name: $name
                makeId: $makeId
            }
        ){
            model{
                name
                id
                brand{
                    id
                    name
                }
            }
            
        }
    }
`