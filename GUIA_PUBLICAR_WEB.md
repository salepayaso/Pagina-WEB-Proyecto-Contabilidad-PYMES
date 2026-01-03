# Cómo Publicar tu Página Web (GitHub Pages)

Esta guía te explica cómo hacer que tu sitio sea visible para todo el mundo en internet.

## El Concepto
Ya tienes tu código en GitHub (gracias a `git push`). Ahora debemos decirle a GitHub: **"¡Transforma este código en una página web real!"**.

---

## Pasos para Activar el Sitio

1.  Abre tu navegador y entra a tu repositorio en GitHub:
    *   `https://github.com/salepayaso/Pagina-WEB-Proyecto-Contabilidad-PYMES` (o el link de tu repo).

2.  En el menú de arriba, haz clic en la pestaña **Settings** (Configuración) ⚙️.

3.  En el menú de la izquierda, baja casi hasta el final y busca la sección **"Code and automation"**. Haz clic en **Pages**.

4.  En la sección central llamada **"Build and deployment"**:
    *   Donde dice **Source**, asegúrate que diga `Deploy from a branch`.
    *   Donde dice **Branch**, cambia `None` por `main` (o `master`).
    *   Haz clic en el botón **Save** (Guardar).

5.  **¡Espera!** ⏳
    *   GitHub tomará unos 1-3 minutos en construir tu sitio.
    *   Si refrescas la página después de un rato, aparecerá una barra en la parte superior que dice:
        > "Your site is live at..."

## Tu Link Público
GitHub te dará un enlace (link) que se verá así:
`https://salepayaso.github.io/Pagina-WEB-Proyecto-Contabilidad-PYMES/`

**¡Ese es tu sitio web!** Cópialo y envíaselo a quien quieras. Funcionará en celulares y computadores.

---

## ¿Cómo actualizar el sitio después?
Cada vez que hagas cambios en tu computador y ejecutes estos comandos:

1.  `git add .`
2.  `git commit -m "cambios"`
3.  `git push`

...GitHub detectará los cambios y **actualizará la página web automáticamente**. No tienes que repetir los pasos de activación. Solo "empujas" el código y esperas unos minutos.

---

## 6. Opcional: Usar tu Dominio Propio (.cl)
Si no quieres que tu página se llame `salepayaso.github.io`, sigue estos pasos cuando compres tu dominio (ej: `contabilidadcmp.cl`):

1.  Ve a **Settings** -> **Pages** en GitHub.
2.  Baja hasta **"Custom domain"**.
3.  Escribe tu dominio: `www.contabilidadcmp.cl` y dale a **Save**.
4.  **Configura los DNS:** GitHub te pedirá que vayas a donde compraste tu dominio (NIC Chile o tu Hosting) y agregues esto:
    *   Un registro `CNAME` para `www` apuntando a `salepayaso.github.io`.
    *   (Opcional) 4 registros `A` apuntando a las IPs de GitHub para que funcione sin el "www".

Una vez configurado, tu sitio cargará como **www.contabilidadcmp.cl** profesionalmente.
