import { useState, useEffect, useRef } from "react";

interface UseTypewriterProps {
  text: string;
  speed?: number;
  enabled?: boolean;
}

export function useTypewriter({ text, speed = 20, enabled = true }: UseTypewriterProps) {
  const [displayedText, setDisplayedText] = useState(enabled ? "" : text);
  const [isComplete, setIsComplete] = useState(!enabled);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      setDisplayedText(text);
      setIsComplete(true);
      return;
    }

    setDisplayedText("");
    setIsComplete(false);
    indexRef.current = 0;

    const words = text.split(" ");
    
    const interval = setInterval(() => {
      if (indexRef.current < words.length) {
        setDisplayedText((prev) => {
          const newText = prev + (prev ? " " : "") + words[indexRef.current];
          indexRef.current++;
          return newText;
        });
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, enabled]);

  return { displayedText, isComplete };
}
