import { UserDocument, UserListDataFragment } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import Image from 'next/image';
import { ListGroup, UserControls } from './components';
import { IconButton } from '@/app/components';
import CreateListButton from './components/CreateListButton/CreateListButton';
import { makeMetadata } from '@/utils/metadata';

type Props = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: Props) {
  const { data } = await apolloClient.query({
    query: UserDocument,
    variables: { id: params.id },
    fetchPolicy: 'network-only',
  });

  return (
    <>
      <div className="basis-[350px] lg:basis-2/5 overflow-hidden">
        <div className="h-full w-full relative">
          <UserControls data={data} />
          <Image
            src={
              data.user?.photoUrl ??
              'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
            }
            alt="User photo background"
            fill
            className="object-cover blur-md scale-110"
          />
          <div className="absolute h-full w-full px-5 py-8 lg:p-8 flex flex-col justify-center items-center">
            <Image
              src={
                data.user?.photoUrl ??
                'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
              }
              alt="User photo"
              width={300}
              height={300}
              className="object-cover h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full"
            />
            <h1 className="text-xl lg:text-3xl text-center mt-5">
              {data.user?.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="basis-auto lg:basis-3/5 px-5 py-8 lg:p-8 lg:overflow-y-auto relative">
        <div className="flex items-center mb-2 gap-2">
          <h2 className="text-3xl lg:text-4xl">Lists</h2>
          {data.user && <CreateListButton userId={data.user?.id} />}
        </div>
        <ListGroup lists={data.user?.lists as UserListDataFragment[]} />
        <h2 className="text-3xl lg:text-4xl mt-5 mb-2">Saved Lists</h2>
        <ListGroup lists={data.user?.savedLists as UserListDataFragment[]} />
      </div>
    </>
  );
}

export async function generateMetadata({ params }: Props) {
  const { data } = await apolloClient.query({
    query: UserDocument,
    variables: { id: params.id },
  });

  return makeMetadata({ title: data.user?.name });
}

export const revalidate = 0;
