# SEO en QA

## Principio general
El SEO técnico se valida como parte del checklist de QA antes de cada lanzamiento de página nueva o cambio de estructura de URLs — un error aquí es silencioso pero costoso (pérdida de tráfico orgánico).

## Proceso de QA de SEO por página/feature nueva
1. Verificar `<title>` y `meta description` únicos y presentes.
2. Verificar un solo `<h1>` y jerarquía de encabezados correcta.
3. Verificar canonical tag correcto.
4. Si es contenido nuevo indexable, confirmar que aparece en el sitemap.
5. Si reemplaza una URL existente, confirmar redirect 301 configurado (nunca 302 para movimientos permanentes).
6. Verificar Open Graph/imagen social configurada.

## Checklist rápido
- [ ] ¿Title, description y canonical están configurados correctamente?
- [ ] ¿Las URLs migradas tienen redirect 301?
- [ ] ¿El contenido nuevo aparece en el sitemap generado?

Ver checklist completo en `04-SEO/SEO-Checklist.md`.
