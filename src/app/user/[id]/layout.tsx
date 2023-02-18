import { Layout } from '@/app/components';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
