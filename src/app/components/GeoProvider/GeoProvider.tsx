'use client';

import { useAuth } from '@/app/auth';
import { UpsertUserLocationDocument } from '@/graphql/graphql';
import { useMutation } from '@apollo/client';
import { createContext, useContext, useEffect, useState } from 'react';

type GeoData = {
  country: string | null | undefined;
  region: string | null | undefined;
  city: string | null | undefined;
  ip: string | null | undefined;
  timezone: string | null | undefined;
};

const GeoContext = createContext<GeoData | undefined>(undefined);

export function GeoProvider({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();

  const [geoData, setGeoData] = useState<GeoData | undefined>();

  useEffect(() => {
    (async () => {
      const response = await fetch('/api/geo');
      if (response.ok) {
        const geoData = await response.json();
        setGeoData({
          ...geoData,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        });
      }
    })();
  }, []);

  const [updateLocation] = useMutation(UpsertUserLocationDocument);

  useEffect(() => {
    if (geoData && user) {
      alert('update');
      updateLocation({ variables: { input: geoData } });
    }
  }, [geoData, user]);

  return <GeoContext.Provider value={geoData}>{children}</GeoContext.Provider>;
}

export function useGeoData() {
  return useContext(GeoContext);
}
