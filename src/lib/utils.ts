export function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function tomorrowKey(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function formatPlanDate(date: string): string {
  const d = date.slice(0, 10);
  if (d === todayKey()) return "Today";
  if (d === tomorrowKey()) return "Tomorrow";
  return new Date(d).toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function getWeekApproaches(
  approaches: { date: string; isWarmup: boolean }[]
) {
  const now = new Date();
  const day = now.getDay();
  const diff = day === 0 ? 6 : day - 1;
  const start = new Date(now);
  start.setDate(now.getDate() - diff);
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  return approaches.filter((a) => {
    const d = new Date(a.date);
    return d >= start && d < end && !a.isWarmup;
  });
}

export function outcomeLabel(outcome: string): string {
  const labels: Record<string, string> = {
    warmup: "Warm-up",
    approached: "Approached",
    number: "Number",
    chickened: "Chickened",
  };
  return labels[outcome] ?? outcome;
}

export function pickRandom<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}
