import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Metadata única y persuasiva por página — 04-SEO/Metadata.md, OpenGraph.md.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = `${siteConfig.url}${path}`;
  const images = [
    {
      url: siteConfig.ogImage.url,
      width: siteConfig.ogImage.width,
      height: siteConfig.ogImage.height,
      alt: `${siteConfig.name} — ${siteConfig.tagline}`,
    },
  ];
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      images,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.ogImage.url],
    },
  };
}
