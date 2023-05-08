import { MovieDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Image from 'next/image';
import ListControls from './components/ListControls';
import { makeMetadata } from '@/utils/metadata';

type Props = {
  params: {
    id: string;
  };
};

export default async function MoviePage({ params }: Props) {
  // https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components
  const { data } = await apolloClient.query({
    query: MovieDocument,
    variables: { id: parseInt(params.id) },
  });

  return (
    <>
      <div className="basis-[400px] lg:basis-2/5">
        <div className="h-full w-full relative">
          <Image
            src={
              data.movie.poster ??
              'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
            }
            alt="Poster"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="basis-auto lg:basis-3/5 px-5 py-8 lg:p-8 lg:overflow-y-auto">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl lg:text-5xl mb-2">{data.movie.title}</h1>
          <ListControls movieId={data.movie.id} />
          {data.movie.rating != null && (
            <span className="text-2xl lg:text-5xl ml-auto">
              {data.movie.rating}/10
            </span>
          )}
        </div>
        <div className="text-xl mb-4">
          {data.movie.year} | {data.movie.genres.join(', ')}
        </div>
        <p className="text-base mb-4">{data.movie.description}</p>
        <table className="mb-4">
          <tbody>
            {(
              [
                { key: 'directors', title: 'Directors' },
                { key: 'writers', title: 'Writers' },
                { key: 'stars', title: 'Stars' },
              ] as const
            ).map(
              ({ key, title }) =>
                data.movie[key] &&
                data.movie[key].length > 0 && (
                  <tr key={key}>
                    <th className="text-left p-2 pl-0 align-top">{title}</th>
                    <td className="p-2">{data.movie[key].join(', ')}</td>
                  </tr>
                )
            )}
          </tbody>
        </table>

        {data.movie.trailerUrl && (
          <iframe
            src={data.movie.trailerUrl}
            title={`${data.movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-screen lg:w-full h-[250px] lg:h-[450px] -mx-5 lg:m-0"
          />
        )}
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { data } = await apolloClient.query({
    query: MovieDocument,
    variables: { id: parseInt(params.id) },
  });

  return makeMetadata({ title: `${data.movie.title} (${data.movie.year})` });
}

// https://beta.nextjs.org/docs/api-reference/segment-config#revalidate
export const revalidate = 0;
