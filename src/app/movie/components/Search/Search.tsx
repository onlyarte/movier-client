'use client';

import { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { Menu as MenuIcon, Search as SearchIcon } from 'react-feather';
import { IconButton, Input } from '@/app/components';
import { withApolloProvider } from '@/utils/apollo';

import { FIND_MOVIES } from './queries';

function Search() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [fetchResults, { data, loading, error }] = useLazyQuery(FIND_MOVIES);

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
        {data?.search.map((movie) => (
          <Link href={`/movie/${movie.id}`} key={movie.id}>
            {movie.title} ({movie.year})
          </Link>
        ))}
      </div>
    </>
  );
}

export default withApolloProvider(Search);
