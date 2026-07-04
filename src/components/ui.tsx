import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  padding?: "sm" | "md" | "lg";
}

export function Card({
  children,
  className = "",
  onClick,
  padding = "md",
}: CardProps) {
  const pad = { sm: "p-3", md: "p-4", lg: "p-5" };
  return (
    <div
      onClick={onClick}
      className={`rounded-xl border border-[#1f1f23] bg-[#111113] ${pad[padding]} ${
        onClick
          ? "cursor-pointer transition-colors hover:border-[#2a2a2e] active:scale-[0.99]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <header className="mb-6">
      <h1 className="text-[1.75rem] font-semibold tracking-tight text-white">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-[15px] leading-relaxed text-zinc-500">
          {subtitle}
        </p>
      )}
    </header>
  );
}

export function SectionTitle({
  children,
  sub,
}: {
  children: ReactNode;
  sub?: string;
}) {
  return (
    <div className="mb-3">
      <h2 className="text-[13px] font-medium text-zinc-400">{children}</h2>
      {sub && <p className="mt-0.5 text-xs text-zinc-600">{sub}</p>}
    </div>
  );
}

export function ProgressBar({
  value,
  max,
  className = "",
  accent = false,
}: {
  value: number;
  max: number;
  className?: string;
  accent?: boolean;
}) {
  const pct = max > 0 ? Math.min(100, (value / max) * 100) : 0;
  return (
    <div
      className={`h-1 w-full overflow-hidden rounded-full bg-[#1f1f23] ${className}`}
    >
      <div
        className={`h-full rounded-full transition-all duration-500 ${accent ? "bg-indigo-400" : "bg-white"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: ReactNode;
  variant?: "default" | "success" | "muted";
  className?: string;
}) {
  const colors = {
    default: "bg-[#1f1f23] text-zinc-300",
    success: "bg-emerald-500/10 text-emerald-400",
    muted: "bg-transparent text-zinc-500",
  };
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${colors[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function Button({
  children,
  onClick,
  variant = "primary",
  className = "",
  disabled,
  type = "button",
  size = "md",
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  size?: "sm" | "md" | "lg";
}) {
  const variants = {
    primary: "bg-white text-zinc-950 hover:bg-zinc-200 font-medium",
    secondary:
      "bg-[#1a1a1d] text-zinc-100 hover:bg-[#222226] border border-[#2a2a2e]",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-[#1a1a1d]",
  };
  const sizes = {
    sm: "px-3 py-2 text-[13px] rounded-lg",
    md: "px-4 py-2.5 text-sm rounded-xl",
    lg: "px-5 py-3.5 text-[15px] rounded-xl",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`transition-all active:scale-[0.98] disabled:opacity-40 disabled:pointer-events-none ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  );
}

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-xl border border-[#2a2a2e] bg-[#0c0c0e] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-500 transition-colors ${className}`}
      {...props}
    />
  );
}

export function Textarea({
  className = "",
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={`w-full rounded-xl border border-[#2a2a2e] bg-[#0c0c0e] px-3.5 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none focus:border-zinc-500 transition-colors resize-none ${className}`}
      {...props}
    />
  );
}

export function Select({
  className = "",
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={`w-full rounded-xl border border-[#2a2a2e] bg-[#0c0c0e] px-3.5 py-2.5 text-sm text-white outline-none focus:border-indigo-500/50 transition-colors ${className}`}
      {...props}
    >
      {children}
    </select>
  );
}

/** Card with left accent stripe for high-priority content */
export function AccentCard({
  children,
  className = "",
  color = "indigo",
}: {
  children: ReactNode;
  className?: string;
  color?: "indigo" | "sky" | "violet";
}) {
  const stripe = {
    indigo: "border-l-indigo-500",
    sky: "border-l-sky-500",
    violet: "border-l-violet-500",
  };
  return (
    <div
      className={`rounded-xl border border-[#1f1f23] border-l-[3px] bg-[#111113] p-4 ${stripe[color]} ${className}`}
    >
      {children}
    </div>
  );
}
