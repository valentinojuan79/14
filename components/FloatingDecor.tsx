"use client";

import { useMemo } from "react";

const DEFAULT_EMOJIS = ["🔥", "💨", "🔥", "💨"];

interface Piece {
  id: number;
  emoji: string;
  left: number;
  size: number;
  duration: number;
  delay: number;
}

interface Props {
  emojis?: string[];
}

// Sengaja dibikin dikit doang, biar gak rame kayak template AI pada umumnya.
export default function FloatingDecor({ emojis = DEFAULT_EMOJIS }: Props) {
  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      emoji: emojis[i % emojis.length],
      left: 5 + Math.random() * 90,
      size: 16 + Math.random() * 16,
      duration: 9 + Math.random() * 8,
      delay: Math.random() * 8,
    }));
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {pieces.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-0 animate-rise select-none opacity-0 grayscale-0"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}px`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
}
