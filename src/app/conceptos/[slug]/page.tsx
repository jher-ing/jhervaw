import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConceptDetail } from "@/components/features/concepts/ConceptDetail";
import { CTASection } from "@/components/features/CTASection";
import { niches, getNiche } from "@/components/features/concepts/niches";
import { pageMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return niches.map((n) => ({ slug: n.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) return {};
  return pageMetadata({
    title: `Concepto — ${niche.title}`,
    description: niche.description,
    path: niche.href,
  });
}

export default async function ConceptoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();

  return (
    <>
      <ConceptDetail niche={niche} />
      <CTASection />
    </>
  );
}
