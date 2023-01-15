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
    <div className="flex flex-col lg:flex-row">
      <div
        className="basis-full lg:basis-2/5 bg-center bg-cover"
        style={{ backgroundImage: `url(${data.movie.poster})` }}
      >
        <div className="flex justify-center items-center h-1/2 lg:h-screen backdrop-blur-lg">
          <div className="max-w-2/3 max-h-2/3">
            <Image
              src={data.movie.poster}
              alt="Poster"
              width="400"
              height="400"
            />
          </div>
        </div>
      </div>
      <div className="basis-full lg:basis-3/5 p-8">
        <div className="flex justify-between">
          <h1 className="text-5xl mb-2">{data.movie.title}</h1>
          <span className="text-5xl">{data.movie.rating}/10</span>
        </div>
        <div className="text-xl mb-4">
          {data.movie.year} | {data.movie.genres.join(', ')}
        </div>
        <p className="text-base mb-4">{data.movie.description}</p>
        <table>
          {[
            { key: 'directors', title: 'Directors' },
            { key: 'writers', title: 'Writers' },
            { key: 'stars', title: 'Stars' },
          ].map(
            ({ key, title }) =>
              data.movie[key] &&
              data.movie[key].length > 0 && (
                <tr key={key}>
                  <th className="text-left p-2 pl-0">{title}</th>
                  <td className="p-2">{data.movie[key].join(', ')}</td>
                </tr>
              )
          )}
        </table>
      </div>
    </div>
  );
}
