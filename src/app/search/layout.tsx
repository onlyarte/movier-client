import { Layout } from '@/app/components';
import Menu from '@/app/components/Layout/Menu/Menu';

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <Menu />
      {children}
    </div>
  );
}
