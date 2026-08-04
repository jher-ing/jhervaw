# Content Security Policy (CSP)

## Principio general
CSP restringe desde qué orígenes puede el navegador cargar y ejecutar recursos (scripts, estilos, imágenes), reduciendo drásticamente el impacto de un ataque XSS exitoso.

## Ejemplo de política base
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{RANDOM}' https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:;
  connect-src 'self' https://api.ejemplo.com;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
```

## Reglas
- Evitar `unsafe-inline` y `unsafe-eval` en `script-src` siempre que sea posible — usar nonces o hashes para scripts inline necesarios.
- `frame-ancestors 'none'` previene clickjacking (reemplaza a `X-Frame-Options` de forma más flexible).
- Cada dominio externo (analytics, fuentes, CDN de pagos) debe agregarse explícitamente — CSP es allowlist, no blocklist.
- Empezar en modo `Content-Security-Policy-Report-Only` para detectar violaciones sin romper el sitio, luego pasar a modo enforcement.

## Checklist rápido
- [ ] ¿Se evita `unsafe-inline`/`unsafe-eval` en `script-src`?
- [ ] ¿Todos los orígenes externos usados están explícitamente permitidos?
- [ ] ¿Se probó en modo report-only antes de aplicar en producción?
