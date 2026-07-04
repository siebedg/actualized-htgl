"use client";

import { useEffect, useState } from "react";

type Phase = "idle" | "countdown" | "go";

export function ThreeSecondTimer() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (phase !== "countdown") return;
    if (count === 0) {
      setPhase("go");
      return;
    }
    const t = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, count]);

  if (phase === "go") {
    return (
      <button
        type="button"
        onClick={() => setPhase("idle")}
        className="w-full rounded-2xl bg-white py-8 text-4xl font-bold text-zinc-950"
      >
        WALK
      </button>
    );
  }

  if (phase === "countdown") {
    return (
      <div className="flex h-28 items-center justify-center rounded-2xl bg-[#111113] border border-[#1f1f23]">
        <span className="text-6xl font-bold tabular-nums">{count}</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        setCount(3);
        setPhase("countdown");
      }}
      className="w-full rounded-2xl border border-[#2a2a2e] bg-[#111113] py-5 text-lg font-medium"
    >
      3… 2… 1… GO
    </button>
  );
}
