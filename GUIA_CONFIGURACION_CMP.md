# Configuración de Dominio y Correo - Contabilidad CMP

**Tecnología Detectada**: Sitio Web Estático (HTML5, CSS3, JavaScript Vanilla).
*Despliegue*: Recomendado en Vercel/Netlify (Opción A) o cPanel (Opción B).

Este documento guía la configuración del dominio, la creación de correos y el despliegue del sitio.

## Parte 1: Configuración de DNS (NIC Chile)
*Fundamental para que funcione el correo y el sitio.*
1. Ingresa a [NIC Chile](https://www.nic.cl).
2. Selecciona tu dominio: `contabilidadcmp.cl`.
3. En **Servidores de Nombre (DNS)**, ingresa únicamente:
   - `ns1.cpanelhost.cl`
   - `ns2.cpanelhost.cl`
4. Guarda.

---

## Parte 2: Configuración del Sitio Web

### Opción A (Recomendada): Web en Vercel + Correo en cPanel
*Mejor rendimiento y certificado SSL gratuito.*
1. **En Vercel**: Obtén la IP del proyecto (generalmente `76.76.21.21`).
2. **En cPanel** ([https://srv3.cpanelhost.cl/cpanel](https://srv3.cpanelhost.cl/cpanel)):
   - Ve a **"Zone Editor"** > **Administrar**.
   - Busca el registro **A** de `contabilidadcmp.cl`.
   - Cámbialo por la IP de Vercel (`76.76.21.21`).

### Opción B: Web en cPanel
*Más simple, todo en un lugar.*
1. **En cPanel**: Ve a "Administrador de Archivos".
2. Entra a `public_html`.
3. Sube todos los archivos de tu web (`index.html`, `css`, `js`, etc.).

---

## Parte 3: Gestión de Correos en cPanel (Lo que preguntaste)

Para crear cuentas de correo (ej: `contacto@contabilidadcmp.cl`) y asignar contraseñas:

### 1. Crear una Nueva Cuenta
1. Entra al **cPanel**: [https://srv3.cpanelhost.cl/cpanel](https://srv3.cpanelhost.cl/cpanel).
   - **Usuario**: `cco114351`
   - **Clave**: `CddzUAvkOnZBzLkfbbBy`
2. Busca la sección **"Correo electrónico"** y haz clic en **"Cuentas de correo electrónico"** (Email Accounts).
3. Haz clic en el botón azul **"+ Crear"** (a la derecha).
4. **Dominio**: Selecciona `contabilidadcmp.cl`.
5. **Nombre de usuario**: Escribe la primera parte del correo (ej: `contacto`, `ventas`, `admin`).
6. **Contraseña**:
   - Puedes escribir una tú mismo (asegúrate de anotarla).
   - O hacer clic en "Generar" para que el sistema cree una segura. **¡Cópiala y guárdala!**
7. **Espacio de almacenamiento**: Puedes dejarlo en el valor predeterminado (ej: 250 MB o 1 GB) o poner "Ilimitado" (dentro de los 4GB de tu plan total).
8. Haz clic en **"Crear"**.

### 2. Cambiar Contraseña o Administrar
Si el cliente olvida su clave, puedes cambiarla aquí:
1. En la misma sección **"Cuentas de correo electrónico"**.
2. Busca el correo en la lista (ej: `contacto@contabilidadcmp.cl`).
3. Haz clic en **"Administrar"** (Manage).
4. En el campo **"Nueva contraseña"**, escribe la nueva clave.
5. Baja hasta el final y haz clic en **"Update Email Settings"** (Actualizar configuración).

---

## Parte 4: Datos para el Cliente (Conexión)

Una vez creada la cuenta y la contraseña, entrega estos datos al cliente:

**Acceso Web Directo**: [https://contabilidadcmp.cl/webmail](https://contabilidadcmp.cl/webmail)

**Configuración App (Outlook/Celular):**
| Campo | Valor |
| :--- | :--- |
| **Usuario** | `tu_correo@contabilidadcmp.cl` |
| **Contraseña** | (La que creaste en el paso anterior) |
| **Servidor Entrante/Saliente** | `contabilidadcmp.cl` |
| **Puertos** | IMAP: **993** / SMTP: **465** (Ambos SSL) |
