
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nosotros",
    "/proceso",
    "/estandares",
    "/preguntas-frecuentes",
    "/conceptos",
    "/conceptos/restaurante",
    "/conceptos/hotel",
    "/conceptos/tienda-de-ropa",
    "/contacto",
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
