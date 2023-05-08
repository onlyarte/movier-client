import { makeMetadata } from '@/utils/metadata';
import { AuthForm } from './components';

export default function AuthPage() {
  return (
    <main className="w-full min-h-screen p-4 lg:p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-[400px]">
        <h1 className="text-5xl mb-8 text-center">The Movier</h1>
        <AuthForm />
      </div>
    </main>
  );
}

export const metadata = makeMetadata({ title: 'Auth' });
