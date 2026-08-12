
import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { nichosServicio } from "@/components/features/servicios/nichos-servicio";
import { niches } from "@/components/features/concepts/niches";
import { articulos } from "@/components/features/blog/articulos";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/nosotros",
    "/proceso",
    "/estandares",
    "/preguntas-frecuentes",
    "/portafolio",
    "/paginas-web-para",
    "/blog",
    "/contacto",
  ];

  const portafolioRoutes = niches.map((n) => n.href);
  const servicioRoutes = nichosServicio.map((n) => `/paginas-web-para/${n.slug}`);
  const blogRoutes = articulos.map((a) => `/blog/${a.slug}`);

  return [...routes, ...portafolioRoutes, ...servicioRoutes, ...blogRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : route.startsWith("/paginas-web-para/") ? 0.85 : 0.7,
  }));
}
