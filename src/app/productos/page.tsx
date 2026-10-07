import type { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ProductoCard } from "@/components/features/productos/ProductoCard";
import { productos } from "@/components/features/productos/productos";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Productos",
  description:
    "Apps de Jherva listas para usar: Jherva Pedidos (menú QR y pedidos para restaurantes) y Jherva Cotizaciones (cotizaciones por WhatsApp). 14 días gratis, sin tarjeta.",
  path: "/productos",
});

const productosJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: productos.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "SoftwareApplication",
      name: p.name,
      url: p.url,
      description: p.description,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: p.price.replace(/\D/g, ""),
        priceCurrency: "COP",
      },
      provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    },
  })),
};

export default function ProductosPage() {
  const whatsappText = "Hola, quiero saber más de las apps de Jherva.";
  const whatsappHref = `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productosJsonLd) }}
      />
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Productos</Eyebrow>
          <h1 className="max-w-3xl text-4xl font-semibold text-balance sm:text-5xl">
            Apps listas para que tu negocio venda mejor desde hoy
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Además de páginas a la medida, en Jherva tenemos apps propias que usas desde el
            celular, sin instalar nada. Te registras, las configuras y empiezas el mismo día.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          {productos.map((p) => (
            <ProductoCard key={p.id} producto={p} detailed />
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-text-muted">
          Las dos incluyen 14 días gratis, sin tarjeta. Nada se cobra solo: al terminar la prueba
          tú decides si sigues.
        </p>
      </Section>

      <Section>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-border bg-surface-raised px-6 py-14 text-center sm:px-16">
          <h2 className="max-w-2xl text-3xl font-semibold text-balance">
            ¿Quieres que te la dejemos lista?
          </h2>
          <p className="max-w-xl text-lg text-text-secondary text-pretty">
            Subimos tu logo, tu menú o tu catálogo y te enseñamos a usarla. Escríbenos y te
            mostramos cómo funciona con tu negocio.
          </p>
          <Button href={whatsappHref} external size="lg">
            <MessageCircle size={16} aria-hidden />
            Hablar por WhatsApp
          </Button>
        </div>
      </Section>
    </>
  );
}
