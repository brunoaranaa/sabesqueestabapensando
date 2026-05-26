# Sitio personal — Bruno Arana Arellano

Web de textos cortos organizados en tres constelaciones temáticas: sangre, cielo, humo.

## Cómo publicar un texto nuevo

1. Abre el archivo `js/textos.js` en GitHub (desde el navegador).
2. Copia un bloque existente, pégalo arriba del todo (los más nuevos primero).
3. Cambia los seis campos: `id`, `titulo`, `fecha`, `constelacion`, `preview`, `contenido`.
4. Guarda el cambio (en GitHub se llama "Commit changes").
5. Netlify republica el sitio solo en aproximadamente 30 segundos.

## Formato del contenido

- Un salto de línea = párrafo nuevo con sangría
- Línea en blanco entre párrafos = cambio de escena, agrega un separador "· · ·"
- El primer párrafo nunca lleva sangría

## Otros cambios (eventuales)

- **Nombre, frase principal de la home, texto de Sobre, correo**: editar `index.html`.
- **Estilos visuales**: editar `css/style.css`.
- **Comportamiento del sitio (grafo, navegación)**: editar `js/app.js`.

## Estructura de archivos

```
sitio/
  index.html
  README.md
  css/style.css
  js/textos.js     ← el único que editas para publicar
  js/app.js
```

## Stack

HTML, CSS y JS puro. Sin frameworks, sin build, sin dependencias.
Deployable en GitHub Pages, Netlify, Vercel o cualquier hosting estático.
