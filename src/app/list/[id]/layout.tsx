import { Layout } from '@/app/components';
import Menu from '@/app/components/Layout/Menu/Menu';

export default function ListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Menu />
      {children}
    </div>
  );
}
