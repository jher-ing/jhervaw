import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

/**
 * Estructura estándar de sección — 03-Design-System/Sections.md.
 * Padding vertical consistente, fondo alternable, un mensaje por sección.
 */
export function Section({
  className,
  containerClassName,
  children,
  id,
  tone = "base",
}: {
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  id?: string;
  tone?: "base" | "raised" | "ink";
}) {
  return (
    <section
      id={id}
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        tone === "raised" && "bg-surface-raised",
        tone === "ink" && "bg-ink text-white",
        className
      )}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium uppercase tracking-[0.14em] text-primary",
        className
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "text-lg text-text-secondary text-pretty",
            align === "center" ? "max-w-2xl" : "max-w-xl"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
