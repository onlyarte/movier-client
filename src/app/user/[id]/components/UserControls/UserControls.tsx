'use client';

import { IconButton } from '@/app/components';
import { UserQuery } from '@/graphql/graphql';
import { useAuthContext } from '@/utils/auth/context';
import { useRouter } from 'next/navigation';
import { LogOut } from 'react-feather';

type Props = {
  data: UserQuery;
};

export default function UserControls({ data }: Props) {
  const { authData, setAuthData } = useAuthContext();
  const router = useRouter();

  const handleLogout = () => {
    setAuthData?.(undefined);
    router.push('/');
  };

  return (
    <div className="absolute z-10 top-4 right-4">
      {authData?.user.id === data.user?.id && (
        <IconButton Icon={LogOut} onClick={handleLogout} />
      )}
    </div>
  );
}
