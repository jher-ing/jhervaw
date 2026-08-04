import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  tone = "neutral",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "neutral" | "primary";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium",
        tone === "neutral" && "border-border bg-surface-raised text-text-secondary",
        tone === "primary" && "border-primary/20 bg-primary/10 text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}
