'use client';

import { User as UserIcon } from 'react-feather';
import { signIn } from 'next-auth/react';
import { useAuth } from '@/app/auth';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/app/components';
import SignOutButton from '../SignOutButton';
import Image from 'next/image';

type Props = {
  className?: string;
  outlined?: boolean;
};

export default function SignInButton({ className, outlined = true }: Props) {
  const { user, error, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  if (error) {
    return null;
  }

  if (!user) {
    return (
      <Button
        onClick={() =>
          signIn('google', {
            callbackUrl: pathname === '/' ? '/user' : undefined,
          })
        }
        loading={loading}
        icon={
          <Image src="/google.png" width={24} height={24} alt="Google logo" />
        }
        className={`${className} bg-background/80 hover:bg-background/100 p-3 ${
          outlined ? '' : 'border-0'
        }`}
      >
        Sign in with Google
      </Button>
    );
  }

  const userPageUrl = `/user/${user.id}`;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Button
        onClick={() => router.push(userPageUrl)}
        loading={loading}
        disabled={pathname === userPageUrl}
        icon={<UserIcon size={24} />}
        className={`bg-background/80 hover:bg-background/100 p-3 ${
          outlined ? '' : 'border-0'
        }`}
      >
        {user.name}
      </Button>
      <SignOutButton />
    </div>
  );
}
