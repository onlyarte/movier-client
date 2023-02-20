import { AuthDataFragment } from '@/graphql/graphql';

const lsKey = 'authData';

export const retrieveAuthData = () => {
  if (typeof window === 'undefined') {
    console.warn('localStorage is not available');
    return undefined;
  }

  const rawData = localStorage.getItem(lsKey);
  if (!rawData) {
    return undefined;
  }

  const parsedData = JSON.parse(rawData) as AuthDataFragment;
  if (!parsedData.expiresAt || new Date(parsedData.expiresAt) < new Date()) {
    return undefined;
  }

  return parsedData;
};

export const persistAuthData = (data?: AuthDataFragment) => {
  if (typeof window === 'undefined') {
    console.warn('localStorage is not available');
  } else if (data) {
    localStorage.setItem(lsKey, JSON.stringify(data));
  } else {
    localStorage.removeItem(lsKey);
  }
};
