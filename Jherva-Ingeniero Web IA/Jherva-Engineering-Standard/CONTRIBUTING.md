# Contribuir al Jherva Engineering Standard

Este estándar es un documento **vivo**. Debe evolucionar con cada proyecto, error aprendido y mejor práctica descubierta.

## Cuándo proponer un cambio

- Encontraste una práctica repetida en 2+ proyectos que no está documentada.
- Un checklist te hizo detectar un bug que se pudo prevenir antes.
- Una convención genera ambigüedad o discusión recurrente en code review.
- Una herramienta o librería del stack cambió (ej. nueva versión de Next.js, nuevo estándar de Core Web Vitals).

## Cómo proponer un cambio

1. Abre un Pull Request modificando el archivo `.md` correspondiente.
2. En la descripción del PR, explica:
   - **Qué** cambia.
   - **Por qué** (contexto, proyecto donde surgió, problema que resuelve).
   - **Impacto** en proyectos existentes (¿requiere migración?).
3. Al menos una persona del equipo técnico debe aprobar antes de hacer merge.
4. Cambios grandes (nueva carpeta, cambio de arquitectura base) requieren discusión previa en el canal del equipo antes de escribir el documento.

## Estilo de escritura

- Español claro y directo, términos técnicos en inglés cuando sea el estándar de la industria (ej. "component", "endpoint", "hook").
- Usa listas y tablas antes que párrafos largos.
- Cada documento debe incluir, cuando aplique: principio general → ejemplo correcto → ejemplo incorrecto → checklist rápido.
- Evita reglas sin justificación. Si una regla existe, explica el problema que previene.

## Versionado

Cambios importantes (breaking para proyectos existentes) deben anotarse en la sección "Changelog" al final del archivo modificado, con fecha y motivo.
