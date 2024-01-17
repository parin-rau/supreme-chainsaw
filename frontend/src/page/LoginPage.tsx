type Props = {
	register?: boolean;
};

export default function LoginPage({ register }: Props) {
	const text = register ? "register" : "login";

	return <div>{text}</div>;
}
