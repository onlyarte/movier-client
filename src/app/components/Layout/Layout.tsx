import Menu from './Menu';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen relative">
      <Menu />
      {children}
    </div>
  );
}
