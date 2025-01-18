import * as motion from 'motion/react-client';

type Props = {
  children: React.ReactNode;
};

export default function EaseInOut({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        ease: 'easeInOut',
        duration: 1,
      }}
    >
      {children}
    </motion.div>
  );
}
