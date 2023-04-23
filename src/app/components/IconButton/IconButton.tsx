'use client';

import { ForwardedRef, forwardRef } from 'react';
import { Icon, Loader } from 'react-feather';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: Icon;
  loading?: boolean;
};

export default forwardRef(function IconButton(
  { Icon, onClick, className, loading, ...otherProps }: Props,
  ref: ForwardedRef<HTMLButtonElement | null>
) {
  const iconProps = {
    strokeWidth: 1,
    size: 32,
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-3xl bg-background/80 hover:bg-background/100 p-2 ${className}`}
      ref={ref}
      {...otherProps}
    >
      {loading ? (
        <Loader
          {...iconProps}
          style={{
            animationName: 'spin',
            animationDuration: '5000ms',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          }}
        />
      ) : (
        <Icon {...iconProps} />
      )}
    </button>
  );
});
