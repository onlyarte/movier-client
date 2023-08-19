import { useCallback, useTransition } from 'react';
import { revalidate } from './actions';

export default function useRevalidatePath(defaultPath?: string) {
  const [isPending, startTransition] = useTransition();

  const handleRevalidate = useCallback(
    (path?: string) =>
      new Promise<void>((resolve, reject) => {
        const finalPath = path ?? defaultPath;
        if (!finalPath) return resolve();
        startTransition(() => {
          revalidate(finalPath).then(resolve).catch(reject);
        });
      }),
    [defaultPath, startTransition]
  );

  return [handleRevalidate, isPending] as const;
}
