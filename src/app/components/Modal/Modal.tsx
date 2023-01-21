'use client';

import { X } from 'react-feather';
import IconButton from '../IconButton';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed z-20 w-full h-full flex flex-col lg:flex-row">
      <div className="relative bg-background/50 h-screen lg:basis-2/5 backdrop-blur shadow-2xl">
        <IconButton
          Icon={X}
          onClick={onClose}
          className="absolute z-10 top-4 right-4"
        />

        <div className="p-4 pt-[72px]">{children}</div>
      </div>
      <div className="lg:basis-3/5 bg-background/25" onClick={onClose}></div>
    </div>
  );
}
