import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const artikel = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artikel" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string(),
    categories: z.array(z.string()).optional(),
    author: z.string().default('Redaktion'),
    authorRole: z.string().optional(),
    authorAvatar: z.string().optional(),
    reviewedBy: z.string().optional(),
    readingTime: z.string().optional(),
    // Sidebar promotional content
    sidebarTitle: z.string().optional(),
    sidebarDescription: z.string().optional(),
    sidebarCta: z.string().optional(),
    sidebarCtaUrl: z.string().optional(),
    sidebarImage: z.string().optional(),
  }),
});

export const collections = { artikel };
