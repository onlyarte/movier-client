import { ListDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Link from 'next/link';
import { makeMetadata } from '@/utils/metadata';
import { DeleteListButton, EditListButton } from '../components';
import { Poster } from '@/app/components';
import SaveListButton from '../components/SaveListButton';
import Recommendations from './components/Recommendations';
import EaseInOut from '@/app/components/EaseInOut';
import { COVER, GHOST } from '@/app/components/Image/assets';
import Image from 'next/image';

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
    <div className="px-5 py-8 pt-20 w-full min-h-screen relative">
      <div className="flex items-center gap-2 mb-2">
        <h1 className="text-3xl lg:text-5xl">{data.list?.title}</h1>
        {data.list && <EditListButton list={data.list} />}
        {data.list && (
          <DeleteListButton listId={params.id} ownerId={data.list.owner.id} />
        )}
        {data.list && (
          <SaveListButton listId={params.id} ownerId={data.list.owner.id} />
        )}
      </div>
      <p className="text mb-2">{data.list?.description}</p>
      <p className="text mb-8">
        Curated by{' '}
        <Link href={`/user/${data.list?.owner.id}`} className="text-blue-600">
          {data.list?.owner.name}
        </Link>
      </p>

      {data.list?.movies.length ? (
        <>
          <div
            className="grid gap-3 w-full mb-8"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            }}
          >
            {data.list?.movies.map((movie) => (
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
          </div>

          <Recommendations listId={params.id} />
        </>
      ) : (
        <>
          <p className="mt-10 text-8xl lg:text-9xl text-current opacity-20">
            Nothing here yet
          </p>
          <Image
            src={GHOST}
            alt="Pink ghost"
            width={300}
            height={300}
            className="absolute w-[200px] lg:w-[300px] right-3 lg:right-1/3 top-1/2 lg:top-1/3"
          />
        </>
      )}
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
