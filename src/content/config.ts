// @ts-ignore
import { defineCollection, z } from 'astro:content';

<!--Define the "posts o noticias" collection with its schema-- >
const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
  }),
});

<!--Define the "noticiashome" collection with its schema-- >
const publications = defineCollection({
  schema: z.object({
    image: z.string().optional(),
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { posts, publications };

