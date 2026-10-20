"use client";

import { useEffect } from "react";

/*
 * Último recurso: se muestra solo si falla el layout raíz. Next no aplica aquí los estilos globales,
 * así que lleva los suyos (claro y oscuro según el sistema). Reintentar: `retry` en Next 16.3,
 * `unstable_retry` en versiones anteriores; `reset` como respaldo.
 */
export default function GlobalError({
  error,
  retry,
  unstable_retry,
  reset,
}: {
  error: Error & { digest?: string };
  retry?: () => void;
  unstable_retry?: () => void;
  reset?: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  const reintentar = retry ?? unstable_retry ?? reset;

  return (
    <html lang="es-CO">
      <body>
        <title>Algo salió mal · Jherva</title>
        <style>{`
          :root { color-scheme: light dark; --fondo: #fafaf9; --texto: #1c1917; --suave: #57534e; --borde: #e7e5e4; --acento: #4f46e5; }
          @media (prefers-color-scheme: dark) { :root { --fondo: #0c0a09; --texto: #fafaf9; --suave: #a8a29e; --borde: #292524; } }
          * { box-sizing: border-box; }
          body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 16px; background: var(--fondo); color: var(--texto);
                 font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; }
          .caja { width: 100%; max-width: 420px; text-align: center; border: 1px solid var(--borde); border-radius: 16px; padding: 40px 24px; }
          .marca { font-size: 12px; font-weight: 800; letter-spacing: .25em; color: var(--acento); margin: 0; }
          h1 { font-size: 20px; margin: 16px 0 8px; }
          p { color: var(--suave); line-height: 1.5; margin: 0; }
          .acciones { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; margin-top: 24px; }
          button, a { font: inherit; font-weight: 600; font-size: 15px; min-height: 44px; padding: 0 20px; border-radius: 12px; cursor: pointer;
                      display: inline-flex; align-items: center; text-decoration: none; }
          button { border: 0; background: var(--acento); color: #fff; }
          a { border: 1px solid var(--borde); color: var(--texto); }
          button:focus-visible, a:focus-visible { outline: 2px solid var(--acento); outline-offset: 2px; }
          .codigo { font-size: 12px; margin-top: 24px; }
        `}</style>
        <main className="caja">
          <div role="alert">
          <p className="marca">JHERVA</p>
          <h1>Algo salió mal</h1>
          <p>No pudimos cargar Jherva. Revisa tu conexión e intenta de nuevo en un momento.</p>
          <div className="acciones">
            {reintentar && (
              <button type="button" onClick={() => reintentar()}>
                Intentar de nuevo
              </button>
            )}
            {/* enlace completo a propósito: recarga la app entera en vez de navegar dentro del layout roto */}
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a href="/">Ir al inicio</a>
          </div>
          {error.digest && <p className="codigo">Código para soporte: {error.digest}</p>}
          </div>
        </main>
      </body>
    </html>
  );
}
