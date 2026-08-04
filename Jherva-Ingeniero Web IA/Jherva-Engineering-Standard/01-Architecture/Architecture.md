# Arquitectura

## Principio general
Cada proyecto sigue una arquitectura en capas claramente separadas: **presentación**, **lógica de negocio** y **acceso a datos**. Ninguna capa debe saltarse a otra directamente.

## Stack de referencia
- Frontend: Next.js (App Router) + TypeScript + Tailwind CSS
- Backend: API Routes / Server Actions o servicio dedicado (Node.js/NestJS) según escala
- Base de datos: PostgreSQL como default; Redis para cache/sesiones
- ORM: Prisma o Drizzle

## Capas

1. **UI (components/)** — solo presentación, sin lógica de negocio ni fetch directo a DB.
2. **Aplicación (services/, use-cases/)** — orquesta lógica de negocio, valida reglas.
3. **Dominio (domain/, entities/)** — modelos y reglas puras, sin dependencias externas.
4. **Infraestructura (repositories/, lib/)** — acceso a DB, APIs externas, storage.

## Reglas
- Los componentes de UI nunca llaman directamente a Prisma/DB.
- La lógica de negocio no depende del framework (debe poder testearse sin Next.js corriendo).
- Toda comunicación externa (APIs de terceros) pasa por un adaptador en `infrastructure/`, nunca se llama directo desde un componente.
- Server Actions/endpoints son delgados: reciben input, llaman a un caso de uso, devuelven respuesta. No contienen lógica de negocio inline.

## Ejemplo correcto
```
app/checkout/page.tsx        → UI, llama a un server action
actions/create-order.ts      → valida input, llama al use-case
use-cases/create-order.ts    → lógica de negocio pura
repositories/order.repo.ts   → acceso a base de datos
```

## Ejemplo incorrecto
```tsx
// ❌ Lógica de negocio y acceso a DB dentro del componente
export default async function CheckoutPage() {
  const order = await db.order.create({ ... }); // sin validación, sin capa de negocio
}
```

## Checklist rápido
- [ ] ¿La UI está libre de lógica de negocio?
- [ ] ¿El dominio es testeable sin levantar el framework?
- [ ] ¿Las integraciones externas están aisladas en adaptadores?
- [ ] ¿Se puede cambiar de base de datos sin tocar la capa de dominio?
