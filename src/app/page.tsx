"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Button, Input, Textarea } from "@/components/ui";
import { PLACE_CHIPS } from "@/lib/data";
import { useAppStore } from "@/lib/store";
import {
  formatPlanDate,
  getWeekApproaches,
  tomorrowKey,
  todayKey,
} from "@/lib/utils";

export default function HomePage() {
  const {
    settings,
    approaches,
    exposurePlan,
    dayTask,
    setExposurePlan,
    setDayTask,
    toggleDayTaskDone,
  } = useAppStore();

  const week = useMemo(() => getWeekApproaches(approaches), [approaches]);

  const [date, setDate] = useState(
    dayTask?.plannedDate ?? exposurePlan?.plannedDate ?? tomorrowKey()
  );
  const [place, setPlace] = useState(exposurePlan?.place ?? "");
  const [task, setTask] = useState(dayTask?.text ?? "");

  const savePlace = (p: string) => {
    if (!p.trim()) return;
    setExposurePlan({ plannedDate: date, place: p.trim() });
  };

  const saveTask = (t: string) => {
    setDayTask({ plannedDate: date, text: t });
  };

  const pickDate = (d: string) => {
    setDate(d);
    if (place.trim()) setExposurePlan({ plannedDate: d, place: place.trim() });
    if (task.trim()) setDayTask({ plannedDate: d, text: task });
  };

  const taskMatchesDate = dayTask?.plannedDate === date;

  return (
    <div className="flex min-h-[70vh] flex-col">
      <p className="text-3xl font-semibold tracking-tight">{settings.name}</p>
      <p className="mt-1 text-zinc-500">Go out. Talk. Log.</p>

      <div className="mt-8 flex gap-2">
        <button
          type="button"
          onClick={() => pickDate(todayKey())}
          className={`flex-1 rounded-xl py-3 text-sm font-medium ${
            date === todayKey()
              ? "bg-white text-zinc-950"
              : "bg-[#111113] text-zinc-400 border border-[#1f1f23]"
          }`}
        >
          Today
        </button>
        <button
          type="button"
          onClick={() => pickDate(tomorrowKey())}
          className={`flex-1 rounded-xl py-3 text-sm font-medium ${
            date === tomorrowKey()
              ? "bg-white text-zinc-950"
              : "bg-[#111113] text-zinc-400 border border-[#1f1f23]"
          }`}
        >
          Tomorrow
        </button>
      </div>

      <div className="mt-4 space-y-3">
        <Input
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          onBlur={() => savePlace(place)}
          placeholder="Where? Brugge, beach..."
        />
        <div className="flex flex-wrap gap-2">
          {PLACE_CHIPS.map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => {
                setPlace(p);
                savePlace(p);
              }}
              className="rounded-xl border border-[#1f1f23] bg-[#111113] px-3 py-2 text-sm text-zinc-400"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/5 p-4">
        <p className="text-xs text-indigo-400">
          Task · {formatPlanDate(date)}
        </p>
        <Textarea
          className="mt-2 !border-transparent !bg-transparent !px-0 !py-0 text-[15px] leading-relaxed text-white placeholder:text-zinc-600 focus:!border-transparent"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onBlur={() => saveTask(task)}
          placeholder="Spreek 3 mensen aan die ik niet ken. Mag iedereen zijn. Super lowkey."
          rows={3}
        />
        {taskMatchesDate && dayTask?.text && (
          <button
            type="button"
            onClick={toggleDayTaskDone}
            className={`mt-3 text-sm font-medium ${
              dayTask.done ? "text-emerald-400" : "text-indigo-400"
            }`}
          >
            {dayTask.done ? "Done ✓" : "Mark done ✓"}
          </button>
        )}
      </div>

      {exposurePlan && (
        <p className="mt-4 text-sm text-zinc-600">
          {formatPlanDate(exposurePlan.plannedDate)} · {exposurePlan.place}
        </p>
      )}

      <p className="mt-8 text-center text-zinc-600">
        {week.length}/{settings.weeklyApproachGoal} this week
      </p>

      <div className="mt-auto pt-8">
        <Link href="/field">
          <Button size="lg" className="w-full py-5 text-xl">
            GO →
          </Button>
        </Link>
      </div>
    </div>
  );
}
