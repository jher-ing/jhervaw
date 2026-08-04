# Patrones de Diseño

## Principio general
Usar el patrón más simple que resuelva el problema. No se aplican patrones "porque sí" — cada uno se justifica por un problema concreto.

## Patrones recomendados

### Repository Pattern
Abstrae el acceso a datos detrás de una interfaz, permitiendo cambiar la fuente de datos sin tocar la lógica de negocio.
```ts
interface UserRepository {
  findById(id: string): Promise<User | null>;
  save(user: User): Promise<void>;
}
```

### Factory
Para crear objetos complejos o familias de objetos relacionados (ej. distintos tipos de notificación: email, SMS, push).

### Strategy
Cuando hay múltiples algoritmos intercambiables para resolver lo mismo (ej. distintos métodos de cálculo de envío).

### Adapter
Para integrar librerías o APIs externas sin acoplar el resto del sistema a su interfaz específica.

### Observer / Pub-Sub
Para eventos de dominio (ej. `OrderCreated` dispara envío de email, actualización de inventario, analytics) sin acoplar el caso de uso a cada efecto secundario.

## Anti-patrones a evitar
- **God Object**: un archivo/clase que hace de todo (`utils.ts` con 2000 líneas).
- **Prop drilling excesivo**: pasar props 5 niveles hacia abajo en vez de usar context o composición.
- **Lógica de negocio en componentes**: si un componente tiene `if` de reglas de negocio, esa lógica debe vivir en `use-cases/`.
- **Singletons mutables globales** fuera de config/DI controlado.

## Checklist rápido
- [ ] ¿El patrón elegido resuelve un problema real, no solo "se ve bien"?
- [ ] ¿Se puede explicar el patrón usado en una frase a otro dev?
- [ ] ¿Se evitó sobre-ingeniería para un caso simple?
