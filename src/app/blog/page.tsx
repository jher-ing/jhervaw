import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/features/CTASection";
import { articulos } from "@/components/features/blog/articulos";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description:
    "Artículos sobre páginas web, presencia digital y cómo tomar mejores decisiones para tu negocio en Colombia.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <Section className="pb-8">
        <div className="flex flex-col items-center gap-6 text-center">
          <Eyebrow>Blog</Eyebrow>
          <h1 className="max-w-2xl text-4xl font-semibold text-balance sm:text-5xl">
            Ideas claras sobre presencia digital para tu negocio
          </h1>
          <p className="max-w-2xl text-lg text-text-secondary text-pretty">
            Sin relleno ni jerga — respuestas directas a las preguntas reales que se hace un
            negocio antes de invertir en su presencia digital.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto flex max-w-2xl flex-col gap-5">
          {articulos.map((articulo) => (
            <Card key={articulo.slug} interactive className="relative flex flex-col gap-3">
              <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                <time dateTime={articulo.publishedAt}>
                  {new Date(articulo.publishedAt + "T00:00:00").toLocaleDateString("es-CO", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </p>
              <h2 className="text-xl font-semibold text-balance">{articulo.title}</h2>
              <p className="text-sm leading-relaxed text-text-secondary">{articulo.excerpt}</p>
              <span className="mt-1 inline-flex w-fit items-center gap-2 text-sm font-medium text-primary">
                Leer artículo
                <ArrowRight size={14} aria-hidden />
              </span>
              <Link
                href={`/blog/${articulo.slug}`}
                aria-label={`Leer: ${articulo.title}`}
                className="absolute inset-0 rounded-xl"
              />
            </Card>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  );
}
