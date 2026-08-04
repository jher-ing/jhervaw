# Seguridad en Carga de Archivos

## Principio general
Cualquier formulario que acepta archivos (CVs, imágenes de perfil, documentos, comprobantes) es un vector de ataque frecuentemente subestimado — desde ejecución remota de código hasta almacenamiento de malware que luego se distribuye a otros usuarios.

## Reglas

1. **Validar tipo de archivo por contenido real, no por extensión ni `Content-Type` del request** (ambos son falsificables por el cliente) — verificar el "magic number"/firma binaria del archivo en el servidor.
2. **Allowlist estricta de tipos permitidos** según el caso de uso (ej. solo `.jpg`, `.png`, `.pdf`) — nunca blocklist de tipos peligrosos, siempre lo opuesto: permitir solo lo explícitamente necesario.
3. **Límite de tamaño de archivo** aplicado en el servidor, no solo sugerido en el cliente.
4. **Nunca ejecutar ni servir archivos subidos desde el mismo dominio/origen que la aplicación principal** — usar un bucket de almacenamiento separado (S3, Cloudinary, Vercel Blob) sin permisos de ejecución, idealmente con dominio propio (`cdn-uploads.ejemplo.com`).
5. **Renombrar archivos al guardarlos** (UUID en vez del nombre original) — evita path traversal y colisiones, y oculta información potencialmente sensible del nombre original.
6. **Escaneo antivirus/malware** para archivos subidos por usuarios no confiables en aplicaciones con alto volumen o datos sensibles (ej. vía ClamAV o servicio del proveedor de storage).
7. **Imágenes**: reprocesar (re-encodear) las imágenes subidas en vez de servir el archivo original tal cual — elimina metadata potencialmente sensible (EXIF/geolocalización) y neutraliza payloads maliciosos embebidos.

## Checklist rápido
- [ ] ¿Se valida el tipo de archivo por contenido real, no por extensión?
- [ ] ¿Los archivos subidos se almacenan fuera del dominio principal, sin permisos de ejecución?
- [ ] ¿Se renombran los archivos al guardarlos (sin usar el nombre original)?
- [ ] ¿Existe límite de tamaño validado en el servidor?
