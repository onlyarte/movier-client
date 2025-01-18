'use client';

import { CSSProperties, useState } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { IconButton, Input } from '@/app/components';
import { useRouter } from 'next/navigation';

type Props = {
  onSubmit?: () => void;
  initialValue?: string;
  placeholder?: string;
  autoFocus?: boolean;
  className?: string;
  style?: CSSProperties;
};

export default function SearchBar({
  onSubmit,
  initialValue,
  placeholder = 'Search...',
  autoFocus,
  className = '',
  style,
}: Props) {
  const [inputValue, setInputValue] = useState(initialValue ?? '');
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (!inputValue) return;
    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mb-4 gap-2 ${className}`}
      style={style}
    >
      <Input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        placeholder={placeholder}
        autoFocus={autoFocus}
        outlined
      />
      <IconButton type="submit" Icon={SearchIcon} />
    </form>
  );
}
