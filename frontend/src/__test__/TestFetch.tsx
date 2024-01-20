export default function TestFetch() {
	const onClick = async () => {
		const res = await fetch("/api");
		if (res.ok) {
			const obj = await res.json();
			console.log(obj);
		}
	};

	return (
		<div>
			<p>Hi Mom</p>
			<button onClick={onClick}>Clicky</button>
		</div>
	);
}
