'use client';
import { Poster } from '@/app/components';
import { ListRecommendationsDocument } from '@/graphql/graphql';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import LoadingSkeleton from '../LoadingSkeleton';

type Props = {
  listId: string;
};

export default function Recommendations({ listId }: Props) {
  const { data, loading } = useQuery(ListRecommendationsDocument, {
    variables: { listId },
  });

  return (
    <>
      <h1 className="text-2xl lg:text-4xl mb-8">Recommended</h1>

      {loading ? (
        <LoadingSkeleton />
      ) : data?.list?.recommendations.length === 0 ? (
        <p className="text-lg">No recommendations yet</p>
      ) : (
        <div
          className="grid gap-3 w-full"
          style={{
            gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          }}
        >
          {data?.list?.recommendations.map((movie) => (
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
      )}
    </>
  );
}
