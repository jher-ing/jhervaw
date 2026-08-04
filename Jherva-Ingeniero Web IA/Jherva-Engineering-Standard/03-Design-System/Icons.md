# Iconografía

## Principio general
Un solo set de iconos consistente en todo el proyecto (mismo estilo: outline o filled, mismo grosor de trazo). Nunca mezclar librerías de iconos.

## Librería de referencia
`lucide-react` como default para proyectos React/Next.js — set consistente, ligero y con buena cobertura.

## Reglas
- Tamaños estándar: 16px (inline con texto pequeño), 20px (default en UI), 24px (botones/acciones principales), 32px+ (ilustrativo/destacado).
- Los iconos decorativos llevan `aria-hidden="true"`.
- Los iconos funcionales sin texto visible (ej. botón de solo ícono) requieren `aria-label` descriptivo.
- Color del ícono hereda o usa tokens semánticos (`currentColor` o `--color-text-secondary`), nunca hex hardcodeado.
- Nunca usar un ícono ambiguo para una acción crítica sin label de apoyo (ej. un ícono de "papelera" para eliminar debe ir acompañado de confirmación, no solo el ícono solo).

## Ejemplo
```tsx
<button aria-label="Eliminar producto">
  <Trash2 size={20} aria-hidden="true" />
</button>
```

## Checklist rápido
- [ ] ¿Se usa un solo set de iconos en todo el proyecto?
- [ ] ¿Los iconos funcionales sin texto tienen `aria-label`?
- [ ] ¿Los tamaños siguen la escala estándar (16/20/24/32px)?
