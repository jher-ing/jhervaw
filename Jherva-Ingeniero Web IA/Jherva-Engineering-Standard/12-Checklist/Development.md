# Checklist: Desarrollo

## Arquitectura y código
- [ ] La UI está libre de lógica de negocio (ver `01-Architecture/Clean-Architecture.md`).
- [ ] Nombres de archivos/funciones/variables siguen las convenciones (ver `01-Architecture/Naming-Conventions.md`).
- [ ] Sin valores mágicos (colores, espaciados) — todo usa tokens del sistema de diseño.

## Componentes
- [ ] Todos los estados de componentes interactivos implementados (default, hover, focus, disabled, loading).
- [ ] Componentes reutilizables extraídos a `components/ui`, sin duplicación.

## Formularios
- [ ] Labels asociados correctamente, validación en tiempo real, mensajes de error específicos (ver `02-UI-UX/Forms.md`).

## Seguridad
- [ ] Autorización validada en el servidor en toda acción sensible.
- [ ] Sin secretos hardcodeados en el código.
- [ ] Inputs de usuario sanitizados antes de renderizar o consultar la base de datos.

## Performance
- [ ] Imágenes usando `next/image` con `alt` y dimensiones correctas.
- [ ] Componentes pesados no críticos usando dynamic import.

## Tests
- [ ] Lógica de negocio nueva cubierta con unit tests.
- [ ] Flujos críticos nuevos cubiertos con integration/E2E tests si aplica.

## Revisión de código
- [ ] PR con descripción clara y screenshots si hay cambios visuales.
- [ ] Al menos una revisión aprobada antes de mergear.
