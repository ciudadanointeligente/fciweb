import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    imagepost: z.string().optional(), // Keystatic image field stores path as string
    date: z.date(),
    category: z.string().optional(),
    author: z.string().optional(),
    showOnHome: z.boolean().default(false),
  }),
});

const people = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    order: z.number(),
    photo: z.string(), // Keystatic image field stores path as string
    description: z.string(),
    email: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    github: z.string().optional(),
  }),
});

const people2 = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    position: z.string(),
    order: z.number(),
    photo: z.string(), // Keystatic image field stores path as string
    description: z.string(),
    email: z.string().optional(),
    twitter: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    github: z.string().optional(),
  }),
});

const proyectos = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    imagen: z.string(),// Keystatic image field stores path as string
    order: z.number(),
    // ubicacion: z.enum(['America Latina', 'Chile']),
    descripcion: z.string(),
    link: z.string().url(),
    link2: z.string().url().optional(),
    status: z.enum(['Actual', 'Pasado']),
    home: z.boolean().default(false),
  }),
});

const publicaciones = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    imagen: z.string().optional(), // Keystatic image field stores path as string
    descripcion: z.string().optional(),
    link: z.string().url(),
    descarga: z.string().optional(),
    showOnHome: z.boolean().default(false),
  }),
});

const documentos = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    link: z.string().url(),
    descarga: z.string().optional(),
    order: z.number().optional(),
  }),
});

const memorias = defineCollection({
  type: 'data',
  schema: z.object({
    nombre: z.string(),
    link: z.string().url(),
    descarga: z.string().optional(),
    order: z.number().optional(),
  }),
});
export const collections = { posts, people, people2, proyectos, publicaciones, documentos, memorias };
