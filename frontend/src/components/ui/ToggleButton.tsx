type Props = {
  children: React.ReactNode;
  onClick: (..._args: never) => unknown;
  type?: "submit" | "reset" | "button";
  className?: string;
};

export default function ToggleButton({
  children,
  onClick,
  type,
  className,
}: Props) {
  return (
    <button
      className={
        "relative p-2 w-fit rounded-md flex flex-row gap-2 items-center hover:bg-slate-300 dark:hover:bg-neutral-700 " +
        className
      }
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
