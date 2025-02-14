'use client';

import { Button, Dialog, IconButton, Input } from '@/app/components';
import { CreateListDocument, UserDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Plus } from 'react-feather';

type FormState = {
  title: string;
  description?: string;
};

const defaultFormState = {
  title: '',
  description: '',
};

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  userId: string;
};

export default function CreateListButton({ userId, ...buttonProps }: Props) {
  const { user } = useAuth();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  if (!user || user.id !== userId) {
    return null;
  }

  return (
    <>
      <IconButton
        size="sm"
        background="highlight"
        Icon={Plus}
        onClick={() => setIsDialogOpen(true)}
        {...buttonProps}
      />

      <CreateListDialog
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
}

type DialogProps = {
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
  onSuccess?: (id: string) => void;
};

export const CreateListDialog = function CreateListDialog({
  isDialogOpen,
  setIsDialogOpen,
  onSuccess,
}: DialogProps) {
  const [formState, setFormState] = useState<FormState>(defaultFormState);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [createList, { loading }] = useMutation(CreateListDocument);

  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    const result = await createList({
      variables: { input: formState },
      refetchQueries: [UserDocument],
    });

    if (result.data?.createList?.id != null) {
      onSuccess?.(result.data.createList.id);
    }

    router.refresh();

    setIsDialogOpen(false);
    setFormState(defaultFormState);
  };

  return (
    <Dialog
      isOpen={isDialogOpen}
      onToggle={() => setIsDialogOpen(!isDialogOpen)}
      size="sm"
      header="New List"
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
            type="submit"
            form="create-list-form"
            disabled={loading}
            loading={loading}
            className="w-[130px]"
          >
            Save
          </Button>
        </>
      }
    >
      <form
        id="create-list-form"
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
      >
        <Input
          name="title"
          placeholder="Title"
          value={formState.title}
          onChange={handleChange}
          required
        />
        <Input
          name="description"
          placeholder="Description"
          value={formState.description}
          onChange={handleChange}
        />
      </form>
    </Dialog>
  );
};
