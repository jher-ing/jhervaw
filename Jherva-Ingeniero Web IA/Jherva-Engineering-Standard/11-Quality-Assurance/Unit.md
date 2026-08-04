# Unit Testing

## Principio general
Un unit test valida una unidad de lógica aislada (una función, un caso de uso) sin dependencias externas reales (DB, red, filesystem).

## Herramientas de referencia
- Vitest o Jest para JS/TS.
- React Testing Library para componentes (testea comportamiento visible al usuario, no detalles de implementación).

## Reglas

1. **Arrange-Act-Assert**: estructura clara en cada test.
```ts
test('calculateTotal aplica descuento correctamente', () => {
  // Arrange
  const items = [{ price: 100, quantity: 2 }];
  const discount = 0.1;

  // Act
  const total = calculateTotal(items, discount);

  // Assert
  expect(total).toBe(180);
});
```
2. **Mockear dependencias externas** (DB, APIs, fecha/hora actual) — un unit test no debe hacer red real ni depender de estado externo.
3. **Un assert conceptual por test** — pueden ser varias líneas `expect`, pero validando un solo comportamiento.
4. **Nombres descriptivos**: `debería lanzar error si el email es inválido`, no `test1`.
5. **Casos límite obligatorios**: probar el caso feliz, pero también valores vacíos, nulos, límites (0, negativos, muy grandes).

## Checklist rápido
- [ ] ¿El test corre sin red, DB o filesystem real?
- [ ] ¿El nombre del test describe el comportamiento esperado?
- [ ] ¿Se cubren casos límite, no solo el camino feliz?
