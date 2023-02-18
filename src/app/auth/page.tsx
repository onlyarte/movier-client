import { AuthForm } from './components';

export default function AuthPage() {
  return (
    <main className="w-full min-h-screen p-4 lg:p-8 pt-[120px] lg:pt-[120px] flex flex-col items-center">
      <div className="w-full lg:w-[400px]">
        <AuthForm />
      </div>
    </main>
  );
}
