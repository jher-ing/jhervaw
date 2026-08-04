import { Layout, Building2, ShoppingCart, LayoutDashboard, Rocket } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";

/**
 * Fuente: IDENTITY.md — "Quiénes somos" (sitios web, landing pages, propuestas
 * y productos digitales) + checklist "Tipo de proyecto" (landing, sitio
 * corporativo, ecommerce, dashboard, etc.) y Architecture.md (stack de producto).
 */
const types = [
  { icon: Layout, label: "Landing pages" },
  { icon: Building2, label: "Sitios corporativos" },
  { icon: ShoppingCart, label: "Ecommerce" },
  { icon: LayoutDashboard, label: "Dashboards" },
  { icon: Rocket, label: "Productos digitales a medida" },
];

export function ProjectTypes() {
  return (
    <Section tone="raised">
      <SectionHeading
        align="center"
        eyebrow="Qué construimos"
        title="Desde una landing hasta un producto digital completo"
        description="No nos especializamos en una sola industria ni en un solo tipo de proyecto — el estándar de calidad es el mismo en todos."
      />
      <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
        {types.map((type) => (
          <div
            key={type.label}
            className="flex items-center gap-2.5 rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary"
          >
            <type.icon size={16} className="text-primary" aria-hidden />
            {type.label}
          </div>
        ))}
      </div>
    </Section>
  );
}
