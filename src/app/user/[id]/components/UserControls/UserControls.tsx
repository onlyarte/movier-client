'use client';

import { IconButton } from '@/app/components';
import { UserQuery } from '@/graphql/graphql';
import { useAuth } from '@/utils/auth';
import { LogOut } from 'react-feather';

type Props = {
  data: UserQuery;
};

export default function UserControls({ data }: Props) {
  const { user } = useAuth();

  const handleLogout = () => {
    window.location.href = '/api/auth/logout';
  };

  if (!user || user.id !== data.user?.id) {
    return null;
  }

  return (
    <div className="absolute z-10 top-4 right-4">
      <IconButton Icon={LogOut} onClick={handleLogout} />
    </div>
  );
}
