'use client';

import { Loader } from 'react-feather';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function Button({
  onClick,
  className,
  loading,
  children,
  ...otherProps
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl p-3 border border-current flex gap-2 items-center justify-center ${className}`}
      {...otherProps}
    >
      {loading && (
        <Loader
          strokeWidth={1}
          size={24}
          style={{
            animationName: 'spin',
            animationDuration: '5000ms',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        />
      )}
      {children}
    </button>
  );
}
