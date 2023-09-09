import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_BASE_URL}/api/graphql`,
});

export const apolloCache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: apolloCache,
  connectToDevTools: true,
});
