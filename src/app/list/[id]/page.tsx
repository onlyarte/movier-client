import { ListDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Image from 'next/image';
import Link from 'next/link';
import DeleteListButton from './components/DeleteListButton/DeleteListButton';

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
      <div className="flex items-center mb-8 gap-2">
        <h1 className="text-3xl lg:text-5xl">{data.list?.title}</h1>
        {data.list && (
          <DeleteListButton listId={params.id} ownerId={data.list.owner.id} />
        )}
      </div>

      <div
        className="grid gap-3 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
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
