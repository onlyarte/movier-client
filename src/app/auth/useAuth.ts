'use client';

import { UserDocument } from '@/graphql/graphql';
import { useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

export default function useAuth() {
  const session = useSession();

  const { data, error, loading, refetch } = useQuery(UserDocument, {
    variables: { id: session.data?.user?.email! },
    skip: !session.data?.user?.email,
    pollInterval: 1000 * 60, // 1 minute
  });

  return {
    user: data?.user,
    refetch,
    error: error,
    loading: loading,
    authInfo: session.data,
  };
}
