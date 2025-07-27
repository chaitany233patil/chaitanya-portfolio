export const Card = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={
        "rounded-xl shadow-md bg-white transition-all border border-neutral-600/15 " +
        className
      }
    >
      {children}
    </div>
  );
};
