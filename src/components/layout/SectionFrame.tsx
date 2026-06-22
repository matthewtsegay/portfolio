import React from "react";
import { cn } from "@/lib/utils";

interface SectionFrameProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function SectionFrame({
  children,
  className,
  innerClassName,
}: SectionFrameProps) {
  return (
    <div
      className={cn(
        "rounded-[1.75rem] md:rounded-[2.25rem] border border-border/80 bg-card/50 backdrop-blur-sm shadow-sm overflow-hidden",
        className
      )}
    >
      <div className={cn("p-6 md:p-10 lg:p-12", innerClassName)}>{children}</div>
    </div>
  );
}
