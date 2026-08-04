# Tamaño de Bundle

## Principio general
Cada KB de JavaScript enviado al cliente tiene un costo real en tiempo de descarga, parseo y ejecución — especialmente en mobile. El bundle se audita, no se asume.

## Presupuesto de referencia (por página, gzip)
| Tipo | Presupuesto |
|---|---|
| JS inicial (First Load JS) | < 150KB |
| CSS inicial | < 50KB |
| Total de página (incluyendo imágenes above-the-fold) | < 1MB |

## Cómo auditar
```bash
npx @next/bundle-analyzer
# o
npx next build && npx next-bundle-analysis
```

## Reglas para reducir bundle

1. **Code splitting por ruta** — Next.js lo hace automáticamente; verificar que no se esté importando todo en un layout compartido innecesariamente.
2. **Dynamic imports** para librerías pesadas usadas en pocas rutas (editores, gráficos, mapas) — ver `LazyLoading.md`.
3. **Evitar librerías completas cuando se usa una función**: `import { debounce } from 'lodash-es'` en vez de `import _ from 'lodash'`.
4. **Tree-shaking**: verificar que las librerías usadas soporten ESM/tree-shaking (revisar si el bundle incluye código muerto).
5. **Revisar dependencias antes de instalar**: ¿realmente se necesita una librería de 200KB para una función que se puede escribir en 20 líneas?

## Checklist rápido
- [ ] ¿El First Load JS está dentro del presupuesto (<150KB)?
- [ ] ¿Se auditó el bundle con bundle-analyzer antes de lanzar?
- [ ] ¿Las librerías pesadas usadas en pocas rutas están code-split?
