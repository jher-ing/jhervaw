# Sitemap

## Principio general
El sitemap XML le dice a los buscadores qué páginas existen y deben ser rastreadas — especialmente crítico en sitios grandes o con contenido dinámico.

## Requisitos
- Ubicado en `/sitemap.xml` en la raíz del dominio.
- Incluye solo URLs canónicas, indexables (nunca URLs con `noindex`, redirects o 404).
- Actualizado automáticamente cuando se agrega/elimina contenido (no mantenido a mano en sitios con CMS/blog).
- Referenciado en `robots.txt`:
```
Sitemap: https://ejemplo.com/sitemap.xml
```

## Implementación en Next.js (App Router)
```ts
// app/sitemap.ts
import type { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return [
    { url: 'https://ejemplo.com', lastModified: new Date(), priority: 1 },
    ...posts.map((post) => ({
      url: `https://ejemplo.com/blog/${post.slug}`,
      lastModified: post.updatedAt,
      priority: 0.7,
    })),
  ];
}
```

## Reglas
- Sitios con más de 50,000 URLs requieren sitemap index (múltiples archivos sitemap).
- Enviar el sitemap manualmente en Google Search Console tras el lanzamiento.

## Checklist rápido
- [ ] ¿El sitemap se genera dinámicamente, no a mano?
- [ ] ¿Solo contiene URLs indexables y canónicas?
- [ ] ¿Está referenciado en `robots.txt` y enviado a Search Console?
