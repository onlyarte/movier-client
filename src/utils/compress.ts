import Compressor from 'compressorjs';

export const compressImage = (
  file: File,
  options?: Omit<Compressor.Options, 'success' | 'error'>
) =>
  new Promise<Blob | File>((resolve, reject) => {
    new Compressor(file, {
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.6,
      ...options,

      success(result) {
        resolve(result);
      },

      error(error) {
        reject(error);
      },
    });
  });
