import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/features/CTASection";
import { ArticleBody } from "@/components/features/blog/ArticleBody";
import { articulos, getArticulo } from "@/components/features/blog/articulos";
import { siteConfig } from "@/config/site";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return articulos.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) return {};
  return pageMetadata({
    title: articulo.title,
    description: articulo.metaDescription,
    path: `/blog/${articulo.slug}`,
  });
}

export default async function ArticuloPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const articulo = getArticulo(slug);
  if (!articulo) notFound();

  const whatsappText = `Hola, leí el artículo "${articulo.title}" y quiero saber más.`;
  const whatsappHref = `${siteConfig.phone.whatsapp}?text=${encodeURIComponent(whatsappText)}`;
  const articleUrl = `${siteConfig.url}/blog/${articulo.slug}`;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: articulo.title,
    description: articulo.metaDescription,
    datePublished: articulo.publishedAt,
    dateModified: articulo.publishedAt,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    image: `${siteConfig.url}${siteConfig.ogImage.url}`,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
  };

  const publishedDate = new Date(articulo.publishedAt + "T00:00:00").toLocaleDateString("es-CO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <>
      <Section className="pb-8">
        <div className="mx-auto flex max-w-2xl flex-col gap-6">
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-[var(--duration-fast)] hover:text-text-primary"
          >
            <ArrowLeft size={16} aria-hidden />
            Volver al blog
          </Link>

          <div className="flex flex-col gap-4">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="text-3xl font-semibold text-balance sm:text-4xl">{articulo.title}</h1>
            <p className="text-sm text-text-muted">
              <time dateTime={articulo.publishedAt}>{publishedDate}</time>
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mx-auto max-w-2xl">
          <ArticleBody blocks={articulo.content} />

          <div className="mt-10 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface-raised p-8 text-center">
            <p className="text-lg font-semibold text-balance">
              ¿Querés saber si tu negocio realmente necesita una página web?
            </p>
            <p className="text-sm text-text-secondary">
              Analicemos tu caso y te decimos qué tendría sentido hacer.
            </p>
            <Button href={whatsappHref} external size="lg">
              <MessageCircle size={16} aria-hidden />
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </Section>

      <CTASection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
    </>
  );
}
