'use client';

import { UpdateUserDocument } from '@/graphql/graphql';
import { useAuth } from '@/app/auth';
import { Button, Dialog, Input, TextArea } from '@/app/components';
import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { uploadFile } from '@/utils/upload';
import { useRouter, useSearchParams } from 'next/navigation';
import { Camera } from 'react-feather';
import Loader from '@/app/components/Loader';
import { compressImage } from '@/utils/compress';
import { AVATAR } from '@/app/components/Image/assets';
import Image from 'next/image';

const supportedImageTypes = ['image/png', 'image/jpeg'];

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export default function EditUserDialog({ isOpen, setIsOpen }: Props) {
  const router = useRouter();
  const { user } = useAuth();

  const searchParams = useSearchParams();
  const onboarding = searchParams?.get('onboarding') === '1';

  useEffect(() => {
    if (onboarding && !isOpen) {
      setIsOpen(true);
    }
  }, [onboarding]);

  const setOnboarding = (value: boolean) => {
    router.push(`?onboarding=${value ? 1 : 0}`);
  };

  const [isLoading, setIsLoading] = useState(false);

  const [updateUser] = useMutation(UpdateUserDocument);

  const [isUploadingFile, setIsUploadingFile] = useState(false);
  const [uploadError, setUploadError] = useState<string | undefined>();
  const [photoUrl, setPhotoUrl] = useState<string | undefined>();

  const handlePhotoUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      setIsUploadingFile(true);
      setUploadError(undefined);
      const file = event.target.files?.[0];
      if (file) {
        if (!supportedImageTypes.includes(file.type)) {
          throw new Error('Wrong format');
        }
        const fileUrl = await uploadFile(await compressImage(file));
        setPhotoUrl(fileUrl);
      } else {
        setPhotoUrl(undefined);
      }
    } catch (error) {
      console.log(error);
      setUploadError(
        'Something went wrong while uploading the image. It must be a PNG or JPEG file up to 5MB'
      );
      setPhotoUrl(undefined);
    } finally {
      setIsUploadingFile(false);
    }
  };

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
            photoUrl,
          },
        },
      });

      setIsOpen(false);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
      onboarding && setOnboarding(false);
    }
  };

  return (
    <Dialog
      header={onboarding ? "Let's get acquainted!" : 'Update Profile'}
      footer={
        <>
          <>
            <Button
              disabled={isLoading}
              onClick={() => {
                setIsOpen(false);
                onboarding && setOnboarding(false);
              }}
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
      onToggle={() => {
        setIsOpen(!isOpen);
        onboarding && setOnboarding(false);
      }}
    >
      <form id="update-user-form" className="space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">
            Name
          </label>
          <Input
            type="text"
            name="name"
            id="name"
            required
            defaultValue={user?.name}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="about" className="mb-1">
            What do you like?
          </label>
          <TextArea
            name="about"
            placeholder="For example, I'm looking for rare classics and hidden arthouse treasures"
            id="about"
            defaultValue={user?.about ?? undefined}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="photo-input" className="mb-1">
            Profile Picture
          </label>
          <div className="relative self-start cursor-pointer">
            <Image
              src={photoUrl ?? user?.photoUrl ?? AVATAR}
              alt="Current profile photo"
              width={100}
              height={100}
              className="object-cover h-[80px] w-[80px] rounded-full opacity-40"
            />
            {isUploadingFile ? (
              <div className="absolute left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2 w-[24px] h-[24px]">
                <Loader size={24} />
              </div>
            ) : (
              <Camera
                size={24}
                className="absolute left-1/2 right-1/2 top-1/2 bottom-1/2 -translate-x-1/2 -translate-y-1/2"
              />
            )}
            <input
              name="photo"
              type="file"
              accept={supportedImageTypes.join(', ')}
              id="photo-input"
              className="absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer"
              disabled={isUploadingFile}
              onChange={handlePhotoUpload}
            />
          </div>
          {uploadError && (
            <div className="text-red-500 text-sm mt-1">{uploadError}</div>
          )}
        </div>
      </form>
    </Dialog>
  );
}
