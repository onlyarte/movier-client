'use client';

import { UpdateUserDocument, UserQuery } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { Button, Dialog, IconButton, Input, TextArea } from '@/app/components';
import { Edit } from 'react-feather';
import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { uploadFile } from '@/utils/upload';
import { useRouter } from 'next/navigation';

type Props = {
  data: UserQuery;
};

export default function UserControls({ data }: Props) {
  const router = useRouter();
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [updateUser] = useMutation(UpdateUserDocument);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const fields = event.target as unknown as {
        name: { value: string };
        about: { value: string };
        photo: { files: File[] };
      };

      await updateUser({
        variables: {
          input: {
            name: fields.name.value,
            about: fields.about.value,
            photoUrl: await uploadFile(fields.photo.files?.[0]),
          },
        },
      });

      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (user?.id !== data.user?.id) return null;

  return (
    <>
      <IconButton Icon={Edit} onClick={() => setIsOpen(true)} />

      <Dialog
        header="Update Profile"
        footer={
          <>
            <>
              <Button
                disabled={isLoading}
                onClick={() => setIsOpen(false)}
                className="w-[130px]"
                outline={false}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                form="update-user-form"
                disabled={isLoading}
                loading={isLoading}
                className="w-[130px]"
              >
                Save
              </Button>
            </>
          </>
        }
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
      >
        <form
          id="update-user-form"
          className="space-y-4"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1">
              Name
            </label>
            <Input
              type="text"
              name="name"
              id="name"
              required
              defaultValue={data.user?.name}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="about" className="mb-1">
              About
            </label>
            <TextArea
              name="about"
              id="about"
              defaultValue={data.user?.about ?? undefined}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="photo-input" className="mb-1">
              Profile picture
            </label>
            <input type="file" name="photo" id="photo-input" />
          </div>
        </form>
      </Dialog>
    </>
  );
}
