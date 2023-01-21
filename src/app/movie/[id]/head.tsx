import Head from '@/app/components/Head/Head';
import { fetchMovie } from './queries';

type Props = {
  params: {
    id: string;
  };
};

export default async function MovieHead({ params }: Props) {
  const { data } = await fetchMovie(parseInt(params.id));

  return (
    <>
      <Head />
      <title>{data.movie.title}</title>
    </>
  );
}
