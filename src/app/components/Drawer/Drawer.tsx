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
  header?: string | React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
};

export default function Drawer({
  header,
  isOpen,
  onClose,
  children,
  position = 'left',
  className,
}: Props) {
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={isOpen}
      nodeRef={nodeRef}
      timeout={300}
      classNames="modal"
      unmountOnExit
    >
      <div
        ref={nodeRef}
        className={`absolute top-0 bottom-0 ${position}-0 z-20 w-full lg:w-2/5 h-full backdrop-blur bg-background/25 ${className}`}
      >
        <div className="px-5 py-8 lg:p-8">
          <div className="flex items-center justify-between pb-3">
            {typeof header === 'string' ? (
              <h1 className="text-2xl lg:text-3xl mt-2 mb-3">{header}</h1>
            ) : (
              header
            )}
            <IconButton Icon={X} onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    </CSSTransition>
  );
}
