import * as React from "react";
import { cn } from "@/lib/utils";

export function IconTile({
  icon: Icon,
  className,
  tone = "primary",
}: {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  className?: string;
  tone?: "primary" | "neutral";
}) {
  return (
    <div
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-lg",
        tone === "primary" && "bg-primary/10 text-primary",
        tone === "neutral" && "bg-surface-raised text-text-secondary",
        className
      )}
    >
      <Icon size={20} aria-hidden />
    </div>
  );
}
