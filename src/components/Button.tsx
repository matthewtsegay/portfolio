"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary";

interface ButtonBaseProps {
  variant?: Variant;
  asAnchor?: boolean;
  href?: string;
  children: React.ReactNode;
}

type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

const variantStyles: Record<Variant, string> = {
  primary: "bg-foreground text-background hover:bg-foreground/80",
  secondary:
    "bg-background text-foreground border border-border hover:bg-surface",
};

export default function Button({
  variant = "secondary",
  asAnchor = false,
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-3.5 text-[15px] font-bold transition-colors duration-300 select-none";

  const classes = cn(base, variantStyles[variant], className);

  if (asAnchor && href) {
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={classes}
          {...(props as Omit<React.ComponentProps<typeof Link>, "href">)}
        >
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
