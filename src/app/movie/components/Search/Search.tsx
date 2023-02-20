'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search as SearchIcon } from 'react-feather';
import { IconButton, Input } from '@/app/components';
import { useLazyQuery } from '@apollo/client';
import { SearchDocument } from '@/graphql/graphql';

export default function Search() {
  const [inputValue, setInputValue] = useState('');

  const [fetchResults, { data, loading }] = useLazyQuery(SearchDocument);

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetchResults({ variables: { input: inputValue } });
  };

  return (
    <>
      <form className="flex mb-4 gap-2" onSubmit={handleSearch}>
        <Input
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="Search..."
        />
        <IconButton
          type="submit"
          Icon={SearchIcon}
          disabled={loading}
          loading={loading}
        />
      </form>
      <div className="flex flex-col gap-2">
        {data?.search.map((movie: any) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            {movie.title}
            {movie.year !== null && <> ({movie.year})</>}
          </Link>
        ))}
      </div>
    </>
  );
}
