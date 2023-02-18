'use client';

import { Button, Input } from '@/app/components';
import {
  AuthDataFragment,
  LoginDocument,
  SignupDocument,
} from '@/graphql/graphql';
import { getAuthData, setAuthData, withApolloProvider } from '@/utils/apollo';
import { useMutation } from '@apollo/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function AuthForm() {
  const [isNew, setIsNew] = useState(false);

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const [login, loginResponse] = useMutation(LoginDocument);
  const [signup, signupResponse] = useMutation(SignupDocument);
  const loading = loginResponse.loading || signupResponse.loading;

  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();

    let authData: AuthDataFragment | undefined;
    if (isNew) {
      // const { data } = await signup({ variables: { input: formState } });
      // authData = data?.signup as AuthDataFragment | undefined;
    } else {
      const { data } = await login({ variables: { input: formState } });
      authData = data?.login as AuthDataFragment | undefined;
    }

    if (authData) {
      setAuthData(authData);
      router.push(`/user/${authData.user.id}`);
    }
  };

  useEffect(() => {
    const authData = getAuthData();
    if (authData) {
      router.push(`/user/${authData.user.id}`);
    }
  }, []);

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        name="email"
        type="email"
        value={formState.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <Input
        name="password"
        type="password"
        value={formState.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <Button type="submit" disabled={loading} loading={loading}>
        {isNew ? 'Sign up' : 'Sign in'}
      </Button>
    </form>
  );
}

export default withApolloProvider(AuthForm);
