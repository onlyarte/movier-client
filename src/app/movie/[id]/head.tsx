import { Head } from '@/app/components';
import { MovieDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';

type Props = {
  params: {
    id: string;
  };
};

export default async function MovieHead({ params }: Props) {
  const { data } = await apolloClient.query({
    query: MovieDocument,
    variables: { id: parseInt(params.id) },
  });

  return <Head title={`${data.movie.title} (${data.movie.year})`} />;
}
