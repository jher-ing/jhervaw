import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, MessageCircle, Plus } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { IconTile } from "@/components/ui/IconTile";
import { CTASection } from "@/components/features/CTASection";
import { BrowserFrame } from "@/components/features/concepts/BrowserFrame";
import { nichosServicio, getServicioNicho } from "@/components/features/servicios/nichos-servicio";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return nichosServicio.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const niche = getServicioNicho(slug);
  if (!niche) return {};
  return pageMetadata({
    title: niche.h1,
    description: niche.metaDescription,
    path: `/paginas-web-para/${niche.slug}`,
  });
}

export default async function ServicioNichoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const niche = getServicioNicho(slug);
  if (!niche) notFound();

  const otherNichos = nichosServicio.filter((n) => n.slug !== niche.slug);
  const whatsappText = `Hola, vi la página de diseño web para ${niche.title.toLowerCase()} y me interesa saber más.`;
  const whatsappHref = `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(whatsappText)}`;

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: niche.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <Eyebrow>Diseño web para {niche.title.toLowerCase()}</Eyebrow>
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">{niche.h1}</h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">{niche.painPoint}</p>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Button href={whatsappHref} external size="lg">
              <MessageCircle size={16} aria-hidden />
              Hablar por WhatsApp
            </Button>
            {niche.mockup ? (
              <Button href={niche.mockup.href} size="lg" variant="outline">
                Ver en el portafolio
              </Button>
            ) : (
              <Button href="/contacto" size="lg" variant="outline">
                Contarme mi proyecto
              </Button>
            )}
          </div>
        </div>
      </Section>

      {niche.mockup && (
        <Section tone="raised">
          <div className="mx-auto max-w-4xl">
            <BrowserFrame url={`${niche.slug}-concepto.com`} className="w-full shadow-lg">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src={niche.mockup.image}
                  alt={`Mockup del concepto de sitio web para ${niche.title.toLowerCase()}`}
                  fill
                  sizes="(min-width: 1024px) 900px, 100vw"
                  className="object-cover"
                />
              </div>
            </BrowserFrame>
            <p className="mt-4 text-center text-sm text-text-muted">
              Ejemplo de nuestro portafolio — no es un cliente real.{" "}
              <Link href={niche.mockup.href} className="underline hover:text-text-secondary">
                Ver en el portafolio
              </Link>
            </p>
          </div>
        </Section>
      )}

      <Section>
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-balance sm:text-3xl">
            Qué gana tu {niche.title.toLowerCase().replace(/s$/, "")} con una página web propia
          </h2>
          <ul className="mt-8 flex flex-col gap-4">
            {niche.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={14} aria-hidden />
                </span>
                <span className="text-base text-text-secondary">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section tone="raised">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-8 divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
            {niche.faq.map((item) => (
              <details key={item.question} className="group open:bg-surface-raised/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-left text-base font-medium text-text-primary sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-[var(--duration-base)] ease-[var(--ease-standard)] group-open:rotate-45"
                  >
                    <Plus size={14} />
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-text-secondary sm:px-6 sm:pb-6">
                  <p>{item.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wide text-text-muted">
            También diseñamos para
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {otherNichos.map((n) => (
              <Card key={n.slug} interactive className="relative flex flex-row items-center gap-3 p-4">
                <IconTile icon={n.icon} className="size-9" />
                <span className="text-sm font-medium text-text-primary">{n.title}</span>
                <ArrowRight size={14} className="text-text-muted" aria-hidden />
                <Link
                  href={`/paginas-web-para/${n.slug}`}
                  aria-label={`Ver página de diseño web para ${n.title.toLowerCase()}`}
                  className="absolute inset-0 rounded-xl"
                />
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
