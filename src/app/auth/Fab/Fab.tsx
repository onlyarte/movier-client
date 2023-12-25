'use client';

import { User as UserIcon, LogIn as LoginIcon } from 'react-feather';
import IconLink from '@/app/components/IconLink';
import { signIn } from 'next-auth/react';
import { useAuth } from '@/app/auth';
import IconButton from '@/app/components/IconButton/IconButton';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  className?: string;
};

export default function Fab({ className }: Props) {
  const { user, error, loading } = useAuth();
  const pathname = usePathname();

  if (error || loading) {
    return null;
  }

  if (!user) {
    return (
      <IconButton
        Icon={LoginIcon}
        className={className}
        onClick={() => signIn('google')}
      />
    );
  }

  const userPageUrl = `/user/${user.id}`;

  if (pathname === userPageUrl) {
    return null;
  }

  return (
    <IconLink Icon={UserIcon} href={`/user/${user.id}`} className={className} />
  );
}
