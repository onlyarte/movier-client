import EaseInOut from '@/app/components/EaseInOut';

type Props = {
  length?: number;
  className?: string;
};

export default function LoadingSkeleton({ length = 9, className }: Props) {
  return (
    <>
      {new Array(length).fill(undefined).map((_, index) => (
        <EaseInOut key={index}>
          <div key={index} className={className}>
            <div className="relative h-[250px] w-full mb-2">
              <div className="w-full h-full bg-gray-400 dark:bg-gray-800" />
            </div>
            <div className="w-20 h-7 mb-3 m-auto bg-gray-400 dark:bg-gray-800 rounded-md" />
          </div>
        </EaseInOut>
      ))}
    </>
  );
}
