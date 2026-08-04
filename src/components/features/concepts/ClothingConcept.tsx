"use client";

import * as React from "react";
import { Shirt, Plus } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { NicheHero } from "./NicheHero";
import { getNiche } from "./niches";

/** Concepto de ejemplo — no es un cliente real de Jherva (ver RestaurantConcept.tsx). */
const niche = getNiche("tienda-de-ropa")!;

const products = [
  { name: "Camiseta esencial", category: "Camisetas", price: "$89.000" },
  { name: "Camiseta oversize", category: "Camisetas", price: "$99.000" },
  { name: "Pantalón recto", category: "Pantalones", price: "$189.000" },
  { name: "Pantalón cargo", category: "Pantalones", price: "$209.000" },
  { name: "Gorra estructurada", category: "Accesorios", price: "$69.000" },
  { name: "Bolso tote", category: "Accesorios", price: "$129.000" },
];

const filters = ["Todo", "Camisetas", "Pantalones", "Accesorios"] as const;

export function ClothingConcept() {
  const [filter, setFilter] = React.useState<(typeof filters)[number]>("Todo");
  const visible = filter === "Todo" ? products : products.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col gap-6">
      <NicheHero palette={niche.palette} eyebrowIcon={niche.icon} visualIcon={niche.icon} {...niche.hero} />

      <BrowserFrame url="tienda-concepto.com/tienda">
        <div style={niche.palette} className="bg-[var(--n-bg)] px-6 py-10 sm:px-10">
          <div role="group" aria-label="Filtrar por categoría" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] ${
                  filter === f
                    ? "border-[var(--n-accent)] bg-[var(--n-accent)] text-white"
                    : "border-[var(--n-border)] text-[var(--n-text-muted)] hover:text-[var(--n-text)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <ul key={filter} className="mt-6 grid animate-fade-in grid-cols-2 gap-3 sm:grid-cols-3">
            {visible.map((product) => (
              <li
                key={product.name}
                className="flex flex-col gap-3 rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] p-4"
              >
                <div className="flex aspect-square items-center justify-center rounded-md bg-[var(--n-bg)]">
                  <Shirt size={22} className="text-[var(--n-border)]" aria-hidden />
                </div>
                <div>
                  <p className="text-sm font-medium text-[var(--n-text)]">{product.name}</p>
                  <p className="text-sm text-[var(--n-text-muted)]">{product.price}</p>
                </div>
                <span className="flex items-center justify-center gap-1.5 rounded-full border border-[var(--n-border)] py-1.5 text-xs font-medium text-[var(--n-text)]">
                  <Plus size={12} aria-hidden />
                  Agregar
                </span>
              </li>
            ))}
          </ul>
        </div>
      </BrowserFrame>
    </div>
  );
}
