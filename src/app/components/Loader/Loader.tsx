'use client';

import { IconProps, Loader as LoaderIcon } from 'react-feather';

export default function Loader(iconProps: IconProps) {
  return (
    <LoaderIcon
      {...iconProps}
      style={{
        animationName: 'spin',
        animationDuration: '5000ms',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'linear',
        ...iconProps.style,
      }}
    />
  );
}
