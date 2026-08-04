# Privacidad y Protección de Datos

## Principio general
Todo dato personal de un usuario (nombre, email, teléfono, dirección, datos de pago) se trata como sensible por defecto. Se recolecta solo lo necesario, se protege en tránsito y en reposo, y se elimina cuando ya no se necesita.

## Reglas fundamentales

1. **Minimización de datos**: no se pide ni se almacena ningún dato que no tenga un uso concreto y justificado en el producto. "Por si acaso lo necesitamos después" no es una razón válida.
2. **Cifrado en tránsito**: HTTPS en todo el sitio, sin excepción (ver `Headers.md`).
3. **Cifrado en reposo**: datos sensibles (contraseñas, tokens, información financiera) cifrados en la base de datos — contraseñas siempre hasheadas (ver `Authentication.md`), nunca cifradas de forma reversible.
4. **Consentimiento explícito** para recolección de datos no esenciales (marketing, cookies de analítica/publicidad) — banner de cookies claro, opt-in real, no casillas premarcadas.
5. **Derecho al olvido**: proceso definido para que un usuario pueda solicitar eliminación de sus datos, y capacidad técnica real de cumplirlo (no solo una promesa en la política de privacidad).
6. **Terceros procesadores de datos** (email marketing, analítica, pagos) deben cumplir estándares de protección de datos equivalentes — revisar antes de integrar cualquier servicio que reciba datos de usuarios del cliente.
7. **Política de privacidad real y específica del proyecto**, no una plantilla genérica copiada — debe reflejar exactamente qué datos se recolectan, para qué y con quién se comparten.
8. **Datos de menores**: tratamiento especial y consentimiento parental si el producto puede ser usado por menores de edad — validar requisitos legales según la jurisdicción del cliente.

## Aplicado a proyectos de cliente
Como Jherva construye para terceros, cada proyecto de cliente puede tener requisitos legales distintos según su industria y ubicación (salud, finanzas, datos de la UE bajo GDPR, Colombia bajo Ley 1581, etc.). **No asumir que un checklist genérico basta** — señalar al cliente cuando el proyecto maneja datos sensibles y requiere asesoría legal específica, no solo técnica.

## Checklist rápido
- [ ] ¿Se recolecta solo el dato estrictamente necesario para la función del producto?
- [ ] ¿Existe consentimiento explícito (opt-in) para datos no esenciales (cookies, marketing)?
- [ ] ¿Hay una política de privacidad específica del proyecto, no una plantilla genérica?
- [ ] ¿Se identificaron requisitos legales específicos de la industria/jurisdicción del cliente?
