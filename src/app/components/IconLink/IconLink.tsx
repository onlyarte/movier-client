'use client';

import Link, { LinkProps } from 'next/link';
import { Icon, Loader } from 'react-feather';

export const NativeLink = (props: any) => <a {...props} />;

type Props = LinkProps & {
  Icon: Icon;
  title?: string;
  loading?: boolean;
  className?: string;
  Component?: React.ElementType;
};

export default function IconLink({
  Icon,
  loading,
  className,
  Component = Link,
  ...otherProps
}: Props) {
  const iconProps = {
    strokeWidth: 1,
    size: 32,
  };

  return (
    <Component {...otherProps}>
      <div
        className={`rounded-3xl bg-background/80 hover:bg-background/100 p-2 w-fit ${className}`}
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
      </div>
    </Component>
  );
}
