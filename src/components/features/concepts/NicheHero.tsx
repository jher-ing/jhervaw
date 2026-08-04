import type { CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";
import { BrowserFrame } from "./BrowserFrame";

interface Badge {
  icon: LucideIcon;
  label: string;
}

interface NicheHeroProps {
  palette: Record<string, string>;
  url: string;
  eyebrowIcon: LucideIcon;
  eyebrowLabel: string;
  headline: string;
  subtext: string;
  primaryCta: string;
  secondaryCta: string;
  visualIcon: LucideIcon;
  badges: [Badge, Badge];
}

/**
 * Hero compartido por los tres conceptos: texto + panel visual compuesto
 * (blob de gradiente + ícono + badges flotantes) en vez de una foto real —
 * decisión acordada con el usuario al no contar con generación de imágenes.
 */
export function NicheHero({
  palette,
  url,
  eyebrowIcon: EyebrowIcon,
  eyebrowLabel,
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  visualIcon: VisualIcon,
  badges,
}: NicheHeroProps) {
  const [badgeA, badgeB] = badges;
  const BadgeAIcon = badgeA.icon;
  const BadgeBIcon = badgeB.icon;

  return (
    <BrowserFrame url={url}>
      <div
        style={palette as CSSProperties}
        className="relative flex flex-col items-start gap-10 overflow-hidden bg-[var(--n-bg)] px-8 py-16 sm:px-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle, var(--n-border) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
            maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-start gap-5">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--n-border)] px-3 py-1 text-xs font-medium text-[var(--n-accent)]">
            <EyebrowIcon size={12} aria-hidden />
            {eyebrowLabel}
          </span>
          <h3 className="max-w-md font-display text-3xl font-semibold text-balance text-[var(--n-text)] sm:text-4xl">
            {headline}
          </h3>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--n-text-muted)]">{subtext}</p>
          <div className="mt-2 flex flex-wrap gap-3">
            <span className="rounded-full bg-[var(--n-accent)] px-5 py-2.5 text-sm font-medium text-[var(--n-bg)]">
              {primaryCta}
            </span>
            <span className="rounded-full border border-[var(--n-border)] px-5 py-2.5 text-sm font-medium text-[var(--n-text)]">
              {secondaryCta}
            </span>
          </div>
        </div>

        <div className="relative z-10 flex w-full items-center justify-center py-4 lg:w-auto lg:flex-1 lg:py-0">
          <div
            aria-hidden
            className="absolute size-52 rounded-full bg-[var(--n-accent)] opacity-25 blur-3xl sm:size-64"
          />
          <div className="relative flex size-36 items-center justify-center rounded-[2rem] border border-[var(--n-border)] bg-[var(--n-surface)] shadow-xl sm:size-44">
            <VisualIcon size={52} className="text-[var(--n-accent)]" aria-hidden />
          </div>

          <div className="absolute bottom-2 left-0 flex items-center gap-2 rounded-xl border border-[var(--n-border)] bg-[var(--n-surface)] px-3 py-2 shadow-lg sm:left-4">
            <BadgeAIcon size={14} className="text-[var(--n-accent)]" aria-hidden />
            <span className="text-xs font-medium whitespace-nowrap text-[var(--n-text)]">
              {badgeA.label}
            </span>
          </div>
          <div className="absolute top-2 right-0 flex items-center gap-2 rounded-xl border border-[var(--n-border)] bg-[var(--n-surface)] px-3 py-2 shadow-lg sm:right-4">
            <BadgeBIcon size={14} className="text-[var(--n-accent)]" aria-hidden />
            <span className="text-xs font-medium whitespace-nowrap text-[var(--n-text)]">
              {badgeB.label}
            </span>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
