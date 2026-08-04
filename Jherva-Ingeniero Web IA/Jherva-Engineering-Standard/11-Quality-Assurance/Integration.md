# Integration Testing

## Principio general
Un test de integración valida que varios módulos funcionan correctamente en conjunto — ej. un endpoint completo incluyendo su interacción real (o con testcontainer) con la base de datos.

## Qué cubrir
- Endpoints/Server Actions completos: request → validación → lógica de negocio → base de datos → response.
- Integraciones entre capas de la arquitectura (ver `01-Architecture/Clean-Architecture.md`).
- Webhooks entrantes de terceros (simulando el payload real que enviaría el proveedor).

## Reglas

1. **Base de datos de test real** (no mock) — usar una DB de test aislada o un contenedor Docker efímero por corrida de CI, para detectar problemas reales de queries/constraints.
2. **Reset de estado entre tests**: cada test empieza con datos conocidos, no depende del orden de ejecución de otros tests.
3. **Testear casos de error, no solo éxito**: ¿qué responde el endpoint si el input es inválido, si el recurso no existe, si el usuario no tiene permiso?
4. **Más lentos que unit tests** — está bien, son menos en cantidad pero cubren la integración real entre piezas.

## Ejemplo de escenario a cubrir
```
POST /api/orders con usuario autenticado y carrito válido → 201 + orden creada en DB
POST /api/orders sin autenticación → 401
POST /api/orders con carrito vacío → 400 con mensaje de validación
```

## Checklist rápido
- [ ] ¿Se testea contra una base de datos real de test, no completamente mockeada?
- [ ] ¿Se cubren tanto casos de éxito como de error/validación?
- [ ] ¿El estado se resetea entre tests para evitar dependencias de orden?
