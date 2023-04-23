import { ListDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  params: {
    id: string;
  };
};

export default async function ListPage({ params }: Props) {
  const { data } = await apolloClient.query({
    query: ListDocument,
    variables: { id: params.id },
  });

  return (
    <div className="px-5 py-8 pt-20 w-full">
      <h1 className="text-3xl lg:text-5xl mb-8">{data.list?.title}</h1>

      <div
        className="grid gap-3 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 0.5fr))',
        }}
      >
        {data.list?.movies.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            <div className="relative h-[250px] w-full mb-2">
              <Image
                src={
                  movie.poster ??
                  'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
                }
                alt="Poster"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="text-lg text-center">
              {movie.title} ({movie.year})
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export const revalidate = 0;
