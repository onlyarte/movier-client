import { Head } from '@/app/components';
import { UserDocument } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';

type Props = {
  params: {
    id: string;
  };
};

export default async function UserHead({ params }: Props) {
  const { data } = await apolloClient.query({
    query: UserDocument,
    variables: { id: params.id },
  });

  return <Head title={data.user?.name} />;
}
