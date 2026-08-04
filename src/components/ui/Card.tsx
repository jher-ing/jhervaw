import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Card atómica reutilizable — 03-Design-System/Cards.md.
 * Padding y radius desde tokens, sombra sutil en reposo, elevación en hover
 * solo si `interactive` (affordance de clic real).
 */
export function Card({
  className,
  children,
  interactive = false,
  as: Comp = "div",
}: {
  className?: string;
  children: React.ReactNode;
  interactive?: boolean;
  as?: React.ElementType;
}) {
  return (
    <Comp
      className={cn(
        "rounded-xl border border-border bg-surface p-6 shadow-sm sm:p-8",
        interactive &&
          "cursor-pointer transition-[box-shadow,transform,border-color] duration-[var(--duration-base)] ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md",
        className
      )}
    >
      {children}
    </Comp>
  );
}
