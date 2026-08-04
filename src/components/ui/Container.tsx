import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Ancho máximo de contenido centrado, con padding lateral responsive.
 * 03-Design-System/Sections.md — max-width ~1200px, padding lateral en mobile.
 */
export function Container({
  className,
  children,
  as: Comp = "div",
}: {
  className?: string;
  children: React.ReactNode;
  as?: React.ElementType;
}) {
  return (
    <Comp className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </Comp>
  );
}
