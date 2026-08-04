# Optimización de Fuentes

## Principio general
Las fuentes web mal cargadas causan FOIT (texto invisible) o FOUT (salto de layout al cargar) y bloquean el render. Se optimizan con self-hosting y preload.

## Reglas

1. **Self-host las fuentes** en vez de cargar desde Google Fonts CDN externo — elimina un round-trip de DNS/conexión externa. `next/font` lo hace automáticamente.
```tsx
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], display: 'swap' });
```
2. **`font-display: swap`** siempre — muestra texto con fuente de sistema mientras carga la fuente custom, evitando FOIT.
3. **Preload de la fuente principal** usada above-the-fold.
4. **Subconjuntos (`subsets`)**: cargar solo los caracteres/idiomas necesarios (ej. `latin`), no el set completo de la fuente.
5. **Máximo 2 familias tipográficas** con 2-3 pesos cada una — cada peso adicional es un archivo extra a descargar.
6. **Formato WOFF2** como estándar — mejor compresión que WOFF/TTF.

## Checklist rápido
- [ ] ¿Las fuentes son self-hosted (`next/font` o equivalente)?
- [ ] ¿Se usa `font-display: swap`?
- [ ] ¿Se cargan solo los subsets/pesos realmente usados?
