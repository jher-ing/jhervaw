# Seguridad de Dependencias

## Principio general
Cada dependencia externa que se instala es código de terceros ejecutándose con los mismos privilegios que el proyecto. Se audita y se mantiene con la misma seriedad que el código propio — es la vía de ataque más común y menos vigilada (OWASP A06).

## Reglas

1. **Lockfiles siempre commiteados** (`package-lock.json`, `pnpm-lock.yaml`) — garantizan que todo el equipo y CI instalan exactamente las mismas versiones, sin sorpresas de una actualización silenciosa de una sub-dependencia.
2. **Auditoría automática en cada PR**: `npm audit` (o `pnpm audit`) corre en CI; vulnerabilidades de severidad **alta o crítica bloquean el merge**.
3. **Dependabot o Renovate activado** en todo repositorio — actualizaciones de seguridad se proponen automáticamente, no se espera a un audit manual trimestral.
4. **Revisar antes de instalar**: ¿la librería tiene mantenimiento activo (último commit reciente)? ¿Cuántos dependientes/descargas semanales tiene? ¿Realmente se necesita, o se puede resolver en 20 líneas propias?
5. **Minimizar superficie de ataque**: evitar dependencias con permisos de post-install scripts sospechosos; revisar `package.json` de librerías nuevas antes de agregarlas a un proyecto con datos sensibles.
6. **Congelar versiones exactas** (sin `^`/`~` sueltos) en proyectos de alta sensibilidad (fintech, salud, datos personales) para que las actualizaciones sean siempre una decisión explícita, no automática.
7. **SBOM (Software Bill of Materials)** — para proyectos grandes o de cliente enterprise, generar un inventario de dependencias como parte del proceso de entrega.

## Checklist rápido
- [ ] ¿El lockfile está commiteado y actualizado?
- [ ] ¿CI bloquea el merge ante vulnerabilidades altas/críticas?
- [ ] ¿Dependabot/Renovate está activo en el repositorio?
- [ ] ¿Se evaluó cada dependencia nueva antes de instalarla, no solo `npm install` reflejo?
