import { useEffect, useRef, useState } from 'react';
import { z } from 'zod';

const Item = z.object({
  tmdbId: z.number(),
  title: z.string(),
  poster: z.string().nullable(),
  year: z.number(),
});

export type SearchQuery = { search: z.infer<typeof Item>[] };

type Variables = { input: string };

export const useSearchQuery = ({
  variables,
  skip,
}: {
  variables: Variables;
  skip?: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchQuery['search']>();

  const currentVariables = useRef<Variables>(variables);
  if (variables.input !== currentVariables.current?.input && !loading) {
    setLoading(true);
  }
  if (skip && (loading || results)) {
    setLoading(false);
    setResults(undefined);
  }

  useEffect(() => {
    if (skip) return;

    (async () => {
      try {
        setLoading(true);
        setResults(undefined);
        currentVariables.current = variables;

        const output = await fetch(
          `/api/search?input=${encodeURIComponent(variables.input)}`
        );

        const reader = output.body!.getReader();
        const decoder = new TextDecoder();

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          if (!value) continue;

          const decodedValue = decoder.decode(value, { stream: true });
          if (!decodedValue) continue;

          const lines = decodedValue.split('\n');
          for (const line of lines) {
            if (!line) continue;
            try {
              const parsedValue = Item.parse(JSON.parse(line));
              setResults((results) => [...(results ?? []), parsedValue]);
            } catch (error) {
              console.error(error);
            }
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    })();
  }, [variables.input, skip]);

  return { data: results && { search: results }, loading };
};
