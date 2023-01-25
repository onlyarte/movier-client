'use client';

import { Icon, Loader } from 'react-feather';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: Icon;
  loading?: boolean;
};

export default function IconButton({
  Icon,
  onClick,
  className,
  loading,
  ...otherProps
}: Props) {
  const iconProps = {
    strokeWidth: 1,
    size: 32,
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-3xl bg-background p-2 ${className}`}
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
}
