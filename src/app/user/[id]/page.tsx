import { UserDocument, UserListDataFragment } from '@/graphql/graphql';
import { apolloClient } from '@/utils/apollo';
import { makeMetadata } from '@/utils/metadata';
import { CreateListButton } from '../../list/components';
import { ListGroup, UserControls } from '../components';
import { AVATAR } from '@/app/components/Image/assets';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

export default async function UserPage({ params }: Props) {
  const { data } = await apolloClient.query({
    query: UserDocument,
    variables: { id: decodeURIComponent(params.id) },
  });

  return (
    <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen">
      <div className="basis-[380px] lg:basis-2/5 overflow-hidden flex bg-black">
        <div className="w-full relative">
          <Image
            src={data.user?.photoUrl ?? AVATAR}
            width={500}
            height={500}
            alt="User photo background"
            className="absolute w-full h-full object-cover blur-md grayscale scale-110 opacity-60"
          />
          <div className="absolute h-full w-full px-5 pt-20 pb-8 lg:p-8 flex flex-col justify-center items-center">
            <Image
              src={data.user?.photoUrl ?? AVATAR}
              width={500}
              height={500}
              alt="User photo"
              className="object-cover h-[200px] w-[200px] lg:h-[300px] lg:w-[300px] rounded-full"
            />
            <div className="flex gap-2 items-center mt-5">
              <h1 className="text-xl lg:text-3xl text-center text-white">
                {data.user?.name}
              </h1>
              <UserControls data={data} />
            </div>
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
    </div>
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
