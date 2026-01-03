# Guía: Cómo Tener Correos Corporativos Gratis (Zoho Mail)

Esta guía te explica cómo configurar correos profesionales (ej: `contacto@contabilidadcmp.cl`) usando el "Plan Gratuito de por Vida" de Zoho Mail.

## Requisitos Previos
1.  **Tener tu dominio comprado** (ej: en NIC Chile).
2.  **Tener acceso a la configuración DNS** de tu dominio (donde sea que lo tengas apuntado, ej: Netlify, Cloudflare, o el mismo NIC Chile).

---

## Paso 1: Registro en Zoho Mail
1.  Ingresa a la página de [Zoho Mail Forever Free Plan](https://www.zoho.com/mail/zohomail-pricing.html).
2.  Busca la opción que dice **"Forever Free Plan"** (suele estar abajo, en letra pequeña o en una columna separada).
3.  Haz clic en **"Sign Up Now"**.
4.  Ingresa tu dominio (`contabilidadcmp.cl`) y tus datos personales.

## Paso 2: Verificar que eres dueño del dominio
Zoho te pedirá que demuestres que el dominio es tuyo.
1.  Zoho te dará un código único (empieza con `zb********`).
2.  Ve a tu administrador de DNS (donde gestionas tu dominio).
3.  Crea un nuevo registro **TXT**:
    *   **Tipo:** `TXT`
    *   **Nombre/Host:** `@` (o déjalo en blanco)
    *   **Valor/Destino:** `zoho-verification=zb********` (Pega el código que te dio Zoho).
4.  Espera unos minutos y haz clic en "Verify" en Zoho.

## Paso 3: Crear tu Usuario
Una vez verificado, te pedirá crear la primera cuenta de correo.
*   **Nombre de usuario:** `contacto` (así quedará `contacto@contabilidadcmp.cl`).
*   ¡Listo! Ya tienes la casilla creada.

## Paso 4: Configurar los Registros MX (¡Vital!)
Para **recibir** correos, debes decirle al mundo que Zoho maneja tu email.
Ve nuevamente a tu administrador de DNS y agrega estos 3 registros **MX**:

**Registro 1:**
*   **Tipo:** `MX`
*   **Nombre/Host:** `@`
*   **Valor:** `mx.zoho.com`
*   **Prioridad:** `10`

**Registro 2:**
*   **Tipo:** `MX`
*   **Nombre/Host:** `@`
*   **Valor:** `mx2.zoho.com`
*   **Prioridad:** `20`

**Registro 3:**
*   **Tipo:** `MX`
*   **Nombre/Host:** `@`
*   **Valor:** `mx3.zoho.com`
*   **Prioridad:** `50`

*Nota: Borra cualquier otro registro MX antiguo que haya.*

## Paso 5: ¡A usar el correo!
Como es el plan gratuito, no puedes usarlo en Gmail o Outlook de escritorio. Debes usar las herramientas oficiales (que son muy buenas):

1.  **En el Computador:** Entra a [mail.zoho.com](https://mail.zoho.com).
2.  **En el Celular:** Descarga la App **"Zoho Mail"** (disponible en iPhone y Android).

---
**Consejo para el futuro:**
Si tu negocio crece mucho y necesitas conectar el correo a Outlook o Gmail, tendrás que pasar a un plan de pago de Zoho (aprox $1 USD/mes) o migrar a Google Workspace. Pero para empezar, ¡esto es suficiente!
