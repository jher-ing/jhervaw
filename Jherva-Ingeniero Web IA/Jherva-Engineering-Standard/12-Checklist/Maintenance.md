# Checklist: Mantenimiento Continuo

## Semanal
- [ ] Revisar alertas de errores y disponibilidad (Sentry, uptime monitor).
- [ ] Revisar métricas de conversión — ¿algo cambió respecto a la semana anterior?

## Quincenal
- [ ] Revisar y aplicar actualizaciones de dependencias no-breaking.
- [ ] Revisar `npm audit` / Dependabot por vulnerabilidades nuevas.

## Mensual
- [ ] Correr Lighthouse y comparar contra baseline (ver `06-Performance/Lighthouse.md`).
- [ ] Revisar Search Console: errores de indexación, cambios de tráfico/posiciones.
- [ ] Revisar y actualizar contenido desactualizado (precios, testimonios, información de contacto).

## Trimestral
- [ ] Auditoría de seguridad completa (accesos, permisos, dependencias) — ver `05-Security/OWASP.md`.
- [ ] Revisión de deuda técnica acumulada y priorización.
- [ ] Revisión de accesibilidad completa (ver `08-Accessibility/Accessibility-Checklist.md`).

## Anual
- [ ] Evaluación de actualización de versiones mayores del stack (framework, librerías core).
- [ ] Revisión general de arquitectura — ¿sigue siendo adecuada para la escala actual del proyecto?

Ver contexto completo en `10-Deployment/Maintenance.md`.
