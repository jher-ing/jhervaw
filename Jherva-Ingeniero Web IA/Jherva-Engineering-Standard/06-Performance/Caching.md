# Estrategias de Cache

## Principio general
Cachear todo lo que no cambia en cada request, invalidar solo lo que realmente cambió. Reduce carga en servidor/DB y mejora tiempos de respuesta drásticamente.

## Niveles de cache

1. **CDN / Edge cache**: assets estáticos (imágenes, JS, CSS) con `Cache-Control: public, max-age=31536000, immutable` (usando hashing de nombre de archivo para invalidación).
2. **Cache de página (ISR/SSG)**: en Next.js, `revalidate` para contenido que cambia poco (blog, páginas de marketing).
```ts
export const revalidate = 3600; // revalida cada hora
```
3. **Cache de datos (Redis)**: resultados de queries costosas o llamadas a APIs externas con TTL apropiado.
4. **Cache del navegador**: headers correctos para que el navegador no vuelva a pedir lo que ya tiene.

## Reglas
- Contenido de usuario autenticado/personalizado: `Cache-Control: private, no-store` o cache muy específico por usuario — nunca cachear datos sensibles en CDN pública.
- Invalidación explícita (`revalidatePath`, `revalidateTag` en Next.js) al mutar datos, en vez de esperar el TTL.
- Cache-busting con hash en nombre de archivo para assets estáticos (`app.a1b2c3.js`), permitiendo `max-age` agresivo sin riesgo de servir versión vieja.

## Checklist rápido
- [ ] ¿Los assets estáticos tienen cache agresivo con cache-busting por hash?
- [ ] ¿El contenido semi-estático usa ISR/revalidate en vez de renderizar en cada request?
- [ ] ¿Los datos privados/personalizados nunca se cachean en CDN pública?
