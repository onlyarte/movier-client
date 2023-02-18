import { AuthDataFragment } from '@/graphql/graphql';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

export const getAuthData = () => {
  if (typeof window === 'undefined') {
    console.warn('localStorage is not available');
    return undefined;
  }

  const rawData = localStorage.getItem('authData');
  return rawData ? (JSON.parse(rawData) as AuthDataFragment) : undefined;
};

export const setAuthData = (data: AuthDataFragment) => {
  if (typeof window === 'undefined') {
    console.warn('localStorage is not available');
  } else {
    localStorage?.setItem('authData', JSON.stringify(data));
  }
};

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

const authLink = setContext((_, { headers }) => {
  const { token } = getAuthData() ?? {};
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
