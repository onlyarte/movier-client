'use client';

import { apolloClient } from '@/utils/apollo';
import { AuthProvider } from '@/utils/auth/context';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-tailwind/react';

type Props = {
  children: React.ReactNode;
};

export function Providers({ children }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <AuthProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}
