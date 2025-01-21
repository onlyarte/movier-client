type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Grid({ children, className }: Props) {
  return (
    <div
      role="status"
      className={`grid gap-3 w-full ${className ?? ''}`}
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      }}
    >
      {children}
    </div>
  );
}
