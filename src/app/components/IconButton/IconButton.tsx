import { Icon } from 'react-feather';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  Icon: Icon;
};

export default function IconButton({
  Icon,
  onClick,
  className,
  ...otherProps
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-3xl bg-background p-2 ${className}`}
      {...otherProps}
    >
      <Icon strokeWidth={1} size={32} />
    </button>
  );
}
