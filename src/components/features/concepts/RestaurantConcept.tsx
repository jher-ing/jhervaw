"use client";

import * as React from "react";
import { BrowserFrame } from "./BrowserFrame";
import { NicheHero } from "./NicheHero";
import { getNiche } from "./niches";

/**
 * Concepto de ejemplo — no es un cliente real de Jherva. Paleta y contenido
 * ilustrativos para mostrar cómo se adaptaría la identidad visual a un
 * restaurante (Modo A de IDENTITY.md: la marca del cliente, no la de Jherva).
 */
const niche = getNiche("restaurante")!;

const menu = {
  Entradas: [
    { name: "Tartar de atún", desc: "Aguacate, sésamo tostado, cítricos", price: "$38.000" },
    { name: "Croquetas de setas", desc: "Alioli ahumado, hierbas frescas", price: "$26.000" },
  ],
  Fuertes: [
    { name: "Risotto de hongos", desc: "Parmesano curado, trufa de temporada", price: "$52.000" },
    { name: "Costilla braseada", desc: "Puré de papa criolla, jus reducido", price: "$68.000" },
  ],
  Postres: [
    { name: "Tarta de limón", desc: "Merengue flambeado, ralladura fresca", price: "$24.000" },
    { name: "Fondant de chocolate", desc: "Helado de vainilla, frutos rojos", price: "$26.000" },
  ],
};

type Category = keyof typeof menu;
const categories = Object.keys(menu) as Category[];

export function RestaurantConcept() {
  const [active, setActive] = React.useState<Category>("Entradas");

  return (
    <div className="flex flex-col gap-6">
      <NicheHero palette={niche.palette} eyebrowIcon={niche.icon} visualIcon={niche.icon} {...niche.hero} />

      <BrowserFrame url="restaurante-concepto.com/menu">
        <div style={niche.palette} className="bg-[var(--n-bg)] px-6 py-10 sm:px-10">
          <div
            role="tablist"
            aria-label="Categorías del menú"
            className="flex flex-wrap gap-2 border-b border-[var(--n-border)] pb-4"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-[var(--duration-fast)] ${
                  active === cat
                    ? "bg-[var(--n-accent)] text-[var(--n-bg)]"
                    : "text-[var(--n-text-muted)] hover:text-[var(--n-text)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <ul key={active} className="mt-6 flex animate-fade-in flex-col divide-y divide-[var(--n-border)]">
            {menu[active].map((item) => (
              <li key={item.name} className="flex items-start justify-between gap-4 py-4">
                <div>
                  <p className="font-medium text-[var(--n-text)]">{item.name}</p>
                  <p className="mt-1 text-sm text-[var(--n-text-muted)]">{item.desc}</p>
                </div>
                <p className="shrink-0 font-display text-sm font-semibold text-[var(--n-accent)]">
                  {item.price}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </BrowserFrame>
    </div>
  );
}
