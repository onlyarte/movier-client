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
                backgroundColor: 'bg-background/75',
                backdropBlur: 'backdrop-blur-none',
              },
            },
            sizes: {
              sm: {
                width: "w-9/10 lg:w-1/4",
                minWidth: "min-w-[360px]",
                maxWidth: "lg:max-w-[460px]",
              },
              md: {
                width: "w-9/10 lg:w-2/4",
                minWidth: "min-w-[360px]",
                maxWidth: "lg:max-w-[620px]",
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
        className="bg-background-secondary dark:bg-gray-800 text-current rounded-3xl shadow-2xl"
      >
        <DialogHeader className="text-xl lg:text-xl text-current font-normal p-5">
          {header}
        </DialogHeader>
        <DialogBody className="text-current px-5 py-0">{children}</DialogBody>
        <DialogFooter className="text-current px-5">{footer}</DialogFooter>
      </DialogBase>
    </ThemeProvider>
  );
}
