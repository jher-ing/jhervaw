import { ArrowUpRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Producto } from "./productos";

/**
 * Tarjeta de un producto propio. Enlaza a la app (otro subdominio), por eso es un <a>
 * normal y no un <Link>. `detailed` agrega los resultados y el precio (página /productos).
 */
export function ProductoCard({ producto, detailed = false }: { producto: Producto; detailed?: boolean }) {
  const Icon = producto.icon;
  const host = producto.url.replace("https://", "");

  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8">
      <div className="flex items-center gap-3">
        <span
          className="flex size-11 shrink-0 items-center justify-center rounded-xl text-white ring-1 ring-white/15"
          style={{ backgroundColor: producto.brand }}
        >
          <Icon size={20} aria-hidden />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold">{producto.name}</h3>
          <p className="text-sm text-text-muted">{producto.forWho}</p>
        </div>
      </div>

      <p className="mt-6 text-xl font-semibold text-balance">{producto.headline}</p>
      <p className="mt-3 text-sm leading-relaxed text-text-secondary text-pretty">{producto.description}</p>

      {detailed && (
        <ul className="mt-6 flex flex-col gap-2.5">
          {producto.outcomes.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-text-secondary">
              <Check size={16} className="mt-0.5 shrink-0 text-primary" aria-hidden />
              {o}
            </li>
          ))}
        </ul>
      )}

      <div className={cn("mt-auto flex flex-col gap-4", detailed ? "pt-8" : "pt-6")}>
        {detailed ? (
          <div className="rounded-xl bg-surface-raised px-4 py-3">
            <p className="text-sm text-text-secondary">
              <span className="text-2xl font-semibold text-text-primary">{producto.price}</span> COP / mes
            </p>
            <p className="mt-1 text-xs text-text-muted">
              Precio fundador {producto.founderPrice}/mes para los primeros {producto.founderSeats} negocios.
            </p>
          </div>
        ) : (
          <p className="text-sm text-text-secondary">
            {producto.trialDays} días gratis, luego{" "}
            <span className="font-semibold text-text-primary">{producto.price}</span>/mes
          </p>
        )}
        <a
          href={producto.url}
          target="_blank"
          rel="noopener"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium text-white ring-1 ring-white/15 transition-opacity hover:opacity-90"
          style={{ backgroundColor: producto.brand }}
        >
          {detailed ? `Probar ${producto.trialDays} días gratis` : `Conocer ${producto.name.replace("Jherva ", "")}`}
          <ArrowUpRight size={16} aria-hidden />
        </a>
        <p className="-mt-2 text-center text-xs text-text-muted">{host}</p>
      </div>
    </article>
  );
}
