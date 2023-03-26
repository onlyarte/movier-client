'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  AuthDataFragment,
  UserDataFragment,
  UserDocument,
} from '@/graphql/graphql';
import { persistAuthData, retrieveAuthData } from './storage';
import { useQuery } from '@apollo/client';

const AuthContext = createContext<{
  authData?: AuthDataFragment;
  setAuthData?: Dispatch<SetStateAction<AuthDataFragment | undefined>>;
  userData?: UserDataFragment | null;
  refetchUserData?: () => Promise<unknown>;
}>({});

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [authData, setAuthData] = useState<AuthDataFragment>();
  const [isFirstRender, setIsFirstRender] = useState(true);

  const { data: userDataResult, refetch: refetchUserData } = useQuery(
    UserDocument,
    {
      variables: { id: authData?.user.id! },
      skip: !authData?.user.id,
    }
  );
  const userData = userDataResult?.user;

  useEffect(() => {
    setAuthData(retrieveAuthData());
  }, []);

  useEffect(() => {
    if (!isFirstRender) {
      persistAuthData(authData);
    }
    if (isFirstRender) {
      setIsFirstRender(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authData]);

  return (
    <AuthContext.Provider
      value={{ authData, setAuthData, userData, refetchUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
