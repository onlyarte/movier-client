import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL,
  cache: new InMemoryCache(),
});

export function withApolloProvider<T extends {}>(
  Component: React.ComponentType<T>
) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    return (
      <ApolloProvider client={apolloClient}>
        <Component {...props} />
      </ApolloProvider>
    );
  };
}
