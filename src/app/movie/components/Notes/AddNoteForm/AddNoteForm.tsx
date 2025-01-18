'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client';
import { Button, IconButton, TextArea } from '@/app/components';
import { AddNoteDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { Send } from 'react-feather';

type Props = {
  movieId: number;
};

export default function AddNoteForm({ movieId }: Props) {
  const { user } = useAuth();

  const [value, setValue] = useState<string>('');

  const [addNote, { loading }] = useMutation(AddNoteDocument);
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    await addNote({
      variables: { content: value, movieId },
    });

    router.refresh();

    setValue('');
  };

  if (!user) {
    return null;
  }

  return (
    <form className="flex flex-col gap-2 mb-6 relative" onSubmit={handleSubmit}>
      <TextArea
        name="content"
        placeholder="Your note"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        rows={3}
        className="min-h-[72px]"
      />
      <IconButton
        type="submit"
        size="sm"
        background="highlight"
        disabled={loading}
        Icon={(props) => (
          <Send
            {...props}
            className={`${props.className ?? ''} rotate-45 -translate-x-0.5`}
          />
        )}
        className="absolute bottom-4 right-4"
      />
    </form>
  );
}
