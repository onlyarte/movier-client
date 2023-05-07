'use client';

import { Button, IconButton, Input, Modal } from '@/app/components';
import { CreateListDocument, UserDocument } from '@/graphql/graphql';
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

type Props = Partial<Omit<Parameters<typeof IconButton>['0'], 'onClick'>>;

export default function CreateListButton(props: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    await createList({
      variables: { input: formState },
      refetchQueries: [UserDocument],
    });

    router.refresh();

    setIsModalOpen(false);
    setFormState(defaultFormState);
  };

  return (
    <>
      <IconButton
        size="sm"
        Icon={Plus}
        onClick={() => setIsModalOpen(true)}
        {...props}
      />

      <Modal
        header="Create List"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position="right"
        className="lg:w-full"
      >
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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

          <Button
            type="submit"
            disabled={loading}
            loading={loading}
            className="w-[130px]"
          >
            Save
          </Button>
        </form>
      </Modal>
    </>
  );
}
