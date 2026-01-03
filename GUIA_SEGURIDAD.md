# Guía de Seguridad y Certificados

Es normal preocuparse por la seguridad de un sitio web. Aquí te explico por qué tu sitio es **muy seguro** y cómo funciona el tema del "candadito" (HTTPS).

## 1. El "Candadito" (Certificado SSL/HTTPS)

¿Has visto que al lado de la dirección de los bancos aparece un candado cerrado? Eso significa que la conexión es segura.

*   **Buenas Noticias:** Al usar **GitHub Pages** (o Netlify), el Certificado de Seguridad (SSL) viene **GRATIS** e incluido.
*   **¿Cómo funciona?** GitHub gestiona automáticamente un certificado "Let's Encrypt" para tu sitio.
*   **Beneficio:** Tu sitio aparecerá como "Seguro" (HTTPS) en Google Chrome y celulares, lo que genera confianza inmediata en tus clientes.
*   **Acción:** No tienes que hacer nada. Se activa solo cuando publicas la página.

## 2. Seguridad del Sitio Web (Anti-Hackun)

Tu sitio web tiene una ventaja enorme en seguridad: es **ESTÁTICO**.

*   **Sitios Clásicos (Wordpress, etc):** Tienen bases de datos y paneles de administración que los hackers intentan atacar constantemente.
*   **Tu Sitio (HTML/CSS):** Son solo archivos de lectura.
    *   ❌ No tiene base de datos para robar.
    *   ❌ No tiene panel de administrador para adivinar la clave.
    *   ✅ Es virtualmente **imposible de hackear** por los métodos tradicionales.

## 3. Seguridad de tu Cuenta GitHub

La única forma de que alguien cambie tu sitio es entrando a tu cuenta de GitHub. Por eso, la seguridad depende de proteger tu contraseña.

### Recomendación Crítica: Activar "2 Factores" (2FA)
Es como la clave dinámica del banco. Aunque alguien robe tu contraseña, no podrá entrar sin tu celular.

1.  Ve a tu perfil de GitHub (esquina superior derecha) -> **Settings**.
2.  Ve a la sección **Password and authentication**.
3.  Busca **"Two-factor authentication"** y actívalo.
4.  Usa una app como **Google Authenticator** o SMS.

## 4. Respaldos (La Nube)

*   **Tu código vive en GitHub:** Si se te quema el computador o se borra el disco duro, **no pierdes nada**.
*   Simplemente entras a GitHub desde otro computador, descargas el proyecto y sigues trabajando. GitHub funciona como una copia de seguridad automática y permanente.

---
**Resumen:** Tu sitio es mucho más seguro que el promedio de las páginas web corporativas porque usa tecnología moderna (Estática) y el respaldo de infraestructura de nivel mundial (GitHub).
