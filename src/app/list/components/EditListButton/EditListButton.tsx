'use client';

import { Button, Dialog, IconButton, Input } from '@/app/components';
import { ListDataFragment } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { useState } from 'react';
import { Edit } from 'react-feather';
import { updateList } from './actions';

type FormState = {
  title: string;
  description?: string;
};

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>> & {
  list: ListDataFragment;
};

export default function EditListButton({ list, ...buttonProps }: Props) {
  const { user } = useAuth();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [formState, setFormState] = useState<FormState>({
    title: list.title,
    description: list.description ?? '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    await updateList(list.id, formState);

    setIsDialogOpen(false);
    setFormState({
      title: list.title,
      description: list.description ?? '',
    });
  };

  if (!user || user.id !== list.owner.id) {
    return null;
  }

  return (
    <>
      <IconButton
        size="sm"
        background="highlight"
        Icon={Edit}
        onClick={() => setIsDialogOpen(true)}
        {...buttonProps}
      />

      <Dialog
        isOpen={isDialogOpen}
        onToggle={() => setIsDialogOpen(!isDialogOpen)}
        size="sm"
        header="Edit List"
        footer={
          <>
            <Button
              onClick={() => setIsDialogOpen(false)}
              className="w-[130px]"
              outline={false}
            >
              Cancel
            </Button>
            <Button type="submit" form="edit-list-form" className="w-[130px]">
              Save
            </Button>
          </>
        }
      >
        <form
          id="edit-list-form"
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
    </>
  );
}
