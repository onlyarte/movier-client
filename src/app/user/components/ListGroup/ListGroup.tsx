import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserListDataFragment } from '@/graphql/graphql';
import EaseInOut from '@/app/components/EaseInOut';
import { GHOST } from '@/app/components/Image/assets';

type Props = {
  lists?: UserListDataFragment[];
};

export default function ListGroup({ lists }: Props) {
  if (!lists?.length) {
    return <div className="text-md">There&apos;s nothing here yet</div>;
  }
  return (
    <div
      className="grid gap-3 w-full"
      style={{
        gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
      }}
    >
      {lists?.map((list) => {
        const cover = list.movies[list.movies.length - 1]?.poster;
        return (
          <EaseInOut key={list.id}>
            <Link href={`/list/${list.id}`}>
              <div className="relative h-[250px] w-full mb-2 bg-gray-400/40 dark:bg-gray-600/20">
                <Image
                  src={cover ?? GHOST}
                  alt="List cover"
                  width={300}
                  height={300}
                  className={`${cover ? 'h-full object-cover' : 'absolute w-[100px] bottom-2 right-2'}`}
                />
              </div>
              <h3 className="text-lg text-center">{list.title}</h3>
              <div className="text-xs opacity-90 text-center mb-3">
                {list.movies.length === 0
                  ? 'Empty'
                  : list.movies.length === 1
                  ? list.movies[0].title
                  : `${list.movies[0].title} and ${
                      list.movies.length - 1
                    } more`}
              </div>
            </Link>
          </EaseInOut>
        );
      })}
    </div>
  );
}
