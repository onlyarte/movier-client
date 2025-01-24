'use client';

import { CSSProperties } from 'react';
import { Search as SearchIcon } from 'react-feather';
import { IconButton, Input } from '@/app/components';
import { useRouter } from 'next/navigation';
import { z } from 'zod';

const FormValues = z.object({
  q: z.object({
    value: z.string(),
  }),
});

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
  const router = useRouter();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    try {
      const formValues = FormValues.parse(event.currentTarget);
      router.push(`/search?q=${encodeURIComponent(formValues.q.value)}`);
      onSubmit?.();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex mb-4 gap-2 ${className}`}
      style={style}
    >
      <Input
        defaultValue={initialValue}
        name="q"
        placeholder={placeholder}
        autoFocus={autoFocus}
        outlined
      />
      <IconButton type="submit" Icon={SearchIcon} />
    </form>
  );
}
