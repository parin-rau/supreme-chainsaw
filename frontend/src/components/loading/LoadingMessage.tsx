import { useEffect, useState } from "react";

export default function LoadingMessage() {
  const [index, setIndex] = useState(0);
  const baseMessage = "Loading";
  const messages = [
    baseMessage,
    baseMessage + ".",
    baseMessage + "..",
    baseMessage + "...",
  ];

  useEffect(() => {
    const timer = () => {
      const limit = 300;
      setTimeout(
        () => setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1)),
        limit,
      );
    };
    timer();
  }, [index, messages.length]);

  return <h2>{messages[index]}</h2>;
}
