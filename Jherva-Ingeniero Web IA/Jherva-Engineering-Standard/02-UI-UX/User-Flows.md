# Flujos de Usuario

## Principio general
Todo flujo (registro, checkout, onboarding) se diseña primero como diagrama de pasos antes de construir UI. Minimizar pasos y puntos de fricción/salida.

## Reglas de diseño de flujos

1. **Menos pasos, no más**: cada paso adicional en un flujo reduce la tasa de finalización. Combinar pasos cuando sea posible.
2. **Progreso visible** en flujos multi-step (stepper, barra de progreso).
3. **Permitir retroceder** sin perder datos ingresados.
4. **Guardar progreso automáticamente** en flujos largos (formularios extensos, checkout).
5. **Camino feliz primero**: diseñar el flujo ideal (todo sale bien) y luego mapear cada punto de falla (error de red, dato inválido, pago rechazado) con su propia UI de manejo.
6. **Salidas de emergencia**: siempre debe existir una forma clara de cancelar/salir sin quedar atrapado.

## Ejemplo de mapeo de flujo (checkout)
```
1. Carrito → 2. Datos de envío → 3. Método de pago → 4. Confirmación → 5. Éxito
                    ↓ error de validación          ↓ pago rechazado
              Mostrar error inline           Reintentar sin perder datos
```

## Checklist rápido
- [ ] ¿Se mapearon los caminos de error, no solo el camino feliz?
- [ ] ¿El usuario puede retroceder sin perder lo ya ingresado?
- [ ] ¿Hay indicador de progreso en flujos de 3+ pasos?
- [ ] ¿Existe una salida clara en cada paso?
