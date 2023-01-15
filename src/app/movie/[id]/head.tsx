import { fetchMovie } from './queries';

type Props = {
  params: {
    id: string;
  };
};

export default async function Movie({ params }: Props) {
  const { data } = await fetchMovie(parseInt(params.id));

  return (
    <>
      <title>{data.movie.title}</title>
    </>
  );
}
