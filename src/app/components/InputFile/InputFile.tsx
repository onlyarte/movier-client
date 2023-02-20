'use client';

import React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputFile({ className, ...otherProps }: Props) {
  return (
    <input
      className={`block ${className}`}
      type="file"
      {...otherProps}
    />
  );
}
