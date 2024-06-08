'use client';

import { TextareaHTMLAttributes } from 'react';

type Props = {
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function TextArea({
  value,
  onChange,
  placeholder,
  className,
  ...otherProps
}: Props) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={3}
      className={`w-full p-4 rounded-2xl focus-visible:outline-none bg-gray-300 dark:bg-gray-700 placeholder:text-foreground/50 ${className}`}
      {...otherProps}
    />
  );
}
