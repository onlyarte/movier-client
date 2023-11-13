'use client';

import { IconButton } from '@/app/components';
import { SaveListDocument, UserDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { useMutation } from '@apollo/client';
import { Eye, EyeOff } from 'react-feather';
import { useMemo } from 'react';

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  listId: string;
  ownerId: string;
};

export default function SaveListButton({
  listId,
  ownerId,
  ...buttonProps
}: Props) {
  const { user } = useAuth();

  const isSaved = useMemo(
    () => user?.savedLists.some((list) => list.id === listId),
    [listId, user]
  );

  const [saveList, { loading: saving }] = useMutation(SaveListDocument);
  const [unsaveList, { loading: unsaving }] = useMutation(SaveListDocument);

  const handleSubmit = async () => {
    if (isSaved) {
      await unsaveList({
        variables: { id: listId },
        refetchQueries: [UserDocument],
      });
    } else {
      await saveList({
        variables: { id: listId },
        refetchQueries: [UserDocument],
      });
    }
  };

  if (!user || user.id === ownerId) {
    return null;
  }

  return (
    <IconButton
      size="sm"
      Icon={isSaved ? EyeOff : Eye}
      onClick={handleSubmit}
      disabled={saving || unsaving}
      {...buttonProps}
    />
  );
}
