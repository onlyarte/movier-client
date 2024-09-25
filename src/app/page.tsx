import { makeMetadata } from '@/utils/metadata';
import SignInButton from './auth/SignInButton';
import Search from './search/components/SearchBar';

export default function Home() {
  return (
    <main className="w-full min-h-screen p-4 lg:p-8 pt-[120px] lg:pt-[120px] flex flex-col items-center relative">
      <SignInButton className="absolute z-10 top-4 left-4" />
      <div className="w-full lg:w-[400px]">
        <h1 className="text-3xl lg:text-8xl mb-8 text-center">MOVIER</h1>
        <Search />
      </div>
    </main>
  );
}

export const metadata = makeMetadata();
