"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui";
import { PUSH_CLOSER, PUSH_LINES } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import { getWeekApproaches, pickRandom } from "@/lib/utils";

export default function PushPage() {
  const { approaches, dayTask, exposurePlan } = useAppStore();
  const week = useMemo(() => getWeekApproaches(approaches), [approaches]);
  const [hero] = useState(() => pickRandom(PUSH_LINES));

  return (
    <div className="space-y-6 pb-4">
      <p className="text-2xl font-semibold">Push</p>

      <div className="rounded-2xl border border-indigo-500/40 bg-indigo-500/10 p-5">
        <p className="text-xl font-semibold leading-snug text-white">
          {hero.headline}
        </p>
        <p className="mt-3 text-[15px] leading-relaxed text-zinc-400">
          {hero.body}
        </p>
      </div>

      {(dayTask?.text || exposurePlan) && (
        <div className="rounded-2xl border border-[#1f1f23] bg-[#111113] p-4">
          <p className="text-xs text-zinc-500">Your plan</p>
          {dayTask?.text && (
            <p className="mt-2 text-sm text-zinc-300">{dayTask.text}</p>
          )}
          {exposurePlan && (
            <p className="mt-1 text-sm text-indigo-400/80">
              {exposurePlan.place}
            </p>
          )}
        </div>
      )}

      <p className="text-xs text-zinc-600">
        {week.length} approaches this week.{" "}
        {week.length === 0 ? "Zero. Fix that." : "Keep going."}
      </p>

      <div className="space-y-4">
        {PUSH_LINES.filter((l) => l.headline !== hero.headline).map((line) => (
          <div key={line.headline}>
            <p className="font-medium text-zinc-200">{line.headline}</p>
            <p className="mt-1 text-sm leading-relaxed text-zinc-500">
              {line.body}
            </p>
          </div>
        ))}
      </div>

      <p className="border-t border-[#1f1f23] pt-6 text-center text-sm font-medium text-indigo-400">
        {PUSH_CLOSER}
      </p>

      <Link href="/field">
        <Button size="lg" className="w-full py-5 text-lg">
          GO →
        </Button>
      </Link>
    </div>
  );
}
