'use client';

import { IconButton } from '@/app/components';
import { UserQuery } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { LogOut } from 'react-feather';
import { signOut } from 'next-auth/react';

type Props = {
  data: UserQuery;
};

export default function SignOutButton() {
  const { user } = useAuth();
  if (!user) return null;

  const handleLogout = () => {
    signOut();
  };

  return <IconButton Icon={LogOut} onClick={handleLogout} />;
}
