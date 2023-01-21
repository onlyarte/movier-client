'use client';

import { withApolloProvider } from '@/utils/apollo';
import { useLazyQuery } from '@apollo/client';
import Link from 'next/link';
import { useState } from 'react';
import { Loader, Menu as MenuIcon, Search } from 'react-feather';
import IconButton from '../../IconButton';
import Input from '../../Input';
import Modal from '../../Modal';
import { FIND_MOVIES } from './queries';

function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [inputValue, setInputValue] = useState('');

  const [fetchResults, { data, loading, error }] = useLazyQuery(FIND_MOVIES);

  const handleSearch: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    fetchResults({ variables: { input: inputValue } });
  };

  return (
    <>
      <IconButton
        Icon={MenuIcon}
        onClick={() => setIsMenuOpen(true)}
        className="absolute z-10 top-4 left-4"
      />
      <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <form className="flex mb-4 gap-2" onSubmit={handleSearch}>
          <Input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder="Search..."
          />
          <IconButton
            type="submit"
            Icon={loading ? Loader : Search}
            disabled={loading}
          />
        </form>
        <div className="flex flex-col gap-2">
          {data?.search.map((movie) => (
            <Link href={`/movie/${movie.id}`} key={movie.id}>
              {movie.title} ({movie.year})
            </Link>
          ))}
        </div>
      </Modal>
    </>
  );
}

export default withApolloProvider(Menu);
