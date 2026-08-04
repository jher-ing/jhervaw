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
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
    },
    twitter: {
      title: `${title} | ${siteConfig.name}`,
      description,
    },
  };
}
