# Checklist: Lanzamiento

## Antes de publicar
- [ ] Todos los checklists anteriores (`Design`, `Development`, `SEO`, `Security`, `Performance`, `QA`) completados.
- [ ] Dominio configurado correctamente (DNS, SSL activo y válido).
- [ ] Variables de entorno de producción verificadas y completas.
- [ ] Backups de base de datos configurados (si aplica) antes del go-live.
- [ ] Monitoreo y alertas activos (ver `10-Deployment/Monitoring.md`).

## Día del lanzamiento
- [ ] Deploy final verificado en preview antes de promover a producción.
- [ ] Sitemap enviado a Google Search Console / Bing Webmaster Tools.
- [ ] Analítica (GA4 u otra) verificada con eventos de conversión funcionando.
- [ ] Prueba de humo (smoke test) en producción real: flujo principal completo, formularios, pagos si aplica.

## Después del lanzamiento
- [ ] Monitorear error rate y performance las primeras 24-48h activamente.
- [ ] Confirmar indexación inicial en Search Console tras unos días.
- [ ] Recopilar feedback temprano de usuarios reales/stakeholders.
- [ ] Documentar cualquier incidencia del lanzamiento y su resolución.
