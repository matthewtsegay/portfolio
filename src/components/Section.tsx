import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("w-full px-6 sm:px-10 md:px-[100px] py-16 md:py-28", className)}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
