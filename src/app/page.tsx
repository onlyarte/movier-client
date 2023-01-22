import { Layout } from './components';
import Search from './movie/components/Search';

export default function Home() {
  return (
    <main className="w-full min-h-screen p-4 lg:p-8 pt-[120px] lg:pt-[120px] flex flex-col items-center">
      <div className="w-full lg:w-[400px]">
        <h1 className="text-3xl lg:text-5xl mb-8 text-center">The Movier</h1>
        <Search />
      </div>
    </main>
  );
}
