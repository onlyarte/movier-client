'use client';

import { Search as SearchIcon } from 'react-feather';
import IconButton from '../../IconButton';
import { usePathname, useRouter } from 'next/navigation';
import SignInButton from '@/app/auth/SignInButton';
import Image from 'next/image';

export default function Menu() {
  const router = useRouter();
  const pathname = usePathname();
  const isHomeOrSearch = pathname === '/search' || pathname === '/';

  return (
    <div className="absolute z-10 top-4 left-4 flex items-center gap-3">
      {!isHomeOrSearch && (
        <Image src="/favicon.png" width={42} height={42} alt="Movier Logo" />
      )}
      <SignInButton className="bg-gray-400/60 hover:bg-gray-400/90 dark:bg-gray-600/60 dark:hover:bg-gray-600/90" />
      {!isHomeOrSearch && (
        <IconButton Icon={SearchIcon} onClick={() => router.push('/search')} />
      )}
    </div>
  );
}
