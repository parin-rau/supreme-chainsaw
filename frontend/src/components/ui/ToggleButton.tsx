type Props = {
  children: React.ReactNode;
  onClick: (..._args: unknown[]) => unknown;
  type?: "submit" | "reset" | "button";
};

export default function ToggleButton({ children, onClick, type }: Props) {
  return (
    <button
      className="relative p-2 w-fit rounded-md flex flex-row gap-2 items-center hover:bg-slate-300 dark:hover:bg-neutral-700"
      type={type ?? "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
