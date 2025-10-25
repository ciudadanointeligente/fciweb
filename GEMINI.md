# Proyecto K

Este proyecto usa Astro, un generador de sitios estáticos moderno. Las secciones dinámicas serán construidas con content collections de Astro, guardando sus contenidos en archivos .md en la carpeta `src/content`.

El proyecto usa el CMS Keystatic, que guarda los contenidos administrables en archivos mdoc (Markdoc). Keystatic permite mantener los contenidos fácilmente a usuarios no técnicos. La configuración de Keystatic (`keystatic.config.ts`) define una colección de `posts` (Noticias) con campos como `title`, `subtitle`, `category`, `author` y `content`. Las imágenes para el contenido de Markdoc se almacenan en `src/assets/images/posts`.

Además de Astro y Keystatic, el proyecto usa React para componentes interactivos y Tailwind CSS para estilos, complementado con DaisyUI, una librería de componentes de Tailwind CSS. El archivo `src/styles/global.css` importa Tailwind CSS y configura DaisyUI como plugin, además de definir variables CSS personalizadas como `--color-azul` (#304FFE) y `--color-rosa` (#D504F9).
Los archivos de configuración del proyecto son:
astro.config.mjs
keystatic.config.mjs

Las fuentes utilizadas son Mulish y Space Mono.

Los scripts principales para el desarrollo son:
- `dev` o `start`: Inicia el servidor de desarrollo de Astro.
- `build`: Compila el proyecto para producción.
- `preview`: Previsualiza la versión de producción.

El color principal para los links es el `--color-azul`: #304FFE


