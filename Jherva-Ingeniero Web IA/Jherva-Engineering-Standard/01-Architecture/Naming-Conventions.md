# Convenciones de Nombres

## Archivos y carpetas
| Tipo | Convención | Ejemplo |
|---|---|---|
| Componentes React | PascalCase | `UserCard.tsx` |
| Hooks | camelCase con prefijo `use` | `useAuth.ts` |
| Utilidades/funciones | camelCase | `formatCurrency.ts` |
| Carpetas | kebab-case | `user-profile/` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRIES` |
| Tipos/Interfaces | PascalCase | `UserProfile`, `OrderStatus` |
| Variables de entorno | UPPER_SNAKE_CASE | `DATABASE_URL` |

## Nombres de componentes
- Descriptivos y específicos: `CheckoutSummaryCard`, no `Card2`.
- Sin abreviaciones ambiguas: `btn` ❌ → `Button` ✅.
- Componentes de página terminan en el sufijo del contexto cuando aporta claridad: `LoginForm`, `LoginPage`.

## Nombres de funciones
- Verbos claros que describen la acción: `getUserById`, `calculateTotal`, `validateEmail`.
- Booleanos con prefijo `is`, `has`, `should`: `isLoading`, `hasPermission`.
- Funciones que lanzan efectos secundarios usan verbos de acción: `sendEmail`, `createOrder`.

## Git branches
```
feature/checkout-flow
fix/login-redirect-bug
chore/update-dependencies
```

## Commits (Conventional Commits)
```
feat: agregar flujo de checkout
fix: corregir redirección en login
docs: actualizar README
refactor: extraer lógica de pricing a use-case
```

## Checklist rápido
- [ ] ¿El nombre explica qué hace sin necesidad de abrir el archivo?
- [ ] ¿Se sigue la convención de casing según el tipo de archivo?
- [ ] ¿Los commits siguen Conventional Commits?
