import { SearchDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Link from 'next/link';
import { Poster } from '@/app/components';

type Props = {
  searchParams: {
    q: string;
  };
};

export default async function Search({ searchParams }: Props) {
  const { data } = await apolloClient.query({
    query: SearchDocument,
    variables: { input: searchParams.q },
  });

  return (
    <div className="px-5 py-8 pt-20 w-full">
      <div className="flex items-center gap-2 mb-8">
        <h1 className="text-3xl lg:text-5xl">Results for `{searchParams.q}`</h1>
      </div>

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
    </div>
  );
}
