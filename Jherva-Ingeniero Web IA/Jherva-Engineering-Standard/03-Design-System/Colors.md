# Colores

## Principio general
Los colores se definen como **tokens semánticos**, nunca como valores hex directos en componentes. Esto permite dark mode y rebrandeos sin tocar código de componentes.

## Estructura de tokens

```css
:root {
  /* Primitivos (paleta base) */
  --blue-500: #2563eb;
  --gray-50: #f9fafb;
  --gray-900: #111827;
  --red-500: #ef4444;
  --green-500: #22c55e;

  /* Semánticos (lo que se usa en componentes) */
  --color-primary: var(--blue-500);
  --color-background: var(--gray-50);
  --color-text-primary: var(--gray-900);
  --color-danger: var(--red-500);
  --color-success: var(--green-500);
}

[data-theme="dark"] {
  --color-background: var(--gray-900);
  --color-text-primary: var(--gray-50);
}
```

## Paleta funcional mínima
| Token | Uso |
|---|---|
| `--color-primary` | Acciones principales, CTA |
| `--color-secondary` | Acciones secundarias |
| `--color-background` | Fondo base |
| `--color-surface` | Fondos de tarjetas/paneles |
| `--color-text-primary` | Texto principal |
| `--color-text-secondary` | Texto secundario/muted |
| `--color-border` | Bordes y separadores |
| `--color-success` / `--color-warning` / `--color-danger` | Estados de feedback |

## Reglas
- Nunca usar hex directo en un componente (`color: #2563eb` ❌) — siempre el token semántico.
- Contraste mínimo AA (4.5:1 para texto normal) — ver `08-Accessibility/Contrast.md`.
- Máximo 1 color primario + 1 secundario + escala de grises + colores de estado.

## Checklist rápido
- [ ] ¿Todos los colores usados provienen de tokens definidos?
- [ ] ¿El modo oscuro funciona solo cambiando tokens, sin tocar componentes?
- [ ] ¿Se validó contraste AA en combinaciones texto/fondo?
