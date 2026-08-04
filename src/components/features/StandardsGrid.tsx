import Link from "next/link";
import {
  Layers3,
  MousePointerClick,
  Palette,
  Search,
  ShieldCheck,
  Gauge,
  Bot,
  Accessibility,
  PenLine,
  Rocket,
  ClipboardCheck,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export interface Standard {
  icon: LucideIcon;
  code: string;
  title: string;
  description: string;
}

/**
 * Fuente: README.md — tabla "Estructura" (las 12 carpetas del estándar)
 * + la línea "Principio general" de cada documento índice.
 */
export const standards: Standard[] = [
  {
    icon: Layers3,
    code: "01",
    title: "Arquitectura",
    description:
      "Capas separadas — presentación, lógica de negocio y datos — para que ninguna dependa directamente de otra.",
  },
  {
    icon: MousePointerClick,
    code: "02",
    title: "UI/UX",
    description:
      "El usuario nunca piensa '¿y ahora qué hago?'. Jerarquía clara y fricción mínima en cada flujo.",
  },
  {
    icon: Palette,
    code: "03",
    title: "Sistema de diseño",
    description:
      "Tokens de color, tipografía y espaciado — nunca valores mágicos sueltos en el código.",
  },
  {
    icon: Search,
    code: "04",
    title: "SEO",
    description:
      "Metadata única, datos estructurados y fundamentos técnicos para que el contenido sea encontrado.",
  },
  {
    icon: ShieldCheck,
    code: "05",
    title: "Seguridad",
    description:
      "Cada endpoint se asegura por diseño, no se protege después de detectar un abuso.",
  },
  {
    icon: Gauge,
    code: "06",
    title: "Performance",
    description:
      "Core Web Vitals dentro de umbrales 'Good' — se diseña desde el día uno, no se arregla después.",
  },
  {
    icon: Bot,
    code: "07",
    title: "IA",
    description:
      "La IA acelera al equipo, no reemplaza el juicio técnico — todo output se revisa antes de mergear.",
  },
  {
    icon: Accessibility,
    code: "08",
    title: "Accesibilidad",
    description: "WCAG 2.1 AA como mínimo no negociable en todo proyecto lanzado a producción.",
  },
  {
    icon: PenLine,
    code: "09",
    title: "Copywriting",
    description:
      "Las personas recuerdan historias, no listas de características — copy honesto, específico, sin relleno.",
  },
  {
    icon: Rocket,
    code: "10",
    title: "Deployment",
    description:
      "Ningún cambio llega a producción sin pasar automáticamente por lint, tests y build exitoso.",
  },
  {
    icon: ClipboardCheck,
    code: "11",
    title: "QA",
    description:
      "Los tests dan confianza de que el sistema funciona y seguirá funcionando, no persiguen un porcentaje arbitrario.",
  },
  {
    icon: ListChecks,
    code: "12",
    title: "Checklists",
    description: "Checklist ejecutable por fase de proyecto, del inicio al mantenimiento continuo.",
  },
];

export function StandardsPreviewGrid({ limit }: { limit?: number }) {
  const visible = limit ? standards.slice(0, limit) : standards;
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {visible.map((item) => (
        <Link
          key={item.code}
          href="/estandares"
          className={cn(
            "group flex flex-col gap-3 rounded-xl border border-border bg-surface p-6",
            "transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] ease-[var(--ease-standard)]",
            "hover:-translate-y-0.5 hover:border-border-strong hover:shadow-md"
          )}
        >
          <div className="flex items-center justify-between">
            <item.icon size={20} className="text-primary" aria-hidden />
            <span className="font-display text-xs font-semibold text-text-muted">
              {item.code}
            </span>
          </div>
          <h3 className="text-base font-semibold">{item.title}</h3>
          <p className="text-sm leading-relaxed text-text-secondary">{item.description}</p>
        </Link>
      ))}
    </div>
  );
}
