import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { retrieveAuthData } from './auth/storage';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
});

const authLink = setContext((_, { headers }) => {
  const { token } = retrieveAuthData() ?? {};
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: apolloCache,
  connectToDevTools: true,
});
