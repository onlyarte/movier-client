'use client';

import { UserQuery } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import SignOutButton from '@/app/auth/SignOutButton';

type Props = {
  data: UserQuery;
};

export default function UserControls({ data }: Props) {
  return null;

  // TODO: Edit profile
}
