'use client';

import { useAuth } from '@/app/auth';
import { redirect, RedirectType } from 'next/navigation';

export default function CurrentUserPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    const isNewUser =
      new Date(user.createdAt) > new Date(Date.now() - 3 * 60000); // created less than 3 mins ago

    redirect(
      `/user/${user.id}${isNewUser ? '?onboarding=1' : ''}`,
      RedirectType.replace
    );
  } else {
    redirect('/', RedirectType.replace);
  }
}
