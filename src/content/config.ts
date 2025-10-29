// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
  }),
});


export const collections = { posts };

