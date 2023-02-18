'use client';

import { InputHTMLAttributes } from 'react';

type Props = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  value,
  onChange,
  placeholder,
  className,
  ...otherProps
}: Props) {
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full h-12 px-5 py-2 rounded-3xl focus-visible:outline-none bg-background border ${className}`}
      {...otherProps}
    />
  );
}
