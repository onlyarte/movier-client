import Menu from './Menu';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen relative">
      <Menu />
      {children}
    </div>
  );
}
