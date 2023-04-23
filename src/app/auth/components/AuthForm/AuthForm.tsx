'use client';

import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import { Button, Input } from '@/app/components';
import InputFile from '@/app/components/InputFile/InputFile';
import {
  AuthDataFragment,
  LoginDocument,
  SignupDocument,
} from '@/graphql/graphql';
import { useAuthContext } from '@/utils/auth/context';

type FormState = {
  email: string;
  password: string;
  name: string;
  file?: File;
};

export default function AuthForm() {
  const [isNew, setIsNew] = useState(false);

  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    name: '',
    file: undefined,
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFileChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.files?.[0],
    }));
  };

  const [login, loginResponse] = useMutation(LoginDocument);
  const [signup, signupResponse] = useMutation(SignupDocument);
  const loading = loginResponse.loading || signupResponse.loading;

  const router = useRouter();
  const { authData, setAuthData } = useAuthContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const { email, password, name, file } = formState;

    let authData: AuthDataFragment | undefined;
    if (isNew) {
      let photoUrl;
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/file`,
          {
            method: 'POST',
            body: formData,
          }
        );
        if (response.status === 200) {
          photoUrl = await response.text();
        }
      }

      const { data } = await signup({
        variables: { input: { email, password, name, photoUrl } },
      });
      authData = data?.signup as AuthDataFragment | undefined;
    } else {
      const { data } = await login({
        variables: { input: { email, password } },
      });
      authData = data?.login as AuthDataFragment | undefined;
    }

    if (authData) {
      setAuthData?.(authData);
      router.push(`/user/${authData.user.id}`);
    }
  };

  useEffect(() => {
    if (authData) {
      router.push(`/user/${authData.user.id}`);
    }
  }, [router, authData]);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        required
      />
      <Input
        name="password"
        placeholder="Password"
        type="password"
        value={formState.password}
        onChange={handleChange}
        required
      />
      {isNew && (
        <Input
          name="name"
          placeholder="Name"
          value={formState.name}
          onChange={handleChange}
          required
        />
      )}
      {isNew && (
        <InputFile
          value={formState.file?.name}
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleFileChange}
        />
      )}
      <div className="flex gap-3">
        <Button
          type="submit"
          disabled={loading}
          loading={loading}
          className="w-[130px]"
        >
          {isNew ? 'Sign up' : 'Sign in'}
        </Button>
        <button
          type="button"
          onClick={() => setIsNew((prev) => !prev)}
          className="text-sm"
        >
          {isNew ? 'Have an account?' : "Don't have an account?"}
        </button>
      </div>
    </form>
  );
}
