# Guía Rápida de Git para tu Proyecto

Esta guía te ayudará a guardar tus cambios manualmente usando la terminal.

## 1. Ver qué cambios hay pendientes
Antes de guardar nada, es bueno ver qué archivos has modificado.

Comando:
```bash
git status
```
*   **Rojo:** Archivos modificados pero aún no listos para guardarse.
*   **Verde:** Archivos listos para guardarse (Staged).

## 2. Preparar los archivos (St. Age)
Si tienes archivos en rojo y quieres incluirlos en tu "guardado", usa este comando. El punto `.` significa "todo".

Comando:
```bash
git add .
```

## 3. Guardar los cambios (Commit)
Una vez que los archivos están en verde (Staged), crea el punto de guardado definitivo con un mensaje que explique qué hiciste.

Comando:
```bash
git commit -m "Escribe aquí tu mensaje entre comillas"
```
*Ejemplo: `git commit -m "Actualicé la página de servicios"`*

## 4. Subir a Internet (GitHub)
Una vez guardado en tu computador (commit), debes enviarlo a la nube.

Comando:
```bash
git push
```

## 5. Revisar el historial
Para ver los guardados anteriores y confirmar que el tuyo se hizo.

Comando:
```bash
git log --oneline
```
Verás una lista con códigos amarillos (ej. `855d499`) y tus mensajes.

---

### Resumen del flujo de trabajo diario:

**1. Guardar en tu Computador (Local):**
1.  Haces cambios en tus archivos.
2.  `git add .` (Prepara todo)
3.  `git commit -m "Mensaje"` (Guarda la foto en tu PC)

**2. Subir a Internet (Nube):**
4.  `git push` (Envía tus cambios guardados a GitHub)

> **💡 REGLA DE ORO:**
> *   **`git commit`** = Guardar en tu PC (Como "Guardar" en Word).
> *   **`git push`** = Publicar en GitHub (Como "Enviar correo").
> *   *Si no haces Push, nadie más verá tus cambios.*

6.  ¡Listo!
