import { Layout } from '@/app/components';
import Image from 'next/image';
import { fetchMovie } from './queries';

type Props = {
  params: {
    id: string;
  };
};

export default async function Movie({ params }: Props) {
  const { data } = await fetchMovie(parseInt(params.id));

  return (
    <Layout>
      <div className="basis-[400px] lg:basis-2/5">
        <div className="h-full w-full relative">
          <Image
            src={data.movie.poster}
            alt="Poster"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="basis-auto lg:basis-3/5 px-5 py-8 lg:p-8 lg:overflow-y-auto">
        <div className="flex justify-between gap-3">
          <h1 className="text-3xl lg:text-5xl mb-2">{data.movie.title}</h1>
          <span className="text-2xl lg:text-5xl">{data.movie.rating}/10</span>
        </div>
        <div className="text-xl mb-4">
          {data.movie.year} | {data.movie.genres.join(', ')}
        </div>
        <p className="text-base mb-4">{data.movie.description}</p>
        <table className="mb-4">
          <tbody>
            {[
              { key: 'directors', title: 'Directors' },
              { key: 'writers', title: 'Writers' },
              { key: 'stars', title: 'Stars' },
            ].map(
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
            // width="100%"
            // height="450"
            src={data.movie.trailerUrl}
            title={`${data.movie.title} Trailer`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-screen lg:w-full h-[250px] lg:h-[450px] -mx-5 lg:m-0"
          />
        )}
      </div>
    </Layout>
  );
}
