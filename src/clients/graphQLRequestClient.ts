import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://dev.gql.manufactured.com/graphql';

const graphqlRequestClient = (headers = {}) => new GraphQLClient(endpoint, headers);

export default graphqlRequestClient;