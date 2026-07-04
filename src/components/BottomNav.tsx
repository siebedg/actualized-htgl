"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Crosshair, Flame, Home, List } from "lucide-react";

const NAV = [
  { href: "/", label: "Go", icon: Home },
  { href: "/field", label: "Field", icon: Crosshair },
  { href: "/push", label: "Push", icon: Flame },
  { href: "/log", label: "Log", icon: List },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#1f1f23] bg-[#09090b] pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto flex max-w-lg">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-[10px] font-medium ${
                active ? "text-white" : "text-zinc-600"
              }`}
            >
              <Icon className="h-5 w-5" strokeWidth={active ? 2.5 : 1.75} />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
