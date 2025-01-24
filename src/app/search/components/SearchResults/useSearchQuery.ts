import { useEffect, useState } from 'react';
import { z } from 'zod';

const Item = z.object({
  id: z.number(),
  title: z.string(),
  poster: z.string().nullable(),
  year: z.number(),
});

const List = z.array(Item);

export type SearchQuery = { search: z.infer<typeof Item>[] };

export const useSearchQuery = ({
  variables,
  skip,
}: {
  variables: { input: string };
  skip?: boolean;
}) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<SearchQuery['search']>();

  useEffect(() => {
    if (skip) return;

    (async () => {
      try {
        setLoading(true);
        setResults(undefined);

        const output = await fetch(
          `/api/search?input=${encodeURIComponent(variables.input)}`
        );

        console.log(output.headers.get('Transfer-Encoding'));
        if (output.headers.get('Transfer-Encoding') !== 'chunked') {
          const parsedList = List.parse(await output.json());
          setResults(parsedList);
          return;
        }

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
