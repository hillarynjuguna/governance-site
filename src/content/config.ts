import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    governanceLayer: z.enum(['foundational', 'infrastructural', 'operational', 'translational']),
    frameworks: z.array(z.string()),
    status: z.enum(['deployed', 'active', 'conceptual']),
    date: z.string(),
    featured: z.boolean().default(false),
  }),
});

const research = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    abstract: z.string(),
    type: z.enum(['whitepaper', 'framework', 'analysis', 'specification']),
    date: z.string(),
    frameworks: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

const writing = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
  }),
});

export const collections = { projects, research, writing };
