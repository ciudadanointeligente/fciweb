# Proyecto Keys / Fundación Ciudadanía Inteligente

Este proyecto usa Astro, un generador de sitios estáticos moderno. Las secciones dinámicas serán construidas con content collections de Astro, guardando sus contenidos en archivos .md en la carpeta `src/content`.

El proyecto usa el CMS Keystatic, que guarda los contenidos administrables en archivos mdoc (Markdoc). Keystatic permite mantener los contenidos fácilmente a usuarios no técnicos. La configuración de Keystatic (`keystatic.config.ts`) define una colección de `posts` (Noticias) con campos como `title`, `subtitle`, `category`, `author` y `content`. Las imágenes para el contenido de Markdoc se almacenan en `src/assets/images/posts`.

Además de Astro y Keystatic, el proyecto usa React para componentes interactivos y Tailwind CSS para estilos. El archivo `src/styles/global.css` importa Tailwind CSS y además de define variables CSS personalizadas como `--color-azul` (#304FFE) y `--color-rosa` (#D504F9).
Los archivos de configuración del proyecto son:
astro.config.mjs
keystatic.config.mjs

Las fuentes utilizadas son Mulish y Space Mono.

Los scripts principales para el desarrollo son:
- `dev` o `start`: Inicia el servidor de desarrollo de Astro.
- `build`: Compila el proyecto para producción.
- `preview`: Previsualiza la versión de producción.

El color principal para los links es el `--color-azul`: #304FFE


## Mantenedor de contenidos de proyectos 

La content collection de Proyecto debe tener:
  - nombre: string 
  - imagen 
  - ubicacion: (América Latina, Chile)
  - descripcion: string 
  - link: url
  - link2: url -opcional- 
  - status: (Actual, Pasado)
  - home: true/false (para aparecer en el inicio.astro del proyecto en el cual se muestran 3 proyectos)

En el frontend del proyecto estos datos se ven en dos páginas: index.astro y proyectos.astro.
En el index.astro se ven tres cards de proyectos a través del componente CardProyecto.astro que ya está creado y que no se debe modificar. Los proyectos que ahí se muestran se seleccionan con el true/false del booleano home de la content collection. (true: se ve en el home)
En la página proyectos.astro se despliegan todos los proyectos a través de las mismas cards del componente CardProyecto.astro y en la parte superior de las cards se deben ubicar dos selectores para filtrar los proyectos: ubicación y status.
La página proyectos.astro debe ser formada en forma de grid de tailwind de tres columnas con tres cards por fila. La imagen de cada proyecto se debe cargar desde un fade blanco a imagen cuando se despliega la página.
