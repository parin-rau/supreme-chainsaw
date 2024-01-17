type Props = {
	text: string;
	onClick: (..._args: unknown[]) => unknown;
	type?: "submit" | "button" | "reset";
};

export default function FancyButton({ text, onClick, type }: Props) {
	return (
		<button className="" onClick={onClick} type={type ?? "button"}>
			{text}
		</button>
	);
}
