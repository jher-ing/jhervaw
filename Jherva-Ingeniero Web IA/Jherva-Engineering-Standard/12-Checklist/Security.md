# Checklist: Seguridad (Pre-Lanzamiento)

- [ ] HTTPS activo en todo el sitio, sin contenido mixto.
- [ ] Security headers configurados (HSTS, X-Frame-Options, CSP, etc.) — ver `05-Security/Headers.md`.
- [ ] Contraseñas hasheadas con bcrypt/argon2, nunca en texto plano.
- [ ] Sesiones en cookies `httpOnly` + `secure`, nunca en `localStorage`.
- [ ] Autorización validada en servidor en toda acción sensible, con verificación de ownership de recursos.
- [ ] Sin queries SQL construidas por concatenación de strings.
- [ ] Rate limiting activo en login, formularios públicos y endpoints costosos.
- [ ] Sin secretos hardcodeados ni commiteados al repositorio.
- [ ] `npm audit` sin vulnerabilidades críticas sin resolver.
- [ ] Revisión contra OWASP Top 10 completada (ver `05-Security/OWASP.md`).

Checklist completo en `05-Security/Security-Checklist.md`.
