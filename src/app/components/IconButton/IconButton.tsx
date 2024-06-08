'use client';

import { ForwardedRef, forwardRef } from 'react';
import { Icon, Loader } from 'react-feather';
import { sizes } from './IconButton.config';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: Icon;
  size?: keyof typeof sizes;
  background?: 'neutral' | 'highlight';
  loading?: boolean;
};

export default forwardRef(function IconButton(
  {
    Icon,
    size = 'md',
    background = 'neutral',
    onClick,
    className,
    loading,
    ...otherProps
  }: Props,
  ref: ForwardedRef<HTMLButtonElement | null>
) {
  const iconProps = {
    strokeWidth: 1,
    size: sizes[size],
    width: sizes[size],
    height: sizes[size],
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-3xl ${
        background === 'neutral'
          ? 'bg-background/80 hover:bg-background/100'
          : 'bg-gray-900/10 hover:bg-gray-900/20 dark:bg-gray-100/10 dark:hover:bg-gray-100/20'
      } p-2 ${className}`}
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
