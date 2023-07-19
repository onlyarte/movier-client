'use client';

import Image, { ImageLoader, ImageProps } from 'next/image';

// Supported values:
// [ 'w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original' ]
export default function Poster(props: Omit<ImageProps, 'loader'>) {
  const posterLoader: ImageLoader = ({ src, width }) => {
    let newSrc = src.replace('http://', 'https://');
    if (width < 92) {
      newSrc = newSrc.replace('original', 'w92');
    } else if (width < 154) {
      newSrc = newSrc.replace('original', 'w154');
    } else if (width < 185) {
      newSrc = newSrc.replace('original', 'w185');
    } else if (width < 342) {
      newSrc = newSrc.replace('original', 'w342');
    } else if (width < 500) {
      newSrc = newSrc.replace('original', 'w500');
    } else if (width < 780) {
      newSrc = newSrc.replace('original', 'w780');
    }
    return newSrc;
  };

  return <Image {...props} loader={posterLoader} />;
}
