# Rate Limiting

## Principio general
Todo endpoint público, especialmente los de autenticación y los que consumen recursos costosos (envío de emails, IA, pagos), debe tener límite de solicitudes por IP/usuario/tiempo.

## Endpoints que requieren rate limiting obligatorio
- Login / registro / recuperación de contraseña.
- Envío de formularios de contacto.
- Endpoints que llaman a APIs de IA (costo por request).
- Endpoints de búsqueda o exportación de datos masivos.
- Webhooks públicos.

## Estrategias
- **Fixed window / Sliding window**: N requests por minuto/hora por IP o usuario.
- **Token bucket**: permite ráfagas cortas controladas manteniendo un promedio sostenible.
- Implementación recomendada: middleware en el edge (Vercel Edge Middleware, Cloudflare) o librería (`@upstash/ratelimit` con Redis).

## Ejemplo (Upstash Ratelimit)
```ts
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '1 m'), // 5 requests por minuto
});

const { success } = await ratelimit.limit(ip);
if (!success) return new Response('Too many requests', { status: 429 });
```

## Reglas
- Responder siempre `429 Too Many Requests` con header `Retry-After`.
- Rate limit diferenciado: más estricto en login (prevenir fuerza bruta) que en navegación normal.
- Combinar rate limiting por IP y por usuario/cuenta cuando aplique (un atacante puede rotar IPs pero no cuentas fácilmente).

## Checklist rápido
- [ ] ¿Los endpoints de autenticación tienen rate limiting?
- [ ] ¿Los endpoints costosos (IA, emails, pagos) están protegidos?
- [ ] ¿Se responde `429` con `Retry-After` cuando se excede el límite?
