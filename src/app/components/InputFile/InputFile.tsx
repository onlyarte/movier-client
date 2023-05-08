'use client';

import React from 'react';
import { Camera } from 'react-feather';

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export default function InputFile({ value, className, ...otherProps }: Props) {
  return (
    <div
      className={`relative flex items-center justify-between cursor-pointer w-full h-12 px-5 py-2 rounded-3xl focus-visible:outline-none bg-background/50 border border-border-secondary/50 ${className}`}
    >
      {value ? (
        <div>{value}</div>
      ) : (
        <div className="text-foreground/50">Avatar</div>
      )}
      <Camera className="text-foreground/75" />
      <input
        className={`block absolute top-0 bottom-0 left-0 right-0 opacity-0 cursor-pointer`}
        type="file"
        {...otherProps}
      />
    </div>
  );
}
