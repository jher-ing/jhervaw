# Autenticación

## Principio general
Nunca implementar autenticación "casera" desde cero para producción. Usar librerías/proveedores probados (NextAuth/Auth.js, Clerk, Supabase Auth) salvo justificación técnica fuerte.

## Reglas fundamentales

1. **Contraseñas nunca en texto plano**: hash con `bcrypt` o `argon2` (nunca MD5/SHA1 sin salt).
2. **Rate limiting en login** para prevenir fuerza bruta (ver `Rate-Limit.md`).
3. **Sesiones seguras**: cookies `httpOnly`, `secure`, `sameSite=lax` o `strict`. Nunca tokens de sesión en `localStorage` (vulnerable a XSS).
4. **Tokens con expiración corta** + refresh tokens para sesiones largas.
5. **2FA disponible** al menos como opción en cuentas con datos sensibles o permisos administrativos.
6. **Mensajes de error genéricos** en login: "Credenciales inválidas", nunca "El usuario no existe" (evita enumeración de usuarios).
7. **Verificación de email obligatoria** antes de otorgar acceso completo a la cuenta.
8. **Logout invalida la sesión del lado del servidor**, no solo borra el token del cliente.

## Ejemplo de cookie segura
```
Set-Cookie: session=xyz; HttpOnly; Secure; SameSite=Lax; Path=/; Max-Age=3600
```

## Checklist rápido
- [ ] ¿Las contraseñas se hashean con bcrypt/argon2?
- [ ] ¿Las sesiones usan cookies `httpOnly` + `secure`, no `localStorage`?
- [ ] ¿Existe rate limiting en el endpoint de login?
- [ ] ¿Los mensajes de error no revelan si un usuario existe o no?
