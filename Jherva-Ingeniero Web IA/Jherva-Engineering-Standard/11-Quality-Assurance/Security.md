# Seguridad en QA

## Principio general
La seguridad se valida en cada PR que toque autenticación, autorización, manejo de datos de usuario o integración con servicios externos — no se asume "seguro por defecto".

## Proceso de QA de seguridad por PR sensible
1. ¿El endpoint/acción valida autorización en el servidor, no solo en la UI? (ver `05-Security/Authorization.md`)
2. ¿Algún input de usuario se usa en queries, HTML renderizado o comandos sin sanitizar? (ver `SQL-Injection.md`, `XSS.md`)
3. ¿Se introdujo algún secreto/credencial en el código o logs? (ver `Secrets.md`)
4. ¿El endpoint nuevo tiene rate limiting si es público y sensible? (ver `Rate-Limit.md`)
5. `npm audit` sin vulnerabilidades críticas nuevas introducidas por dependencias agregadas en el PR.

## Checklist rápido
- [ ] ¿Se validó autorización server-side en toda acción sensible del PR?
- [ ] ¿No hay input de usuario sin sanitizar en queries/HTML/comandos?
- [ ] ¿No se introdujeron secretos en el código?

Ver checklist completo en `05-Security/OWASP.md`.
