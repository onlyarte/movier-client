'use client';

import { useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { IconButton, IconLink, Input } from '@/app/components';
import { useRouter } from 'next/navigation';

type Props = {
  onSubmit?: () => void;
}

export default function SearchBar({ onSubmit }: Props) {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
    onSubmit?.();
  };

  return (
    <>
      <form className="flex mb-4 gap-2" onSubmit={handleSubmit}>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search..."
        />
        <IconButton type="submit" Icon={SearchIcon} />
      </form>
    </>
  );
}
