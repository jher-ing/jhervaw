import type { Metadata } from "next";
import { MessageCircle, Check } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/features/CTASection";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Precios",
  description:
    "Precios de diseño y desarrollo web en Jherva: desde $500.000 COP. Tarifas claras por tipo de proyecto, sin letra chiquita ni cotizaciones a ciegas.",
  path: "/precios",
});

const tiers = [
  {
    name: "Landing / una sección larga",
    price: "$500.000 – $600.000",
    description:
      "Una sola página pensada para un objetivo concreto: captar un contacto, promocionar un producto o servir de tarjeta de presentación digital.",
    delivery: "3-5 días hábiles",
  },
  {
    name: "Página profesional completa",
    price: "$800.000 – $1.000.000",
    description:
      "Inicio, Nosotros, Servicios y Contacto — la estructura que necesita la mayoría de los negocios para tener presencia completa en internet.",
    delivery: "5-7 días hábiles",
  },
  {
    name: "Sitio más completo",
    price: "$1.200.000 – $1.800.000",
    description:
      "Varias páginas y secciones adicionales, para negocios que necesitan mostrar más: catálogos extensos, múltiples servicios o contenido propio.",
    delivery: "Se define según el alcance",
  },
  {
    name: "Tienda online",
    price: "Desde $1.800.000 – $2.500.000+",
    description:
      "Catálogo de productos, carrito y pasarela de pago — para vender directo desde tu sitio, sin comisión de terceros.",
    delivery: "Se define según el alcance",
  },
  {
    name: "Desarrollo personalizado",
    price: "Cotización",
    description:
      "Paneles de administración, sistemas de reservas o funcionalidades a medida — cuando el proyecto necesita algo que no entra en un molde estándar.",
    delivery: "Se cotiza aparte",
  },
];

const included = [
  "SEO técnico configurado desde el día uno",
  "Rendimiento y velocidad de carga optimizados",
  "Seguridad y buenas prácticas de despliegue",
  "Diseño adaptado a celular, sin excepción",
];

const offerCatalogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Diseño y desarrollo web",
  provider: { "@type": "ProfessionalService", name: siteConfig.name, url: siteConfig.url },
  areaServed: { "@type": "Country", name: "Colombia" },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de diseño y desarrollo web — Jherva",
    itemListElement: tiers
      .filter((t) => t.price !== "Cotización")
      .map((t) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: t.name, description: t.description },
        priceCurrency: "COP",
        availability: "https://schema.org/InStock",
      })),
  },
};

export default function PreciosPage() {
  const whatsappText = "Hola, vi los precios en la página y quiero contarte sobre mi proyecto.";
  const whatsappHref = `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Precios</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Precios claros, sin letra chiquita
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Una página web profesional con Jherva arranca desde $600.000 COP. El precio final
            depende del alcance de tu proyecto — acá tenés los rangos reales, no una cotización
            a ciegas.
          </p>
          <Button href={whatsappHref} external size="lg">
            <MessageCircle size={16} aria-hidden />
            Hablar por WhatsApp
          </Button>
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-primary/30 bg-primary/5 px-6 py-8 text-center sm:px-10">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Cliente fundador
          </p>
          <p className="text-xl font-semibold text-balance sm:text-2xl">
            30% de descuento en tu proyecto, cupo limitado a los primeros 3
          </p>
          <p className="max-w-xl text-sm text-text-secondary text-pretty">
            Por ejemplo: una página profesional de $1.000.000 queda en $850.000. Una landing de
            $600.000 queda en $510.000. Aplica a cualquier tipo de proyecto, mientras dure el cupo.
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Tarifas" title="Cuánto cuesta cada tipo de proyecto" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {tiers.map((tier) => (
            <Card key={tier.name} className="flex flex-col gap-3">
              <h2 className="text-lg font-semibold">{tier.name}</h2>
              <p className="font-display text-2xl font-semibold text-primary">{tier.price}</p>
              <p className="text-sm leading-relaxed text-text-secondary">{tier.description}</p>
              <p className="mt-auto text-xs font-medium uppercase tracking-wide text-text-muted">
                Entrega: {tier.delivery}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="flex flex-col gap-4">
            <Eyebrow className="text-accent">Sin extras escondidos</Eyebrow>
            <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
              Lo que incluye cada proyecto, siempre
            </h2>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 p-5">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check size={14} aria-hidden />
                </span>
                <span className="text-sm leading-relaxed text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-text-secondary">
            ¿Tenés más dudas sobre precios y plataformas? Revisá las{" "}
            <a href="/preguntas-frecuentes#costos-pagina-web" className="text-primary underline underline-offset-4">
              preguntas frecuentes sobre costos
            </a>
            .
          </p>
        </div>
      </Section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogJsonLd) }}
      />
    </>
  );
}
