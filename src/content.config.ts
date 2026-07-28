import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const services = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/services' }),
  schema: z.object({
    title: z.string(),
    navTitle: z.string(),
    description: z.string(),
    order: z.number(),
    cluster: z.enum(['core', 'advisory', 'support']),
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
    cluster: z.enum(['core', 'advisory', 'support']),
    relatedService: z.string().optional(),
    // Optional custom share image for this article. Put the file in
    // public/insights/ and reference it as '/insights/name.png'.
    // Omit it and the site-wide og-image.png is used.
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { services, insights };
