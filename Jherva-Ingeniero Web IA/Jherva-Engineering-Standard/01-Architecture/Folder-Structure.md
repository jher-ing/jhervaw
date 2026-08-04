# Estructura de Carpetas

## Principio general
La estructura de carpetas debe reflejar la arquitectura, no el tipo de archivo. Se organiza por **feature/dominio**, no por tipo técnico disperso.

## Estructura estándar (Next.js App Router)

```
src/
├── app/                    # Rutas (App Router) — solo composición de página
│   ├── (marketing)/
│   ├── (dashboard)/
│   └── api/
├── components/
│   ├── ui/                 # Componentes atómicos reutilizables (Button, Card, Input)
│   └── features/           # Componentes específicos de una feature
├── use-cases/               # Lógica de negocio por caso de uso
├── domain/                  # Entidades y tipos de dominio
├── repositories/             # Acceso a datos (DB, APIs externas)
├── lib/                     # Utilidades genéricas (helpers, formatters)
├── hooks/                    # Custom React hooks
├── config/                   # Configuración (env, constantes)
├── styles/                   # Tokens globales, globals.css
└── types/                    # Tipos compartidos
```

## Reglas
- Un componente vive junto a sus estilos y tests si son específicos de él (`Button/Button.tsx`, `Button/Button.test.tsx`).
- `lib/` es solo para funciones puras sin estado ni dependencias de negocio.
- Nada en `components/ui` debe importar de `use-cases/` o `repositories/`.
- Máximo 3 niveles de anidamiento antes de considerar dividir en un módulo propio.

## Checklist rápido
- [ ] ¿Puedo encontrar todo lo relacionado a una feature en un solo lugar?
- [ ] ¿`components/ui` es 100% agnóstico de negocio?
- [ ] ¿La carpeta `app/` solo compone páginas, sin lógica pesada?
