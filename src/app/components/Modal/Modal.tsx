'use client';

import { useRef } from 'react';
import { X } from 'react-feather';
import { CSSTransition } from 'react-transition-group';
import IconButton from '../IconButton';

import './styles.css';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: Props) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div ref={nodeRef} className="fixed z-20 w-full lg:w-2/5 h-full backdrop-blur bg-background/25">
        <IconButton
          Icon={X}
          onClick={onClose}
          className="absolute z-10 top-4 right-4"
        />
        <div className="p-4">{children}</div>
      </div>
    </CSSTransition>
  );
}
