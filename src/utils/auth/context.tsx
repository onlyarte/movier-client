'use client';

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { AuthDataFragment } from '@/graphql/graphql';
import { persistAuthData, retrieveAuthData } from './storage';

const AuthContext = createContext<{
  authData?: AuthDataFragment;
  setAuthData?: Dispatch<SetStateAction<AuthDataFragment | undefined>>;
}>({});

type Props = {
  children: React.ReactNode;
};

export function AuthProvider({ children }: Props) {
  const [authData, setAuthData] = useState<AuthDataFragment>();
  const [isFirstRender, setIsFirstRender] = useState(true);

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
    <AuthContext.Provider value={{ authData, setAuthData }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
