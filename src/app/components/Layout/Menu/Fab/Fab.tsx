'use client';

import { Home as HomeIcon, LogIn as LoginIcon } from 'react-feather';
import IconLink from '@/app/components/IconLink';
import { useAuthContext } from '@/utils/auth/context';

type Props = {
  className?: string;
};

export default function Fab({ className }: Props) {
  const { authData } = useAuthContext();

  return authData ? (
    <IconLink
      Icon={HomeIcon}
      href={`/user/${authData.user.id}`}
      className={className}
    />
  ) : (
    <IconLink
      Icon={LoginIcon}
      href="/auth"
      className={className}
    />
  );
}
