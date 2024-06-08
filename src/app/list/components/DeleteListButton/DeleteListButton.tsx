'use client';

import { Button, Dialog, IconButton } from '@/app/components';
import { DeleteListDocument, UserDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Trash2 } from 'react-feather';
import { useRevalidatePath } from '@/utils/next-revalidate';

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  listId: string;
  ownerId: string;
};

export default function DeleteListButton({
  listId,
  ownerId,
  ...buttonProps
}: Props) {
  const { user } = useAuth();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [deleteList, { loading }] = useMutation(DeleteListDocument);

  const router = useRouter();
  const [revalidatePath] = useRevalidatePath(`/user/${user?.id}`);

  const handleSubmit = async () => {
    await deleteList({
      variables: { id: listId },
      refetchQueries: [UserDocument],
    });

    await revalidatePath();
    router.push(`/user/${user?.id}`);

    setIsDialogOpen(false);
  };

  if (!user || user.id !== ownerId) {
    return null;
  }

  return (
    <>
      <IconButton
        size="sm"
        background="highlight"
        Icon={Trash2}
        onClick={() => setIsDialogOpen(true)}
        {...buttonProps}
      />
      <Dialog
        isOpen={isDialogOpen}
        onToggle={() => setIsDialogOpen(!isDialogOpen)}
        size="sm"
        header="Delete List"
        footer={
          <>
            <Button
              disabled={loading}
              onClick={() => setIsDialogOpen(false)}
              className="w-[130px]"
              outline={false}
            >
              Cancel
            </Button>
            <Button
              disabled={loading}
              loading={loading}
              onClick={handleSubmit}
              className="w-[130px]"
            >
              Confirm
            </Button>
          </>
        }
      >
        This action cannot be undone. Are you sure you want to delete this list?
      </Dialog>
    </>
  );
}
