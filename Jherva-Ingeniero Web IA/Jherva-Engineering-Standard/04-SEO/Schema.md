# Schema Markup (Datos Estructurados)

## Principio general
El schema (JSON-LD) le da contexto explícito a los motores de búsqueda sobre qué es el contenido, habilitando rich results (estrellas, FAQs, breadcrumbs en SERP).

## Formato recomendado: JSON-LD
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jherva",
  "url": "https://ejemplo.com",
  "telephone": "+57...",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bogotá",
    "addressCountry": "CO"
  }
}
</script>
```

## Tipos de schema comunes por caso de uso
| Página | Schema recomendado |
|---|---|
| Negocio local | `LocalBusiness` |
| Artículo de blog | `Article` / `BlogPosting` |
| Producto/servicio | `Product` / `Service` |
| Preguntas frecuentes | `FAQPage` |
| Reseñas/testimonios | `Review` / `AggregateRating` |
| Navegación jerárquica | `BreadcrumbList` |
| Organización | `Organization` |

## Reglas
- El schema debe reflejar contenido **realmente visible** en la página — nunca datos falsos o no verificables (Google penaliza structured data spam).
- Validar siempre con Rich Results Test de Google antes de publicar.
- Un mismo tipo de schema no se repite innecesariamente en la misma página.

## Checklist rápido
- [ ] ¿El schema usado corresponde al tipo real de contenido?
- [ ] ¿Se validó con la herramienta de Rich Results de Google?
- [ ] ¿Todos los datos del schema son verificables y visibles en la página?
