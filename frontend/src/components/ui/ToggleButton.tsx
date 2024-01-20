const commonStyles = "";

type Props = {
  children: React.ReactNode;
  onClick: (..._args: unknown[]) => unknown;
  type?: "submit" | "reset" | "button";
};

export default function ToggleButton({ children, onClick, type }: Props) {
  return (
    <button className={commonStyles} type={type ?? "button"} onClick={onClick}>
      {children}
    </button>
  );
}
