import { gql } from "@apollo/client";


export const CREATE_MAKE = gql`
    mutation CreateMake(
        $name: String!
        $image: String!
    ){
        createMake(
            createMakeInput: {
                name: $name
                image: $image
            }
        ){
            make{
                name
                image
            }
        }
    }
`