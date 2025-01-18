'use client';

import { InputHTMLAttributes } from 'react';

type Props = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  autoFocus?: boolean;
  outlined?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  value,
  onChange,
  placeholder,
  autoFocus,
  outlined,
  className,
  ...otherProps
}: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      className={`w-full h-12 px-5 py-2 rounded-3xl focus-visible:outline-none bg-gray-300 dark:bg-gray-700 placeholder:text-foreground/50 ${
        outlined
          ? 'bg-gray-400/75 dark:bg-gray-600/75'
          : ''
      } ${className}`}
      {...otherProps}
    />
  );
}
