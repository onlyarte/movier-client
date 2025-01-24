'use client';

import Link from 'next/link';
import { Poster } from '@/app/components';
import LoadingSkeleton from './LoadingSkeleton';
import EaseInOut from '@/app/components/EaseInOut';
import { COVER } from '@/app/components/Image/assets';
import Grid from './Grid';
import { SearchQuery, useSearchQuery } from './useSearchQuery';

type Props = {
  query: string | undefined;
  mock?: SearchQuery['search'];
};

export default function SearchResults({ query, mock }: Props) {
  const { data, loading } = useSearchQuery({
    variables: { input: query ?? '' },
    skip: !query || !!mock,
  });

  if (!mock) {
    if (loading && !data?.search?.length) {
      return (
        <Grid className="animate-pulse">
          <LoadingSkeleton />
        </Grid>
      );
    }

    if (!query) {
      return null;
    }

    if (!data?.search?.length) {
      return (
        <p className="mt-10 text-8xl lg:text-9xl text-current opacity-20 lg:text-center">
          No results found :(
        </p>
      );
    }
  }

  return (
    <>
      <div
        className="grid gap-3 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        }}
      >
        {(mock ?? data?.search ?? []).map((movie) => (
          <EaseInOut key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div className="relative h-[250px] w-full mb-2">
                <Poster
                  src={movie.poster ?? COVER}
                  alt="Poster"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg text-center mb-3">
                {movie.title} ({movie.year})
              </h2>
            </Link>
          </EaseInOut>
        ))}
        {loading && <LoadingSkeleton length={3} className="opacity-30" />}
      </div>
    </>
  );
}
