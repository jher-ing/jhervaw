# Autorización

## Principio general
Autenticación responde "¿quién eres?"; autorización responde "¿qué puedes hacer?". Toda acción sensible se valida en el **servidor**, nunca solo en el cliente.

## Reglas fundamentales

1. **Nunca confiar en el cliente**: ocultar un botón en la UI no es control de acceso — el endpoint debe validar permisos igual.
2. **Principio de mínimo privilegio**: cada rol/usuario tiene solo los permisos estrictamente necesarios.
3. **Validación a nivel de recurso**, no solo de ruta: un usuario autenticado que accede a `/api/orders/123` debe verificarse como dueño de esa orden específica, no solo estar logueado.
4. **RBAC (Role-Based Access Control)** como patrón por defecto para permisos: `admin`, `editor`, `viewer`, etc.
5. **IDOR (Insecure Direct Object Reference)**: nunca exponer IDs secuenciales sin validar ownership — usar UUIDs y siempre verificar pertenencia del recurso al usuario.

## Ejemplo correcto
```ts
// ✅ Verifica ownership en el servidor
const order = await getOrder(orderId);
if (order.userId !== session.user.id) {
  throw new ForbiddenError();
}
```

## Ejemplo incorrecto
```ts
// ❌ Solo verifica que hay sesión, no que el usuario sea dueño del recurso
if (!session) throw new UnauthorizedError();
const order = await getOrder(orderId); // cualquier usuario logueado puede ver cualquier orden
```

## Checklist rápido
- [ ] ¿Cada endpoint valida permisos en el servidor, no solo en la UI?
- [ ] ¿Se verifica ownership del recurso, no solo autenticación genérica?
- [ ] ¿Los roles siguen el principio de mínimo privilegio?
