'use client';

import { useState } from 'react';
import { Menu as MenuIcon } from 'react-feather';
import Search from '@/app/movie/components/Search';
import IconButton from '../../IconButton';
import Modal from '../../Modal';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <IconButton
        Icon={MenuIcon}
        onClick={() => setIsMenuOpen(true)}
        className="absolute z-10 top-4 left-4"
      />
      <Modal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
        <Search />
      </Modal>
    </>
  );
}
