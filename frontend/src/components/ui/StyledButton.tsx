type Props = {
  text: string;
  onClick: (..._args: unknown[]) => unknown;
  type?: "submit" | "button" | "reset";
};

export default function StyledButton({ text, onClick, type }: Props) {
  return (
    <button
      className="transition duration-200 mt-2 text-md text-white font-bold bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-800 py-2 px-4 rounded-md max-w-min"
      onClick={onClick}
      type={type ?? "button"}
    >
      {text}
    </button>
  );
}
