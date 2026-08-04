# Clean Architecture

## Principio general
Las dependencias siempre apuntan hacia adentro: la UI depende del dominio, el dominio no depende de nada externo (ni framework, ni DB, ni HTTP).

## Regla de dependencia
```
UI  →  Aplicación (use-cases)  →  Dominio (entidades, reglas)
                                        ↑
                                 Infraestructura (implementa interfaces del dominio)
```

- El **dominio** define interfaces (`UserRepository`).
- La **infraestructura** las implementa (`PrismaUserRepository`).
- La **aplicación** orquesta usando las interfaces, sin saber qué implementación corre por debajo.

## Por qué importa
- Permite testear casos de uso con mocks, sin base de datos real.
- Permite cambiar de proveedor (ej. de Stripe a otro gateway de pago) tocando solo la capa de infraestructura.
- El dominio sobrevive a cambios de framework (migrar de Next.js a otro framework no debería tocar las reglas de negocio).

## Ejemplo
```ts
// domain/repositories/user.repository.ts
export interface UserRepository {
  findByEmail(email: string): Promise<User | null>;
}

// infrastructure/repositories/prisma-user.repository.ts
export class PrismaUserRepository implements UserRepository {
  async findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  }
}

// use-cases/authenticate-user.ts
export async function authenticateUser(repo: UserRepository, email: string, password: string) {
  const user = await repo.findByEmail(email);
  // reglas de negocio puras aquí
}
```

## Cuándo NO aplicar toda la ceremonia
En proyectos pequeños (landing pages, MVPs de una sola feature), no es necesario crear todas las capas — pero sí mantener la **separación entre UI y lógica de negocio** como mínimo no negociable.

## Checklist rápido
- [ ] ¿El dominio no importa nada de `next`, `react` o el ORM directamente?
- [ ] ¿Se puede testear un caso de uso sin conexión real a base de datos?
- [ ] ¿Cambiar de proveedor externo requiere tocar solo infraestructura?
