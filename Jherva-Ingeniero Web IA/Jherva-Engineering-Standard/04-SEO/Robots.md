# Robots.txt

## Principio general
`robots.txt` controla qué rutas pueden rastrear los crawlers — no es un mecanismo de seguridad, es una directiva de rastreo.

## Ejemplo estándar
```
User-agent: *
Allow: /
Disallow: /admin
Disallow: /api
Disallow: /checkout/success

Sitemap: https://ejemplo.com/sitemap.xml
```

## Reglas
- Nunca usar `Disallow` para "ocultar" información sensible — no es seguridad, cualquiera puede leer el archivo. Usar autenticación real para eso.
- No bloquear accidentalmente rutas que sí deben indexarse (error común: bloquear `/` completo en ambientes de staging que luego pasa a producción sin revisión).
- Bloquear rutas duplicadas o de bajo valor SEO: parámetros de búsqueda interna, páginas de checkout, áreas autenticadas.
- Ambientes de staging/preview deben tener `Disallow: /` + `noindex` para no competir con producción en el índice.

## Implementación en Next.js
```ts
// app/robots.ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: ['/admin', '/api'] },
    sitemap: 'https://ejemplo.com/sitemap.xml',
  };
}
```

## Checklist rápido
- [ ] ¿`robots.txt` no bloquea rutas que deberían indexarse?
- [ ] ¿Los ambientes de staging tienen `Disallow: /` + `noindex`?
- [ ] ¿Se referencia el sitemap dentro del archivo?
