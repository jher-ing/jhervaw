import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Enmarca cada mockup como una ventana de navegador — deja visualmente
 * inequívoco que es una simulación de sitio, no una captura real ni el
 * sitio de Jherva en sí. Política de imágenes de IDENTITY.md: los
 * placeholders deben ser "claramente identificables como temporales".
 */
export function BrowserFrame({
  url,
  children,
  className,
}: {
  url: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-surface shadow-lg",
        className
      )}
    >
      <div className="flex items-center gap-3 border-b border-border bg-surface-raised px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-danger/70" />
          <span className="size-2.5 rounded-full bg-warning/70" />
          <span className="size-2.5 rounded-full bg-success/70" />
        </div>
        <div className="flex-1 truncate rounded-full bg-background px-3 py-1 text-center text-xs text-text-muted">
          {url}
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}
