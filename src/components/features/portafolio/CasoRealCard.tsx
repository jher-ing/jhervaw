import Image from "next/image";
import { ArrowUpRight, Check } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { BrowserFrame } from "@/components/features/concepts/BrowserFrame";
import { cn } from "@/lib/utils";
import type { CasoReal } from "./casos-reales";

/** Tarjeta de un proyecto entregado a un cliente real (solo los publicados). */
export function CasoRealCard({ caso }: { caso: CasoReal }) {
  return (
    <article
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-surface shadow-sm",
        caso.imagen && "lg:grid lg:grid-cols-[60%_40%] lg:items-stretch"
      )}
    >
      {caso.imagen && (
        <div className="flex items-center bg-surface-raised p-6 sm:p-10">
          <BrowserFrame url={caso.url ? new URL(caso.url).host : caso.negocio} className="w-full">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={caso.imagen}
                alt={`Página web de ${caso.negocio}`}
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
          </BrowserFrame>
        </div>
      )}

      <div className="flex flex-col gap-5 p-8 sm:p-10">
        <Badge tone="primary" className="w-fit">
          Cliente real
        </Badge>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium text-text-muted">{caso.rubro}</p>
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">{caso.negocio}</h3>
          <p className="text-text-secondary text-pretty">{caso.resumen}</p>
        </div>
        <ul className="flex flex-col gap-2.5">
          {caso.entregables.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-text-secondary">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
        {caso.url && (
          <a
            href={caso.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            Ver la página
            <ArrowUpRight size={16} aria-hidden />
          </a>
        )}
      </div>
    </article>
  );
}
