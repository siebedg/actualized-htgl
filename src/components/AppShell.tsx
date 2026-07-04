"use client";

import { BottomNav } from "@/components/BottomNav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <main className="mx-auto max-w-lg px-5 pb-24 pt-10">{children}</main>
      <BottomNav />
    </div>
  );
}
