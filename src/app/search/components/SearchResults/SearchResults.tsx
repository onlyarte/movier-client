'use client';

import Link from 'next/link';
import { Poster } from '@/app/components';
import LoadingSkeleton from './LoadingSkeleton';
import EaseInOut from '@/app/components/EaseInOut';
import { COVER } from '@/app/components/Image/assets';
import { useEffect, useState } from 'react';
import { z } from 'zod';
import Grid from './Grid';

const Item = z.object({
  id: z.number(),
  title: z.string(),
  poster: z.string(),
  year: z.number(),
});

type Items = z.infer<typeof Item>[];

type Props = {
  query: string | undefined;
  mock?: Items;
};

export default function SearchResults({ query, mock }: Props) {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<Items>();

  useEffect(() => {
    (async () => {
      if (!query || !!mock) return;
      setLoading(true);
      setResults(undefined);

      const output = await fetch(
        `/api/search?input=${encodeURIComponent(query)}`
      );

      const reader = output.body!.getReader();
      const decoder = new TextDecoder();

      let current: Awaited<ReturnType<(typeof reader)['read']>>;
      do {
        current = await reader.read();
        if (!current.value) continue;

        const decodedValue = decoder.decode(current.value, {
          stream: true,
        });
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
      } while (!current.done);

      setLoading(false);
    })();
  }, [query, !!mock]);

  if (!mock) {
    if (loading && !results?.length) {
      return (
        <Grid className="animate-pulse">
          <LoadingSkeleton />
        </Grid>
      );
    }

    if (!query) {
      return null;
    }

    if (!results?.length) {
      return (
        <p className="mt-10 text-8xl lg:text-9xl text-current opacity-20 lg:text-center">
          No results found :(
        </p>
      );
    }
  }

  return (
    <>
      <div
        className="grid gap-3 w-full"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
        }}
      >
        {(mock ?? results ?? []).map((movie) => (
          <EaseInOut key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div className="relative h-[250px] w-full mb-2">
                <Poster
                  src={movie.poster ?? COVER}
                  alt="Poster"
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 20vw"
                  className="object-cover"
                />
              </div>
              <h2 className="text-lg text-center mb-3">
                {movie.title} ({movie.year})
              </h2>
            </Link>
          </EaseInOut>
        ))}
        {loading && <LoadingSkeleton length={3} className="opacity-30" />}
      </div>
    </>
  );
}
