'use client';

import { MovieProvidersDocument } from '@/graphql/graphql';
import { getCountryCode } from '@/utils/geo';
import { useQuery } from '@apollo/client';
import Image from 'next/image';

const config = [
  { key: 'flatrate', title: 'Stream' },
  { key: 'rent', title: 'Rent' },
  { key: 'buy', title: 'Buy' },
] as const;

type Props = {
  movieId: number;
};

export default function MovieProviders({ movieId }: Props) {
  const region = getCountryCode() ?? 'US';

  const { data } = useQuery(MovieProvidersDocument, {
    variables: { id: movieId, region },
  });

  if (!data?.movie.providers) {
    return null;
  }

  return (
    <div className="flex gap-5 justify-end mb-8">
      {config.map(
        ({ key, title }) =>
          !!data.movie.providers?.[key]?.length && (
            <div key={key} className="flex flex-col gap-2">
              <div className="text font-light">{title}</div>
              <div className="grow flex gap-2">
                {data.movie.providers?.[key]?.map(
                  ({ id, providerName, providerLogoUrl }) => (
                    <Image
                      src={providerLogoUrl}
                      alt={providerName}
                      width={50}
                      height={50}
                      quality={100}
                      className="rounded-xl"
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
