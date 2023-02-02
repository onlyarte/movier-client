import { Layout } from '@/app/components';

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
