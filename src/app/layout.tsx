import { getServerSession } from 'next-auth';
import './globals.css';
import { Providers } from './providers';
import { authOptions } from './auth/config';
import { Layout } from './components';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <title>Movier</title>
      <link rel="icon" type="image/png" href="/favicon.png" />
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <Providers session={session}>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
