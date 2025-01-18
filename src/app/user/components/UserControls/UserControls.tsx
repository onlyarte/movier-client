'use client';

import { UserQuery } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { IconButton } from '@/app/components';
import { Edit } from 'react-feather';
import { useState } from 'react';
import EditUserDialog from './EditUserDialog';
import SignOutButton from '@/app/auth/SignOutButton';

type Props = {
  data: UserQuery;
};

export default function UserControls({ data }: Props) {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);

  if (user?.id !== data.user?.id) return null;

  return (
    <>
      <IconButton Icon={Edit} onClick={() => setIsOpen(true)} />
      <EditUserDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <SignOutButton />
    </>
  );
}
