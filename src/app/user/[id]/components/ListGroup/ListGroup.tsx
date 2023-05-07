import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UserListDataFragment } from '@/graphql/graphql';

type Props = {
  lists?: UserListDataFragment[];
};

export default function ListGroup({ lists }: Props) {
  return (
    <div className="flex flex-wrap gap-3 w-full">
      {!lists?.length && (
        <div className="text-md">There&apos;s nothing here yet</div>
      )}
      {lists?.map((list) => (
        <Link
          href={`/list/${list.id}`}
          className="basis-[48%] md:basis-[180px]"
          key={list.id}
        >
          <div className="relative h-[250px] w-full mb-2">
            <Image
              src={
                list.movies[0]?.poster ??
                'https://storage.googleapis.com/movier-us/uploads%2F98eb2e7399cdbff0e67e42b967e15c50.jpg'
              }
              alt="List cover"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-lg text-center">{list.title}</h3>
          <div className="text-xs opacity-90 text-center">
            {list.movies.length === 0
              ? 'Empty'
              : list.movies.length === 1
              ? list.movies[0].title
              : `${list.movies[0].title} and ${list.movies.length - 1} more`}
          </div>
        </Link>
      ))}
    </div>
  );
}
