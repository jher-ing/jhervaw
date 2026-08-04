# Security Headers

## Principio general
Los headers HTTP de seguridad son la primera línea de defensa del navegador contra ataques comunes (XSS, clickjacking, MIME sniffing). Se configuran a nivel de servidor/edge, no dependen del código de la aplicación.

## Headers obligatorios

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=(self)
Content-Security-Policy: [ver CSP.md]
```

## Explicación
| Header | Protege contra |
|---|---|
| `Strict-Transport-Security` | Downgrade a HTTP, ataques de red |
| `X-Content-Type-Options` | MIME sniffing (ejecución de archivos como script) |
| `X-Frame-Options` | Clickjacking (embebido en iframe malicioso) |
| `Referrer-Policy` | Fuga de datos sensibles en la URL vía referrer |
| `Permissions-Policy` | Acceso no autorizado a APIs del navegador (cámara, micrófono, ubicación) |

## Implementación en Next.js
```js
// next.config.js
module.exports = {
  async headers() {
    return [{
      source: '/:path*',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    }];
  },
};
```

## Checklist rápido
- [ ] ¿Se validaron los headers con una herramienta (securityheaders.com)?
- [ ] ¿HSTS está activo con `includeSubDomains`?
- [ ] ¿`X-Frame-Options` o CSP `frame-ancestors` previene clickjacking?
