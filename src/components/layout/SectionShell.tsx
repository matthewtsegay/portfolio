import React from "react";
import { cn } from "@/lib/utils";

interface SectionShellProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionShell({
  children,
  className,
  innerClassName,
}: SectionShellProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] md:rounded-[2.25rem] border border-border/80 bg-card/60 backdrop-blur-sm shadow-lg shadow-primary/5 overflow-hidden",
        className
      )}
    >
      <div className={cn("p-6 md:p-10 lg:p-12", innerClassName)}>{children}</div>
    </div>
  );
}
