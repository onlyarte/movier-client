'use client';

import { NoteDataFragment } from '@/graphql/graphql';
import Image from 'next/image';

import AddNoteForm from './AddNoteForm';
import DeleteNoteButton from './DeleteNoteButton';
import { ChevronDown, ChevronUp } from 'react-feather';
import { useState } from 'react';

import './styles.css';
import { AVATAR } from '@/app/components/Image/assets';

type Props = { movieId: number; notes: NoteDataFragment[] };

export default function Notes({ movieId, notes }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12 mb-4 md:bg-gray-200 md:dark:bg-gray-800 md:rounded-2xl md:p-4 md:border border-black/5">
      <div
        role="button"
        className="flex justify-between items-center"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="text-2xl">
          Notes
          {!!notes.length && (
            <span className="opacity-50"> ({notes.length})</span>
          )}
        </h2>
        {isExpanded ? (
          <ChevronUp className="opacity-50" />
        ) : (
          <ChevronDown className="opacity-50" />
        )}
      </div>
      {isExpanded && (
        <div className="mt-4 flex flex-col gap-4">
          <AddNoteForm movieId={movieId} />
          {notes.map((note) => (
            <div
              key={note.id}
              className="group rounded-2xl p-4 bg-gray-300 dark:bg-gray-700"
            >
              <div className="flex gap-3 mb-2 items-center">
                <Image
                  src={note.user?.photoUrl ?? AVATAR}
                  alt="User photo"
                  width={50}
                  height={50}
                  className="object-cover rounded-full h-[50px] w-[50px]"
                />
                <div className="text-sm">
                  <div className="mb-1 font-semibold">{note.user?.name}</div>
                  <div className="text-foreground/50">
                    {new Date(note.createdAt).toLocaleDateString()}
                  </div>
                </div>

                <DeleteNoteButton
                  noteId={note.id}
                  movieId={movieId}
                  ownerId={note.user!.id}
                  className="ml-auto opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-200 ease-in-out bg-transparent"
                />
              </div>
              <div className="text-base">{note.content}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
