// app/components/TypingText.tsx
"use client";

import { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number; // ms
  className?: string; 
}

export default function TypingText({text, speed = 100, className }: TypingTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0,i));
      if (i >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className} style={{ whiteSpace: "pre" }}>
      {displayed}
      <span className="caret" />
    </span>
  );
}
