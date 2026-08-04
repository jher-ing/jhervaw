# Espaciado

## Principio general
Escala de espaciado basada en múltiplos de 4px. Ningún valor de margin/padding fuera de la escala.

## Escala estándar
```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-5: 20px;
--space-6: 24px;
--space-8: 32px;
--space-10: 40px;
--space-12: 48px;
--space-16: 64px;
--space-20: 80px;
--space-24: 96px;
```

## Uso recomendado
| Contexto | Espaciado |
|---|---|
| Entre elementos de un mismo grupo (ej. label + input) | `--space-2` |
| Entre campos de un formulario | `--space-4` |
| Padding interno de cards | `--space-4` a `--space-6` |
| Entre secciones de una página | `--space-16` a `--space-24` |
| Padding lateral en mobile | `--space-4` |
| Padding lateral en desktop | `--space-8` a `--space-16` |

## Reglas
- Nunca usar valores arbitrarios (`margin: 13px`, `padding: 22px`) — siempre snap a la escala.
- Con Tailwind, usar la escala default (`p-4`, `gap-6`) que ya sigue múltiplos de 4px; evitar `p-[13px]` arbitrario salvo excepción justificada.

## Checklist rápido
- [ ] ¿Todos los espaciados usados están en la escala definida?
- [ ] ¿Hay valores arbitrarios (`px-[17px]`) sin justificación documentada?
