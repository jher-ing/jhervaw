# Checklist: QA General (Pre-Lanzamiento)

## Funcional
- [ ] Todos los flujos críticos probados manualmente de punta a punta.
- [ ] Formularios validados con casos de error (campos vacíos, formatos inválidos).
- [ ] Probado en los navegadores/dispositivos objetivo del proyecto (Chrome, Safari, mobile iOS/Android como mínimo).

## Automatizado
- [ ] Unit tests de lógica de negocio pasando en CI.
- [ ] Integration tests de endpoints críticos pasando en CI.
- [ ] E2E de flujos de negocio críticos pasando en CI.

## Cross-cutting
- [ ] Accesibilidad validada (ver `08-Accessibility/Accessibility-Checklist.md`).
- [ ] SEO validado (ver `04-SEO/SEO-Checklist.md`).
- [ ] Seguridad validada (ver `12-Checklist/Security.md`).
- [ ] Performance validada (ver `12-Checklist/Performance.md`).

## Contenido
- [ ] Sin texto placeholder (Lorem ipsum) en producción.
- [ ] Enlaces internos y externos verificados, sin 404.
- [ ] Información de contacto/legal actualizada y correcta.
