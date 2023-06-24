import { useCallback, useTransition } from 'react';
import { revalidate } from './actions';

export default function useRevalidatePath(defaultPath?: string) {
  const [isPending, startTransition] = useTransition();

  const handleRevalidate = useCallback(
    (path?: string) => {
      const finalPath = path ?? defaultPath;
      if (!finalPath) return;
      startTransition(() => {
        revalidate(finalPath);
      });
    },
    [defaultPath, startTransition]
  );

  return [handleRevalidate, isPending] as const;
}
