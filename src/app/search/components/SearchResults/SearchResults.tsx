'use client';

import Link from 'next/link';
import { Poster } from '@/app/components';
import { SearchDocument } from '@/graphql/graphql';
import { useQuery } from '@apollo/client';
import LoadingSkeleton from './LoadingSkeleton';

type Props = {
  query: string | undefined;
};

export default function SearchResults({ query }: Props) {
  const { data, loading } = useQuery(SearchDocument, {
    variables: { input: query! },
    skip: !query,
  });

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <div
      className="grid gap-3 w-full"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      }}
    >
      {data?.search.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className="relative h-[250px] w-full mb-2">
            <Poster
              src={
                movie.poster ??
                'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
              }
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
      ))}
    </div>
  );
}
