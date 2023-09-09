'use client';

import { Home as HomeIcon, LogIn as LoginIcon } from 'react-feather';
import IconLink from '@/app/components/IconLink';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useAuth } from '@/app/auth';
import IconButton from '@/app/components/IconButton/IconButton';

type Props = {
  className?: string;
};

export default function Fab({ className }: Props) {
  const { user, error, loading } = useAuth();

  if (error || loading) {
    return null;
  }

  return user ? (
    <IconLink Icon={HomeIcon} href={`/user/${user.id}`} className={className} />
  ) : (
    <IconButton
      Icon={LoginIcon}
      className={className}
      onClick={() => signIn('google')}
    />
  );
}
