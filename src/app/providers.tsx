'use client';

import { apolloClient } from '@/utils/apollo';
import { ApolloProvider } from '@apollo/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from '@material-tailwind/react';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  );
}
