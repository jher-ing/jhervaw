# Checklist General de Seguridad

## Autenticación y autorización
- [ ] Contraseñas hasheadas con bcrypt/argon2 — nunca texto plano ni hash reversible.
- [ ] Sesiones en cookies `httpOnly`, `secure`, `sameSite` — nunca tokens en `localStorage`.
- [ ] Autorización validada en el servidor en toda acción sensible, con verificación de ownership de recursos, no solo autenticación genérica.
- [ ] Rate limiting activo en login, registro y recuperación de contraseña.

## Headers y transporte
- [ ] HTTPS activo en todo el sitio, sin contenido mixto.
- [ ] Security headers configurados: HSTS, X-Content-Type-Options, X-Frame-Options/frame-ancestors, Referrer-Policy.
- [ ] CSP configurada, evitando `unsafe-inline`/`unsafe-eval` cuando sea posible.

## Datos e input
- [ ] Ninguna query construida por concatenación de strings — siempre parametrizada u ORM.
- [ ] Todo input de usuario validado con esquema explícito en el servidor (`API-Security.md`).
- [ ] `dangerouslySetInnerHTML` (o equivalente) solo con contenido sanitizado.
- [ ] Archivos subidos validados por contenido real, almacenados fuera del dominio principal (`File-Upload-Security.md`).

## Secretos y dependencias
- [ ] Sin secretos hardcodeados ni commiteados al repositorio; `.env*` en `.gitignore` desde el inicio.
- [ ] Escaneo de secretos activo en CI.
- [ ] Lockfile commiteado, `npm audit` sin vulnerabilidades críticas, Dependabot/Renovate activo (`Dependency-Security.md`).

## Privacidad
- [ ] Solo se recolectan los datos estrictamente necesarios.
- [ ] Consentimiento explícito para datos no esenciales (cookies, marketing).
- [ ] Política de privacidad específica del proyecto, no genérica (`Data-Privacy.md`).

## Operación
- [ ] Rate limiting configurado según sensibilidad de cada endpoint.
- [ ] Logging de eventos de seguridad sin loggear datos sensibles.
- [ ] Existe un plan de respuesta a incidentes conocido por el equipo (`Incident-Response.md`).
- [ ] Revisión contra OWASP Top 10 completada antes de lanzar (`OWASP.md`).

## Antes de cada lanzamiento
Correr este checklist completo — no solo la primera vez, en cada release que toque autenticación, datos de usuario, pagos o integraciones externas.
