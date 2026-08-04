# Jherva Engineering Standard

> Estándar de ingeniería, diseño y calidad para todos los proyectos web de Jherva.

## ¿Qué es esto?

Este repositorio define **cómo construimos software en Jherva**: arquitectura, UI/UX, sistema de diseño, SEO, seguridad, performance, IA, accesibilidad, copywriting, despliegue, QA y checklists de lanzamiento.

No es documentación de un proyecto específico — es el **manual de referencia transversal** que aplica a cualquier producto, landing, dashboard o aplicación que desarrollemos.

## 👉 Empieza aquí: [IDENTITY.md](./IDENTITY.md)

Antes de tocar cualquier otra carpeta, lee **[IDENTITY.md](./IDENTITY.md)**. No es un archivo más — define quién es Jherva, cómo pensamos, nuestra identidad visual por defecto, y las reglas para actuar como parte del equipo (no como un asistente genérico) al construir sitios, landings o propuestas en nombre de Jherva o de nuestros clientes. Todo lo demás en este repositorio asume que ya interiorizaste ese contexto.

## Objetivo

- Garantizar consistencia entre proyectos y equipos.
- Reducir decisiones ad-hoc y deuda técnica.
- Servir como fuente de verdad para revisiones de código y diseño.
- Ser la base de contexto para asistentes de IA (Claude, Copilot, Cursor, etc.) que trabajen en nuestros repos.

## Estructura

| Carpeta | Contenido |
|---|---|
| `IDENTITY.md` | Quiénes somos, identidad visual, tono y reglas de comportamiento — **léelo primero** |
| `01-Architecture` | Arquitectura de software, patrones, estructura de carpetas |
| `02-UI-UX` | Principios de experiencia de usuario e interfaz |
| `03-Design-System` | Tokens visuales: color, tipografía, espaciado, componentes |
| `04-SEO` | SEO técnico, metadata, schema, sitemap |
| `05-Security` | Seguridad de aplicaciones web (OWASP y más) |
| `06-Performance` | Web Vitals, optimización de assets |
| `07-AI` | Reglas de uso de IA, prompting, agentes, RAG |
| `08-Accessibility` | Accesibilidad WCAG |
| `09-Copywriting` | Redacción persuasiva y de conversión |
| `10-Deployment` | CI/CD, despliegue, monitoreo |
| `11-Quality-Assurance` | Testing y aseguramiento de calidad |
| `12-Checklist` | Checklists ejecutables por fase de proyecto |

## Cómo usar este estándar

1. Lee `IDENTITY.md` primero, siempre — es el contexto que hace que todo lo demás tenga sentido.
2. Antes de iniciar un proyecto nuevo, revisa `12-Checklist/Project-Start.md`.
3. Durante el desarrollo, consulta la carpeta correspondiente al área en la que trabajas.
4. Antes de lanzar, corre todos los checklists de `12-Checklist/`.
5. Si algo no está documentado, ábrelo como propuesta (ver `CONTRIBUTING.md`) en lugar de improvisar.

## Principios rectores

1. **Claridad sobre cleverness.** Código y diseño que cualquier persona del equipo pueda entender en 5 minutos.
2. **Performance y accesibilidad no son opcionales.** Se diseñan desde el día uno, no se "arreglan después".
3. **Todo output medible.** Si no se puede medir (Lighthouse, Web Vitals, tasa de conversión), no se puede mejorar.
4. **Seguridad por defecto.** Nunca confiar en el input del usuario; nunca exponer secretos.
5. **Documentar decisiones, no solo código.** El "por qué" importa tanto como el "qué".

## Licencia

Ver [LICENSE.md](./LICENSE.md).
