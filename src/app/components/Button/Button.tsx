'use client';

import classNames from 'classnames';
import Loader from '../Loader';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  outline?: boolean;
  icon?: React.ReactNode;
};

export default function Button({
  onClick,
  className,
  loading,
  icon,
  children,
  outline = true,
  ...otherProps
}: Props) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'rounded-3xl p-2 pr-4 flex gap-2 items-center justify-center border-border-secondary/50',
        className,
        { border: outline }
      )}
      {...otherProps}
    >
      {loading ? <Loader strokeWidth={1} size={24} /> : icon}
      {children}
    </button>
  );
}
