'use client';

import { useState } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import IconButton from '../../IconButton';
import Drawer from '../../Drawer';
import Fab from '../../../auth/Fab/Fab';
import SearchBar from '@/app/search/components/SearchBar';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <IconButton
        Icon={MenuIcon}
        onClick={() => setIsMenuOpen(true)}
        className="absolute z-10 top-4 left-4"
      />
      <Drawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        header={<Fab className="mb-2" />}
      >
        <SearchBar onSubmit={() => setIsMenuOpen(false)} />
      </Drawer>
    </>
  );
}
