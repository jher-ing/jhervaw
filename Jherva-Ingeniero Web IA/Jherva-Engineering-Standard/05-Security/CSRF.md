# Cross-Site Request Forgery (CSRF)

## Principio general
CSRF engaña al navegador del usuario autenticado para que ejecute una acción no deseada en un sitio donde ya tiene sesión activa (ej. un formulario oculto en otro sitio que envía un POST a nuestra API).

## Mitigaciones

1. **`SameSite=Lax` o `Strict` en cookies de sesión** — previene que la cookie se envíe en requests cross-site en la mayoría de casos.
2. **Tokens CSRF** en formularios/mutaciones críticas cuando se usa autenticación basada en cookies (patrón "double submit cookie" o token sincronizado del lado del servidor).
3. **Verificar el header `Origin`/`Referer`** en mutaciones sensibles del lado del servidor.
4. **Server Actions de Next.js** incluyen protección CSRF nativa — preferirlas sobre endpoints REST custom para mutaciones desde formularios.
5. **Nunca usar `GET` para acciones que modifican estado** (eliminar, actualizar) — GET debe ser siempre idempotente y sin efectos secundarios.

## Ejemplo correcto vs incorrecto
```
✅ POST /api/account/delete  (con verificación de sesión + CSRF token)
❌ GET /api/account/delete?id=123  (ejecutable con solo un link/imagen maliciosa)
```

## Checklist rápido
- [ ] ¿Las cookies de sesión usan `SameSite=Lax` o `Strict`?
- [ ] ¿Ninguna acción que modifica estado usa el método `GET`?
- [ ] ¿Las mutaciones críticas verifican origen/token CSRF?
