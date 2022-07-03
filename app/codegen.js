const secrets = require('./secrets.json')
module.exports = {
  schema: [
    {
      "https://adequate-guinea-56.hasura.app/v1/graphql": {
        headers: {
          'Authorization': `Bearer ${secrets.JWT}`
        },
      },
    },
  ],
  documents: ['./api/gql/**/*.graphql'],
  overwrite: true,
  generates: {
    './src/generated/graphql.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    './src/graphql.schema.json': {
      plugins: ['introspection'],
    },
  }
}