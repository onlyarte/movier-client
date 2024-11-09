'use client';

import { useAuth } from '@/app/auth';
import { redirect, RedirectType } from 'next/navigation';

export default function CurrentUserPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return null;
  }

  if (user) {
    redirect(`/user/${user.id}`, RedirectType.replace);
  } else {
    redirect('/', RedirectType.replace);
  }
}
