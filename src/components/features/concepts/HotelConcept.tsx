"use client";

import * as React from "react";
import { Minus, Plus, Search } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";
import { NicheHero } from "./NicheHero";
import { getNiche } from "./niches";

/** Concepto de ejemplo — no es un cliente real de Jherva (ver RestaurantConcept.tsx). */
const niche = getNiche("hotel")!;

const rooms = [
  { name: "Habitación Deluxe", detail: "1 cama king · vista al jardín", price: "$420.000 / noche" },
  { name: "Suite Junior", detail: "1 cama king · balcón privado", price: "$580.000 / noche" },
];

export function HotelConcept() {
  const [guests, setGuests] = React.useState(2);
  const [searched, setSearched] = React.useState(false);

  return (
    <div className="flex flex-col gap-6">
      <NicheHero palette={niche.palette} eyebrowIcon={niche.icon} visualIcon={niche.icon} {...niche.hero} />

      <BrowserFrame url="hotel-concepto.com/reservas">
        <div style={niche.palette} className="bg-[var(--n-bg)] px-6 py-10 sm:px-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSearched(true);
            }}
            className="grid gap-4 sm:grid-cols-[1fr_1fr_auto_auto] sm:items-end"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="checkin" className="text-xs font-medium text-[var(--n-text-muted)]">
                Llegada
              </label>
              <input
                id="checkin"
                type="date"
                className="rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] px-3 py-2 text-sm text-[var(--n-text)] outline-none"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="checkout" className="text-xs font-medium text-[var(--n-text-muted)]">
                Salida
              </label>
              <input
                id="checkout"
                type="date"
                className="rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] px-3 py-2 text-sm text-[var(--n-text)] outline-none"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-medium text-[var(--n-text-muted)]">Huéspedes</span>
              <div className="flex items-center gap-3 rounded-lg border border-[var(--n-border)] bg-[var(--n-surface)] px-3 py-2">
                <button
                  type="button"
                  aria-label="Reducir huéspedes"
                  onClick={() => setGuests((g) => Math.max(1, g - 1))}
                  className="text-[var(--n-text-muted)] hover:text-[var(--n-text)]"
                >
                  <Minus size={14} aria-hidden />
                </button>
                <span className="w-4 text-center text-sm text-[var(--n-text)]">{guests}</span>
                <button
                  type="button"
                  aria-label="Aumentar huéspedes"
                  onClick={() => setGuests((g) => Math.min(8, g + 1))}
                  className="text-[var(--n-text-muted)] hover:text-[var(--n-text)]"
                >
                  <Plus size={14} aria-hidden />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-lg bg-[var(--n-accent)] px-5 py-2.5 text-sm font-medium text-white"
            >
              <Search size={14} aria-hidden />
              Buscar
            </button>
          </form>

          {searched && (
            <ul className="mt-8 flex animate-fade-in flex-col divide-y divide-[var(--n-border)] border-t border-[var(--n-border)]">
              {rooms.map((room) => (
                <li key={room.name} className="flex items-center justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium text-[var(--n-text)]">{room.name}</p>
                    <p className="mt-1 text-sm text-[var(--n-text-muted)]">{room.detail}</p>
                  </div>
                  <p className="shrink-0 font-display text-sm font-semibold text-[var(--n-accent)]">
                    {room.price}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </BrowserFrame>
    </div>
  );
}
