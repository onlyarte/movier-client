'use client';

import {
  Dialog as DialogBase,
  DialogBody,
  DialogFooter,
  DialogHeader,
  ThemeProvider,
  useTheme,
} from '@material-tailwind/react';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
  size?: Parameters<typeof DialogBase>['0']['size'];
};

export default function Dialog({
  isOpen,
  onToggle,
  header,
  footer,
  children,
  size = 'md',
}: Props) {
  const theme = useTheme();

  return (
    <ThemeProvider
      value={{
        ...theme,
        dialog: {
          styles: {
            base: {
              backdrop: {
                backgroundColor: 'bg-background/25',
                backdropBlur: 'backdrop-blur',
              },
            },
          },
        },
      }}
    >
      <DialogBase
        open={isOpen}
        handler={onToggle}
        size={size}
        className="backdrop-blur bg-gray-900/75 text-current border border-gray-200/40"
      >
        <DialogHeader className="text-xl lg:text-2xl text-current">
          {header}
        </DialogHeader>
        <DialogBody className="text-current">{children}</DialogBody>
        <DialogFooter className="text-current">{footer}</DialogFooter>
      </DialogBase>
    </ThemeProvider>
  );
}
