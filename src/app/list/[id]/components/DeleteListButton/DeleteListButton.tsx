'use client';

import { Button, Dialog, IconButton } from '@/app/components';
import { DeleteListDocument, UserDocument } from '@/graphql/graphql';
import { useAuthContext } from '@/utils/auth/context';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Trash2 } from 'react-feather';

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  listId: string;
  ownerId: string;
};

export default function DeleteListButton({
  listId,
  ownerId,
  ...buttonProps
}: Props) {
  const { authData } = useAuthContext();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [deleteList, { loading }] = useMutation(DeleteListDocument);

  const router = useRouter();

  const handleSubmit = async () => {
    await deleteList({
      variables: { id: listId },
      refetchQueries: [UserDocument],
    });

    router.push(`/user/${authData?.user.id}`);

    setIsDialogOpen(false);
  };

  if (!authData || authData.user.id !== ownerId) {
    return null;
  }

  return (
    <>
      <IconButton
        size="sm"
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
