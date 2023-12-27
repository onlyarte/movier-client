export default function Loading() {
  return (
    <div className="min-h-screen opacity-50">
      <div
        className="px-5 py-8 pt-20 w-full animate-pulse"
        role="status"
      >
        <div className="flex items-center gap-2 mb-8">
          <div className="w-20 h-9 lg:h-12 bg-gray-400 dark:bg-gray-800 rounded-lg" />
        </div>

        <div
          className="grid gap-3 w-full"
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
      </div>
    </div>
  );
}
