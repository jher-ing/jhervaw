# Botones

## Principio general
Un botón comunica jerarquía por su estilo: qué tan importante es la acción que representa.

## Variantes estándar
| Variante | Uso |
|---|---|
| `primary` | Acción principal de la pantalla (una sola por vista) |
| `secondary` | Acciones alternativas |
| `outline` / `ghost` | Acciones de baja prioridad |
| `destructive` | Acciones irreversibles (eliminar, cancelar suscripción) |
| `link` | Acción que se ve como texto/enlace |

## Tamaños
```
sm: 32px alto — usado en tablas, toolbars
md: 40px alto — default
lg: 48px alto — CTAs principales, hero sections
```

## Estados obligatorios
Default, Hover, Active/Pressed, Focus-visible (outline accesible), Disabled, Loading (con spinner, texto original oculto o reemplazado).

## Reglas
- Texto del botón = verbo de acción claro: "Crear cuenta", no "Enviar" o "OK".
- Nunca deshabilitar sin explicar por qué (tooltip o texto de ayuda cercano).
- Área táctil mínima 44x44px en mobile (ver `Mobile-First.md`).
- Loading state evita doble-click/doble-submit.

## Checklist rápido
- [ ] ¿Existe un solo botón `primary` visible por vista?
- [ ] ¿Todos los estados (hover, focus, disabled, loading) están definidos?
- [ ] ¿El texto es un verbo de acción específico?
