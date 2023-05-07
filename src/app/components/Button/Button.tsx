'use client';

import classNames from 'classnames';
import { Loader } from 'react-feather';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  outline?: boolean;
};

export default function Button({
  onClick,
  className,
  loading,
  children,
  outline = true,
  ...otherProps
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'rounded-3xl p-3 border-current flex gap-2 items-center justify-center',
        className,
        { border: outline }
      )}
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
