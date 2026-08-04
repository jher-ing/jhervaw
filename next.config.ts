import type { NextConfig } from "next";

/**
 * CSP sin nonces (05-Security/CSP.md permite unsafe-inline "siempre que sea
 * posible" evitarlo, no que sea absoluto): un CSP con nonce obliga a
 * renderizado dinámico en todas las rutas, lo que desactiva SSG/ISR — un
 * trade-off directo contra 06-Performance (SSG preferido, Core Web Vitals).
 * Este sitio no maneja datos sensibles ni autenticación, así que se prioriza
 * el sitio 100% estático y se mantiene el resto del CSP restrictivo
 * (allowlist estricta, sin dominios externos, frame-ancestors 'none').
 */
const isDev = process.env.NODE_ENV === "development";

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""};
  style-src 'self' 'unsafe-inline';
  img-src 'self' blob: data:;
  font-src 'self';
  connect-src 'self';
  object-src 'none';
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
`
  .replace(/\s{2,}/g, " ")
  .trim();

const securityHeaders = [
  { key: "Content-Security-Policy", value: cspHeader },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
