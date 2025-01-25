'use client';

import { useGeoData } from '@/app/components/GeoProvider';
import { MovieProvidersDocument } from '@/graphql/graphql';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

const config = [
  { key: 'flatrate', title: 'Stream' },
  { key: 'rent', title: 'Rent' },
  { key: 'buy', title: 'Buy' },
] as const;

type Props = {
  movieTmdbId: number;
};

export default function MovieProviders({ movieTmdbId }: Props) {
  const clientLocation = useGeoData();
  const countryCode = clientLocation?.countryCode;

  const { data } = useQuery(MovieProvidersDocument, {
    variables: { tmdbId: movieTmdbId, region: countryCode! },
    skip: !countryCode,
  });

  if (!data?.movie.providers) {
    return null;
  }

  return (
    <div className="flex gap-5 mb-8 flex-wrap">
      {config.map(
        ({ key, title }) =>
          !!data.movie.providers?.[key]?.length && (
            <div key={key} className="flex flex-col gap-2">
              <div className="text font-light">{title}</div>
              <div className="grow flex gap-2 overflow-auto">
                {data.movie.providers?.[key]?.map(
                  ({ id, providerName, providerLogoUrl }) => (
                    <Image
                      src={providerLogoUrl}
                      alt={providerName}
                      width={50}
                      height={50}
                      quality={100}
                      className="shrink-0 rounded-xl"
                      key={id}
                    />
                  )
                )}
              </div>
            </div>
          )
      )}
    </div>
  );
}
