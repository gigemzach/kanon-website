import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    description: z.string(),
    order: z.number(),
    cluster: z.enum(['transitions', 'complexity', 'core']),
    icon: z.string(),
    lede: z.string(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    cluster: z.enum(['transitions', 'complexity']),
    relatedService: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, insights };
