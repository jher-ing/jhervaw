
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { nichosServicio } from "@/components/features/servicios/nichos-servicio";
import { niches } from "@/components/features/concepts/niches";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nosotros",
    "/proceso",
    "/estandares",
    "/preguntas-frecuentes",
    "/portafolio",
    "/paginas-web-para",
    "/contacto",
  ];

  const portafolioRoutes = niches.map((n) => n.href);
  const servicioRoutes = nichosServicio.map((n) => `/paginas-web-para/${n.slug}`);

  return [...routes, ...portafolioRoutes, ...servicioRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/paginas-web-para/") ? 0.85 : 0.7,
  }));
}
