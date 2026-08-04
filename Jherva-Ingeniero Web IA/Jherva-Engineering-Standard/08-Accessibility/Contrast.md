# Contraste de Color

## Principio general
El texto debe ser legible para usuarios con baja visión o daltonismo. El contraste se valida con ratios numéricos, no "a ojo".

## Umbrales WCAG AA
| Tipo de contenido | Ratio mínimo |
|---|---|
| Texto normal (< 18px o < 14px bold) | 4.5:1 |
| Texto grande (≥ 18px o ≥ 14px bold) | 3:1 |
| Elementos de UI (bordes de inputs, iconos funcionales) | 3:1 |

## Cómo validar
- Herramienta: WebAIM Contrast Checker, o el inspector de Chrome DevTools (muestra el ratio al inspeccionar un elemento de texto).
- Validar cada combinación texto/fondo del sistema de diseño una sola vez a nivel de tokens (`03-Design-System/Colors.md`), no cada instancia individual.

## Reglas
- Nunca comunicar información **solo** con color (ej. rojo = error) — combinar con ícono o texto, para usuarios con daltonismo.
- Placeholder text en inputs frecuentemente falla contraste — no usar placeholder como único medio de instrucción (ver `02-UI-UX/Forms.md`).
- Validar contraste también en dark mode — no asumir que "si funciona en claro, funciona en oscuro".

## Checklist rápido
- [ ] ¿Todas las combinaciones texto/fondo del sistema de diseño cumplen 4.5:1 (o 3:1 en texto grande)?
- [ ] ¿La información de estado (error/éxito/warning) no depende solo del color?
- [ ] ¿Se validó contraste en ambos modos (claro y oscuro)?
