'use client';

import { apolloClient } from '@/utils/apollo';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@material-tailwind/react';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type Props = {
  children: React.ReactNode;
  session: Session | null;
};

export function Providers({ children, session }: Props) {
  return (
    <ApolloProvider client={apolloClient}>
      <SessionProvider session={session}>
        <ThemeProvider>{children}</ThemeProvider>
      </SessionProvider>
    </ApolloProvider>
  );
}
