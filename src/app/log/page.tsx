"use client";

import { useMemo } from "react";
import { Trash2 } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { getWeekApproaches, outcomeLabel } from "@/lib/utils";
import { format, parseISO } from "date-fns";

export default function LogPage() {
  const { approaches, settings, deleteApproach } = useAppStore();
  const week = useMemo(() => getWeekApproaches(approaches), [approaches]);
  const sorted = useMemo(
    () => [...approaches].sort((a, b) => b.date.localeCompare(a.date)),
    [approaches]
  );

  return (
    <div>
      <p className="text-2xl font-semibold">Log</p>
      <p className="mt-1 text-zinc-500">
        {week.length}/{settings.weeklyApproachGoal} this week
      </p>

      {sorted.length === 0 ? (
        <p className="mt-16 text-center text-zinc-600">Nothing yet. Go out.</p>
      ) : (
        <ul className="mt-6 space-y-2">
          {sorted.map((a) => (
            <li
              key={a.id}
              className="flex items-center justify-between gap-3 rounded-xl bg-[#111113] px-4 py-3"
            >
              <div className="min-w-0">
                <span className="font-medium">{outcomeLabel(a.outcome)}</span>
                <span className="ml-2 text-xs text-zinc-600">
                  {format(parseISO(a.date), "EEE HH:mm")}
                </span>
              </div>
              <button
                type="button"
                onClick={() => deleteApproach(a.id)}
                className="shrink-0 p-2 text-zinc-700 hover:text-rose-400 transition-colors"
                aria-label="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
