# Lighthouse

## Principio general
Lighthouse es la herramienta de referencia para auditar performance, accesibilidad, SEO y buenas prácticas. Todo proyecto se audita antes de lanzar y periódicamente después.

## Umbrales objetivo (mínimos para lanzar)
| Categoría | Score mínimo |
|---|---|
| Performance | 90+ |
| Accessibility | 95+ |
| Best Practices | 95+ |
| SEO | 100 |

## Cómo auditar
- Chrome DevTools → pestaña Lighthouse → modo "Mobile" (prioridad) y "Desktop".
- CLI: `npx lighthouse https://ejemplo.com --view` para reportes reproducibles y versionables.
- Integrar en CI (Lighthouse CI) para detectar regresiones de performance antes de mergear a producción.

## Reglas
- Auditar siempre en modo **Mobile** primero — es más estricto y refleja la mayoría del tráfico real.
- Auditar en producción o un ambiente equivalente, no solo en localhost (las condiciones de red y CDN cambian el resultado).
- Un score alto no es el objetivo final — los Core Web Vitals reales de usuarios (ver `Core-Web-Vitals.md`) son la verdad de campo.

## Checklist rápido
- [ ] ¿Performance ≥ 90 en modo mobile antes de lanzar?
- [ ] ¿Se corrió la auditoría contra el ambiente de producción/staging real?
- [ ] ¿Lighthouse CI está configurado para detectar regresiones automáticamente?
