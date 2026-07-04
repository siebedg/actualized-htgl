export type ApproachOutcome = "warmup" | "approached" | "number" | "chickened";

export interface Approach {
  id: string;
  date: string;
  outcome: ApproachOutcome;
  isWarmup: boolean;
}

export interface LadderStep {
  id: string;
  level: number;
  title: string;
  who: string;
  description: string;
  completedAt?: string;
}

export interface ExposurePlan {
  plannedDate: string;
  place: string;
}

export interface DayTask {
  plannedDate: string;
  text: string;
  done: boolean;
}

export interface AppSettings {
  name: string;
  weeklyApproachGoal: number;
  seasonPeakMonths: number[];
}

// kept for store compat — unused in UI
export interface ArsenalItem {
  id: string;
  category: "opener";
  text: string;
  language: "en";
  favorite: boolean;
}
