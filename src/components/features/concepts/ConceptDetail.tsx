import Link from "next/link";
import type { ComponentType } from "react";
import { ArrowLeft, Info } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import type { NicheConfig } from "./niches";

/**
 * Cabecera + demo completa de un concepto. El disclaimer se repite aquí
 * (no solo en la galería /conceptos) porque esta página es alcanzable por
 * URL directa, sin pasar necesariamente por la galería primero.
 */
export function ConceptDetail({ niche, Concept }: { niche: NicheConfig; Concept: ComponentType }) {
  const Icon = niche.icon;

  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col gap-6">
          <Link
            href="/conceptos"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
          >
            <ArrowLeft size={16} aria-hidden />
            Volver a conceptos
          </Link>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} aria-hidden />
              </div>
              <Eyebrow>Concepto de diseño</Eyebrow>
            </div>
            <h1 className="text-3xl font-semibold text-balance sm:text-4xl">{niche.title}</h1>
            <p className="max-w-2xl text-lg text-text-secondary text-pretty">{niche.description}</p>
          </div>

          <div className="flex max-w-2xl items-start gap-3 rounded-xl border border-border bg-surface-raised p-5">
            <Info size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden />
            <p className="text-sm leading-relaxed text-text-secondary">
              <strong className="text-text-primary">Esto no es un cliente real de Jherva.</strong>{" "}
              Es una exploración de diseño con marca y contenido ficticios.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        {/* Puente semántico h1 → h2 → h3 (el hero interno del concepto usa h3) */}
        <h2 className="sr-only">Vista previa del concepto</h2>
        <Concept />
      </Section>
    </>
  );
}
