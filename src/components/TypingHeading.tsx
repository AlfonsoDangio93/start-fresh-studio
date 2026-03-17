

import { useState, useEffect, useRef } from "react";

/* ─── Typing effect hook ─── */
export function useTypingEffect(text: string, speed = 45, startDelay = 300) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const idx = useRef(0);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      const interval = setInterval(() => {
        idx.current++;
        setDisplayed(text.slice(0, idx.current));
        if (idx.current >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(delayTimer);
  }, [text, speed, startDelay]);

  return { displayed, done };
}

/* ─── Reusable typing heading with placeholder spacing ─── */
export default function TypingHeading({
  lines,
  className = "font-display text-[32px] md:text-[46px] lg:text-[52px] font-bold text-dark leading-[1.08] tracking-tight",
  speed = 45,
  startDelay = 400





}: {lines: string[];className?: string;speed?: number;startDelay?: number;}) {
  const FULL = lines.join(" ");
  const { displayed, done } = useTypingEffect(FULL, speed, startDelay);

  // Calculate character break points for each line
  const breaks: number[] = [];
  let acc = 0;
  for (let i = 0; i < lines.length; i++) {
    acc += lines[i].length;
    breaks.push(acc);
    acc += 1; // space between lines
  }

  // Extract typed text for each line
  const getTypedForLine = (lineIdx: number): string => {
    const lineStart = lineIdx === 0 ? 0 : breaks[lineIdx - 1] + 1;
    const lineEnd = breaks[lineIdx];
    if (displayed.length <= lineStart) return "";
    return displayed.slice(lineStart, Math.min(displayed.length, lineEnd));
  };

  // Determine which line the cursor is on
  const getCursorLine = (): number => {
    let charCount = 0;
    for (let i = 0; i < lines.length; i++) {
      charCount += lines[i].length;
      if (displayed.length <= charCount) return i;
      charCount += 1; // space
    }
    return lines.length - 1;
  };

  const cursorLine = getCursorLine();

  const cursor =
  <span
    className={`inline-block w-[3px] h-[0.85em] bg-primary ml-1 align-baseline relative top-[0.05em] ${done ? "animate-blink" : ""}`} />;



  return (
    <h1 className={className}>
      {lines.map((line, i) =>
      <span key={i} className="block relative">
          <span className="invisible" aria-hidden="true">
            {line}
          </span>
          <span className="absolute inset-0 py-0 my-0">
            {getTypedForLine(i)}
            {cursorLine === i && cursor}
          </span>
        </span>
      )}
    </h1>);

}