# OWASP Top 10 — Referencia Rápida

## Principio general
El OWASP Top 10 es la lista de referencia de los riesgos de seguridad más críticos en aplicaciones web. Cada proyecto debe revisarse contra esta lista antes de lanzar.

## Top 10 (2021) y dónde se cubre en este estándar

| # | Riesgo | Documento relacionado |
|---|---|---|
| A01 | Broken Access Control | `Authorization.md` |
| A02 | Cryptographic Failures | `Secrets.md`, `Authentication.md` |
| A03 | Injection (SQL, NoSQL, comandos) | `SQL-Injection.md` |
| A04 | Insecure Design | `01-Architecture/`, este documento |
| A05 | Security Misconfiguration | `Headers.md`, `CSP.md` |
| A06 | Vulnerable and Outdated Components | `Dependency-Security.md` |
| A07 | Identification and Authentication Failures | `Authentication.md` |
| A08 | Software and Data Integrity Failures | `10-Deployment/CI-CD.md` (firmas, verificación de builds) |
| A09 | Security Logging and Monitoring Failures | `10-Deployment/Monitoring.md`, `Incident-Response.md` |
| A10 | Server-Side Request Forgery (SSRF) | `API-Security.md` — validar y allowlistear URLs externas antes de hacer fetch server-side |

## Cobertura adicional en este estándar
Más allá del Top 10 clásico, este estándar cubre riesgos igual de relevantes en proyectos reales de cliente:
- Seguridad de APIs y validación de input → `API-Security.md`
- Carga de archivos de usuarios → `File-Upload-Security.md`
- Privacidad y protección de datos personales → `Data-Privacy.md`
- Plan de respuesta ante un incidente ya ocurrido → `Incident-Response.md`

Ver el checklist consolidado en `Security-Checklist.md` antes de cada lanzamiento.

## Prácticas transversales
- Dependencias actualizadas — revisar `npm audit` / Dependabot alerts regularmente, no ignorarlas.
- Nunca hacer fetch server-side a una URL controlada por el usuario sin validarla contra una allowlist (previene SSRF).
- Logging de eventos de seguridad (logins fallidos, cambios de permisos) sin loggear datos sensibles (ver `Secrets.md`).

## Checklist rápido
- [ ] ¿Se revisó el proyecto contra los 10 riesgos antes del lanzamiento?
- [ ] ¿Las dependencias están actualizadas y sin vulnerabilidades conocidas críticas?
- [ ] ¿Existe logging de eventos de seguridad relevantes?
