'use client';

import { useAuth } from '@/app/auth';
import { UpsertUserLocationDocument } from '@/graphql/graphql';
import { useMutation } from '@apollo/client';
import { createContext, useContext, useEffect, useState } from 'react';
import { z } from 'zod';

const ApiResponse = z.object({
  query: z.string().nullable(),
  country: z.string().nullable(),
  countryCode: z.string().nullable(),
  region: z.string().nullable(),
  regionName: z.string().nullable(),
  city: z.string().nullable(),
  timezone: z.string().nullable(),
});

type GeoData = {
  country: string | null | undefined;
  countryCode: string | null | undefined;
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
      const response = await fetch('http://ip-api.com/json');
      if (response.ok) {
        const geoData = ApiResponse.parse(await response.json());
        setGeoData({
          country: geoData.country,
          countryCode: geoData.countryCode,
          region: geoData.region,
          city: geoData.city,
          ip: geoData.query,
          timezone: geoData.timezone,
        });
      }
    })();
  }, []);

  const [updateLocation] = useMutation(UpsertUserLocationDocument);

  useEffect(() => {
    if (geoData?.country && user) {
      const { countryCode, ...payload } = geoData;
      updateLocation({ variables: { input: payload } });
    }
  }, [geoData, user, updateLocation]);

  return <GeoContext.Provider value={geoData}>{children}</GeoContext.Provider>;
}

export function useGeoData() {
  return useContext(GeoContext);
}
