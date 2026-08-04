# Seguridad de APIs

## Principio general
Todo endpoint es una superficie de ataque potencial, exista o no documentación pública de él. Se asegura por diseño, no se "protege después" cuando se detecta abuso.

## Reglas fundamentales

1. **Validación de input estricta en el servidor**, siempre — nunca confiar en la validación del cliente como única barrera. Usar un validador de esquema (`zod`, `yup`) en cada endpoint que recibe datos.
```ts
const schema = z.object({
  email: z.string().email(),
  amount: z.number().positive().max(1_000_000),
});
const parsed = schema.safeParse(body);
if (!parsed.success) return new Response('Invalid input', { status: 400 });
```
2. **CORS configurado de forma explícita y restrictiva** — nunca `Access-Control-Allow-Origin: *` en endpoints que manejan datos autenticados/sensibles; allowlist de orígenes conocidos.
3. **Versionado de API** (`/api/v1/...`) para poder evolucionar sin romper integraciones existentes, y poder deprecar versiones inseguras de forma controlada.
4. **Principio de mínima exposición**: un endpoint devuelve solo los campos necesarios — nunca serializar el objeto completo de base de datos (evita fugas accidentales de campos internos/sensibles).
5. **Rate limiting por endpoint según sensibilidad** (ver `Rate-Limit.md`) — no un límite genérico único para toda la API.
6. **Autenticación de servicio a servicio** (webhooks, integraciones internas) vía API keys o firmas HMAC, nunca abiertas sin verificación.
7. **Logging de requests sospechosos** (payloads malformados repetidos, intentos de acceso a recursos ajenos) para detección temprana de abuso.

## Checklist rápido
- [ ] ¿Cada endpoint valida su input con un esquema explícito en el servidor?
- [ ] ¿CORS está restringido a orígenes conocidos en endpoints sensibles?
- [ ] ¿Las respuestas serializan solo los campos necesarios, no el objeto completo de DB?
- [ ] ¿Los webhooks/integraciones verifican firma o API key, no están abiertos?
