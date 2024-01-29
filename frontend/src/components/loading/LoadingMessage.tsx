import { useEffect, useState } from "react";

const baseMessage = "Loading";
const messages = [
  baseMessage,
  baseMessage + ".",
  baseMessage + "..",
  baseMessage + "...",
];

export default function LoadingMessage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const limit = 300;
    const timer = setTimeout(
      () => setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1)),
      limit,
    );

    return () => clearTimeout(timer);
  }, [index]);

  return <h2 className="text-xl font-semibold">{messages[index]}</h2>;
}
