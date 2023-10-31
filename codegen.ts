import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
    schema: 'https://caradverserver-production.up.railway.app/graphql',
    documents: ['src/graphql/**/*.ts'],
    generates: {
        './src/gql/': {
            preset: 'client',
            plugins: [
                'typescript',
                'typescript-operations',
                'typescript-react-apollo',
            ]
        }
    }
}

export default config