import { ListDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Image from 'next/image';
import Link from 'next/link';
import { makeMetadata } from '@/utils/metadata';
import { DeleteListButton, EditListButton } from '../components';

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
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-3xl lg:text-5xl">{data.list?.title}</h1>
        {data.list && <EditListButton list={data.list} />}
        {data.list && (
          <DeleteListButton listId={params.id} ownerId={data.list.owner.id} />
        )}
      </div>
      <p className="text mb-2">{data.list?.description}</p>
      <p className="text mb-8">
        Curated by{' '}
        <Link href={`/user/${data.list?.owner.id}`} className="text-blue-600">
          {data.list?.owner.name}
        </Link>
      </p>

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
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
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

export async function generateMetadata({ params }: Props) {
  const { data } = await apolloClient.query({
    query: ListDocument,
    variables: { id: params.id },
  });

  return makeMetadata({ title: data.list?.title });
}

export const revalidate = 0;
