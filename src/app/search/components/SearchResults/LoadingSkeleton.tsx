export default function LoadingSkeleton() {
  return (
    <div
      role="status"
      className="grid gap-3 w-full animate-pulse"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      }}
    >
      {new Array(5).fill(undefined).map((_, index) => (
        <div key={index}>
          <div className="relative h-[250px] w-full mb-2">
            <div className="w-full h-full bg-gray-400 dark:bg-gray-800" />
          </div>
          <div className="w-20 h-7 mb-3 m-auto bg-gray-400 dark:bg-gray-800 rounded-md" />
        </div>
      ))}
    </div>
  );
}
