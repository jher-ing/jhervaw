import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

/**
 * Hero — 09-Copywriting/Hero.md: eyebrow + headline (beneficio) + subheadline
 * + CTA primario + CTA secundario, propuesta de valor visible sin scroll.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_srgb,var(--color-primary)_16%,transparent),transparent_70%)]"
      />
      <Container className="flex flex-col items-center gap-8 py-20 text-center sm:py-28 lg:py-32">
        <Badge tone="primary" className="animate-fade-in">
          <Sparkles size={12} aria-hidden />
          Estudio de desarrollo web y producto digital
        </Badge>

        <h1 className="max-w-4xl text-4xl font-semibold text-balance sm:text-6xl lg:text-7xl animate-fade-up">
          Presencia digital que{" "}
          <span className="text-primary">genera resultados reales</span>
        </h1>

        <p
          className="max-w-2xl text-lg text-text-secondary text-pretty sm:text-xl animate-fade-up"
          style={{ animationDelay: "80ms" }}
        >
          Diseñamos y construimos sitios web, landing pages y productos digitales
          para negocios en toda Colombia, combinando diseño moderno, rigor técnico
          y estrategia de conversión — no sitios bonitos que nadie convierte.
        </p>

        <div
          className="flex flex-col items-center gap-4 sm:flex-row animate-fade-up"
          style={{ animationDelay: "140ms" }}
        >
          <Button href="/contacto" size="lg">
            Hablemos de tu proyecto
            <ArrowRight size={16} aria-hidden />
          </Button>
          <Button href="/proceso" size="lg" variant="outline">
            Ver nuestro proceso
          </Button>
        </div>
      </Container>
    </section>
  );
}
