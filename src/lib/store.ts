"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_LADDER, DEFAULT_SETTINGS } from "./data";
import type { Approach, DayTask, ExposurePlan, LadderStep } from "./types";
import { generateId } from "./utils";

interface AppState {
  settings: typeof DEFAULT_SETTINGS;
  approaches: Approach[];
  ladder: LadderStep[];
  exposurePlan: ExposurePlan | null;
  dayTask: DayTask | null;

  addApproach: (outcome: Approach["outcome"]) => void;
  deleteApproach: (id: string) => void;

  setExposurePlan: (plan: ExposurePlan) => void;
  setDayTask: (task: Omit<DayTask, "done"> & { done?: boolean }) => void;
  toggleDayTaskDone: () => void;

  completeLadderStep: (id: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      settings: DEFAULT_SETTINGS,
      approaches: [],
      ladder: DEFAULT_LADDER,
      exposurePlan: null,
      dayTask: null,

      addApproach: (outcome) =>
        set((s) => ({
          approaches: [
            {
              id: generateId(),
              date: new Date().toISOString(),
              outcome,
              isWarmup: outcome === "warmup",
            },
            ...s.approaches,
          ],
        })),

      deleteApproach: (id) =>
        set((s) => ({
          approaches: s.approaches.filter((a) => a.id !== id),
        })),

      setExposurePlan: (plan) => set({ exposurePlan: plan }),

      setDayTask: (task) =>
        set({
          dayTask: {
            plannedDate: task.plannedDate,
            text: task.text,
            done: task.done ?? false,
          },
        }),

      toggleDayTaskDone: () =>
        set((s) =>
          s.dayTask
            ? { dayTask: { ...s.dayTask, done: !s.dayTask.done } }
            : s
        ),

      completeLadderStep: (id) =>
        set((s) => ({
          ladder: s.ladder.map((step) =>
            step.id === id
              ? { ...step, completedAt: new Date().toISOString() }
              : step
          ),
        })),
    }),
    { name: "field-kit-v5" }
  )
);
