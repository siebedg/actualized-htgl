"use client";

import { useState } from "react";
import Link from "next/link";
import { ThreeSecondTimer } from "@/components/ThreeSecondTimer";
import { Button } from "@/components/ui";
import { APPROACH_INTENT } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import type { ApproachOutcome } from "@/lib/types";
import { pickRandom } from "@/lib/utils";

export default function FieldPage() {
  const { addApproach } = useAppStore();
  const [logged, setLogged] = useState<string | null>(null);
  const [intent] = useState(() => pickRandom(APPROACH_INTENT));

  const log = (outcome: ApproachOutcome) => {
    addApproach(outcome);
    setLogged(outcome);
    setTimeout(() => setLogged(null), 1500);
  };

  return (
    <div className="space-y-8">
      <ThreeSecondTimer />

      <div className="rounded-2xl border border-[#1f1f23] bg-[#111113] p-5">
        <p className="text-xs text-indigo-400">Intent — not a script</p>
        <p className="mt-3 text-[17px] font-medium leading-relaxed text-zinc-100">
          {intent}
        </p>
      </div>

      <p className="text-center text-sm text-zinc-600">
        Your words. Your vibe. Log when done.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {(
          [
            ["warmup", "Warm-up"],
            ["approached", "Did it"],
            ["number", "Number"],
            ["chickened", "Chickened"],
          ] as const
        ).map(([outcome, label]) => (
          <button
            key={outcome}
            type="button"
            onClick={() => log(outcome)}
            className={`rounded-2xl border py-5 text-base font-medium transition-all active:scale-[0.97] ${
              logged === outcome
                ? "border-indigo-500 bg-indigo-500/20 text-white"
                : "border-[#2a2a2e] bg-[#111113] text-zinc-200"
            }`}
          >
            {logged === outcome ? "Saved ✓" : label}
          </button>
        ))}
      </div>

      <Link href="/push">
        <Button variant="secondary" className="w-full">
          Need a push →
        </Button>
      </Link>
    </div>
  );
}
