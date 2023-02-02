import { Layout } from '@/app/components';

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
