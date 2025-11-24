import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    posts: collection({
      label: 'Noticias',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Título' } }),
        subtitle: fields.text({ label: 'Subtítulo' }),
        category: fields.text({ label: 'Categoría/s' }),
        author: fields.text({ label: 'Autor/s' }),
        imagepost: fields.image({
          label: 'Imagen Principal',
          directory: 'src/assets/images/posts',
          publicPath: '/src/assets/images/posts/',
          optional: true,
        }),
        content: fields.markdoc({
          label: 'Contenido',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/',
            },
          },
        }),
      },
    }),
    people: collection({
      label: 'Directorio',
      slugField: 'name',
      path: 'src/content/people/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
        position: fields.text({ label: 'Cargo' }),
        order: fields.number({
          label: 'Orden',
          validation: { isRequired: true },
        }),
        photo: fields.image({
          label: 'Foto',
          directory: 'src/assets/images/people',
          publicPath: '/src/assets/images/people/',
        }),
        description: fields.text({ label: 'Descripción' }),
        email: fields.text({ label: 'Email', optional: true }),
        twitter: fields.text({ label: 'Twitter', optional: true }),
        linkedin: fields.text({ label: 'LinkedIn', optional: true }),
        instagram: fields.text({ label: 'Instagram', optional: true }),
        github: fields.text({ label: 'GitHub', optional: true }),
      },
    }),
    people2: collection({
      label: 'Equipo',
      slugField: 'name',
      path: 'src/content/people2/*',
      schema: {
        name: fields.slug({ name: { label: 'Nombre' } }),
        position: fields.text({ label: 'Cargo' }),
        order: fields.number({
          label: 'Orden',
          validation: { isRequired: true },
        }),
        photo: fields.image({
          label: 'Foto',
          directory: 'src/assets/images/people2',
          publicPath: '/src/assets/images/people2/',
        }),
        description: fields.text({ label: 'Descripción' }),
        email: fields.text({ label: 'Email', optional: true }),
        twitter: fields.text({ label: 'Twitter', optional: true }),
        linkedin: fields.text({ label: 'LinkedIn', optional: true }),
        instagram: fields.text({ label: 'Instagram', optional: true }),
        github: fields.text({ label: 'GitHub', optional: true }),
      },
    }),
    proyectos: collection({
      label: 'Proyectos',
      slugField: 'nombre',
      path: 'src/content/proyectos/*',
      schema: {
        nombre: fields.slug({ name: { label: 'Nombre' } }),
        order: fields.number({
          label: 'Orden',
          validation: { isRequired: true },
        }),
        imagen: fields.image({
          label: 'Imagen',
          directory: 'public/images/proyectos',
          publicPath: '/images/proyectos/',
        }),
        ubicacion: fields.select({
          label: 'Ubicación',
          options: [
            { label: 'América Latina', value: 'America Latina' },
            { label: 'Chile', value: 'Chile' },
          ],
          defaultValue: 'America Latina',
        }),
        descripcion: fields.text({
          label: 'Descripción',
          multiline: true,
        }),
        link: fields.url({ label: 'Link' }),
        link2: fields.url({ label: 'Link 2', optional: true }),
        status: fields.select({
          label: 'Estado',
          options: [
            { label: 'Actual', value: 'Actual' },
            { label: 'Pasado', value: 'Pasado' },
          ],
          defaultValue: 'Actual',
        }),
        home: fields.checkbox({
          label: 'Mostrar en Home',
          description: 'Marcar para mostrar este proyecto en la página de inicio.',
        }),
      },
    }),

    publicaciones: collection({
      label: 'Publicaciones',
      slugField: 'nombre',
      path: 'src/content/publicaciones/*',
      schema: {
        nombre: fields.slug({ name: { label: 'Título' } }),
        descripcion: fields.text({ label: 'Descripción', optional: true }),
        imagen: fields.image({
          label: 'imagen',
          directory: 'src/assets/images/publicaciones',
          publicPath: '/src/assets/images/publicaciones/',
        }),
        link: fields.url({ label: 'Link', optional: true }),
        descarga: fields.file({
          label: 'Documento',
          directory: 'src/assets/pdfs/publicaciones',
          publicPath: '/src/assets/pdfs/publicaciones/',
        }),
      },
    }),
  },
});

