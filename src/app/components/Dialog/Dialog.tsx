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
            sizes: {
              sm: {
                width: "w-9/10 lg:w-1/4",
                minWidth: "min-w-[320px]",
                maxWidth: "lg:max-w-[460px]",
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
        className="backdrop-blur bg-background-secondary/75 dark:bg-gray-800/75 text-current border border-border-secondary/50"
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
