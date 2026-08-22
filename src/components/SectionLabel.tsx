import React from "react";
import { cn } from "@/lib/utils";

export function SectionLabel({
  children,
  className,
  dark,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs md:text-sm uppercase tracking-[0.25em]",
        dark ? "text-zinc-400" : "text-muted",
        className
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-accent" aria-hidden />
      {children}
    </p>
  );
}
