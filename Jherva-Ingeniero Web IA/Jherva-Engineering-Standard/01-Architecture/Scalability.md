# Escalabilidad

## Principio general
Diseñar para el crecimiento esperado (no el hipotético). Optimización prematura es tan riesgosa como no planear en absoluto.

## Escalabilidad de código
- Módulos desacoplados: una feature se puede modificar sin romper otra.
- Server Components / SSR para reducir carga en cliente cuando no se necesita interactividad.
- Paginación y carga incremental en cualquier listado que pueda crecer sin límite.

## Escalabilidad de datos
- Índices en columnas usadas en `WHERE`, `JOIN` y `ORDER BY`.
- Evitar N+1 queries — usar `include`/`join` explícitos o dataloaders.
- Cache de lecturas frecuentes y poco cambiantes (Redis, `revalidate` de Next.js).

## Escalabilidad de infraestructura
- Stateless por defecto: cualquier instancia del servidor debe poder atender cualquier request (sesión en DB/Redis, no en memoria local).
- Variables de entorno para todo lo que cambia entre ambientes — nunca hardcodear.
- Colas (queue) para trabajo pesado o asíncrono (envío de emails masivos, procesamiento de imágenes) en vez de bloquear el request.

## Señales de alerta (cuándo revisar escalabilidad)
- Un endpoint tarda más de 500ms en p95.
- Una tabla supera el millón de filas sin índices revisados.
- Un mismo cálculo se repite en cada request en vez de cachearse.

## Checklist rápido
- [ ] ¿El sistema funciona igual con 10 usuarios que con 10,000 (en términos de arquitectura, no de hardware)?
- [ ] ¿Hay algún estado guardado en memoria del servidor que rompería con múltiples instancias?
- [ ] ¿Los listados grandes están paginados?
- [ ] ¿Las queries N+1 fueron revisadas?
