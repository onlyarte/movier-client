'use client';

import Image, { ImageLoader, ImageProps } from 'next/image';

// Supported values:
// [ 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original' ]
export default function Poster(props: Omit<ImageProps, 'loader'>) {
  const posterLoader: ImageLoader = ({ src, width, quality }) => {
    if (width < 92) {
      return src.replace('original', 'w92');
    } else if (width < 154) {
      return src.replace('original', 'w154');
    } else if (width < 185) {
      return src.replace('original', 'w185');
    } else if (width < 342) {
      return src.replace('original', 'w342');
    } else if (width < 500) {
      return src.replace('original', 'w500');
    } else if (width < 780) {
      return src.replace('original', 'w780');
    }
    return src;
  };

  return <Image {...props} loader={posterLoader} />;
}
