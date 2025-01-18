'use client';

import { ForwardedRef, forwardRef } from 'react';
import { Icon } from 'react-feather';
import { sizes } from './IconButton.config';
import Loader from '../Loader';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: Icon;
  size?: keyof typeof sizes;
  background?: 'neutral' | 'highlight';
  padding?: string;
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
    padding = 'p-3',
    ...otherProps
  }: Props,
  ref: ForwardedRef<HTMLButtonElement | null>
) {
  const iconProps = {
    strokeWidth: 1.25,
    size: sizes[size],
    width: sizes[size],
    height: sizes[size],
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-3xl bg-gray-400/85 hover:bg-gray-400/100 dark:bg-gray-600/85 dark:hover:bg-gray-600/100 ${padding} ${className}`}
      ref={ref}
      {...otherProps}
    >
      {loading ? <Loader {...iconProps} /> : <Icon {...iconProps} />}
    </button>
  );
});
