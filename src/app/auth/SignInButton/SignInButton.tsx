'use client';

import { signIn } from 'next-auth/react';
import { useAuth } from '@/app/auth';
import { usePathname, useRouter } from 'next/navigation';
import { Button, IconButton } from '@/app/components';
import Image from 'next/image';
import { AVATAR, GOOGLE_LOGO } from '@/app/components/Image/assets';

type Props = {
  className?: string;
};

export default function SignInButton({ className }: Props) {
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
          <Image width={24} height={24} src={GOOGLE_LOGO} alt="Google logo" />
        }
        className={`${className} bg-gray-400/85 hover:bg-gray-400/100 dark:bg-gray-600/85 dark:hover:bg-gray-600/100 p-3 border-0`}
      >
        Sign in with Google
      </Button>
    );
  }

  const userPageUrl = `/user/${user.id}`;

  if (pathname === userPageUrl) return null;

  return (
    <IconButton
      Icon={() => (
        <Image
          src={user?.photoUrl ?? AVATAR}
          alt="User photo"
          width={48}
          height={48}
          className="object-cover h-[48px] w-[48px] rounded-full"
        />
      )}
      onClick={() => router.push(userPageUrl)}
      loading={loading}
      padding="p-0"
      className={className}
    />
  );
}
