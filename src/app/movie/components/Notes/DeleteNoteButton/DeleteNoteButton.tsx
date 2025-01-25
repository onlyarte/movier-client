'use client';

import { IconButton } from '@/app/components';
import { DeleteNoteDocument, UserDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { Trash } from 'react-feather';
import { useRevalidatePath } from '@/utils/next-revalidate';

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  movieTmdbId: number;
  noteId: string;
  ownerId: string;
};

export default function DeleteNoteButton({
  movieTmdbId,
  noteId,
  ownerId,
  ...buttonProps
}: Props) {
  const { user } = useAuth();

  const [deleteNote, { loading }] = useMutation(DeleteNoteDocument);

  const router = useRouter();
  const [revalidatePath] = useRevalidatePath(`/movie/${movieTmdbId}`);

  const handleSubmit = async () => {
    await deleteNote({
      variables: { id: noteId },
      refetchQueries: [UserDocument],
    });

    await revalidatePath();
    router.refresh();
  };

  if (!user || user.id !== ownerId) {
    return null;
  }

  return (
    <IconButton
      size="sm"
      background="highlight"
      Icon={Trash}
      onClick={handleSubmit}
      loading={loading}
      disabled={loading}
      {...buttonProps}
    />
  );
}
