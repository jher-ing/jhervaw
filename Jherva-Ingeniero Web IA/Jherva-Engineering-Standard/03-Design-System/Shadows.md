# Sombras

## Principio general
Las sombras comunican elevación/jerarquía (qué está "más cerca" del usuario), no son decoración aleatoria.

## Escala estándar
```css
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.08), 0 4px 6px rgba(0,0,0,0.05);
--shadow-xl: 0 20px 25px rgba(0,0,0,0.1), 0 8px 10px rgba(0,0,0,0.06);
```

## Uso recomendado
| Elemento | Sombra |
|---|---|
| Card en reposo | `--shadow-sm` |
| Card en hover (si es clicable) | `--shadow-md` |
| Dropdown / Popover | `--shadow-lg` |
| Modal / Dialog | `--shadow-xl` |
| Botones (opcional, sutil) | `--shadow-sm` o ninguna |

## Reglas
- Elementos más "elevados" (modales, dropdowns) usan sombras más pronunciadas.
- En dark mode, las sombras se reducen o se reemplazan por bordes sutiles (`--color-border`), ya que las sombras oscuras no se perciben igual sobre fondos oscuros.
- No combinar más de 2 niveles de sombra distintos en una misma vista sin razón.

## Checklist rápido
- [ ] ¿La intensidad de la sombra refleja correctamente la jerarquía de elevación?
- [ ] ¿Se ajustan las sombras (o se reemplazan por bordes) en dark mode?
