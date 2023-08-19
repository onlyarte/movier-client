'use client';

import { Home as HomeIcon, LogIn as LoginIcon } from 'react-feather';
import IconLink from '@/app/components/IconLink';
import { useUser } from '@auth0/nextjs-auth0/client';
import { NativeLink } from '@/app/components/IconLink/IconLink';
import { useAuth } from '@/utils/auth';

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
    <IconLink
      Icon={LoginIcon}
      href="/api/auth/login"
      className={className}
      Component={NativeLink}
    />
  );
}
