import { UserDocument } from '@/graphql/graphql';
import { useQuery } from '@apollo/client';
import { useUser } from '@auth0/nextjs-auth0/client';

export const useAuth = () => {
  const {
    user: authInfo,
    error: auth0Error,
    isLoading: auth0Loading,
  } = useUser();

  const { data, error, loading, refetch } = useQuery(UserDocument, {
    variables: { id: authInfo?.sub! },
    skip: !authInfo?.sub,
    pollInterval: 1000 * 60, // 1 minute
  });

  return {
    user: data?.user,
    refetch,
    error: error || auth0Error,
    loading: loading || auth0Loading,
    authInfo,
  };
};
