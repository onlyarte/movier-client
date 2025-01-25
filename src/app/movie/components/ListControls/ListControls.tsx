'use client';

import { IconButton } from '@/app/components';
import {
  ListDocument,
  PullMovieDocument,
  PushMovieDocument,
} from '@/graphql/graphql';
import { useMutation } from '@apollo/client';
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from '@material-tailwind/react';
import { Check, Plus } from 'react-feather';
import { useRevalidatePath } from '@/utils/next-revalidate';
import { useAuth } from '@/app/auth';
import { useState } from 'react';
import { CreateListDialog } from '@/app/list/components/CreateListButton';

type Props = {
  movieTmdbId: number;
};

export default function ListControls({ movieTmdbId }: Props) {
  const { user, refetch } = useAuth();

  const lists = user?.lists ?? [];

  const [pushMovie] = useMutation(PushMovieDocument);
  const [pullMovie] = useMutation(PullMovieDocument);

  const [revalidatePath] = useRevalidatePath();

  const handleClick = async (listId: string, isAdded: boolean) => {
    await (isAdded ? pullMovie : pushMovie)({
      variables: { listId, movieTmdbId },
      refetchQueries: [{ query: ListDocument, variables: { id: listId } }],
    });
    await refetch?.();

    revalidatePath(`/list/${listId}`);
  };

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  if (!lists.length) {
    return null;
  }

  return (
    <>
      <Menu placement="bottom-start">
        <MenuHandler>
          <IconButton Icon={Plus} type="button" background="highlight" />
        </MenuHandler>
        <MenuList className="p-0 border-0 rounded-lg backdrop-blur bg-background/75 text-current shadow-2xl">
          {lists.map((list) => {
            const isAdded = list.movies.some(
              ({ tmdbId }) => tmdbId === String(movieTmdbId)
            );
            return (
              <MenuItem
                role="button"
                onClick={() => handleClick(list.id, isAdded)}
                key={list.id}
                className="flex items-center justify-between rounded-lg text-md"
              >
                {list.title}
                {isAdded && <Check size={18} />}
              </MenuItem>
            );
          })}
          <MenuItem
            role="button"
            onClick={() => setIsCreateDialogOpen(true)}
            className="flex items-center justify-between rounded-lg font-semibold text-md"
          >
            New List
            <Plus size={18} />
          </MenuItem>
        </MenuList>
      </Menu>
      <CreateListDialog
        isDialogOpen={isCreateDialogOpen}
        setIsDialogOpen={setIsCreateDialogOpen}
        onSuccess={(listId) => handleClick(listId, false)}
      />
    </>
  );
}
