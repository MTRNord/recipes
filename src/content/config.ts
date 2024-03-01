import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: docsSchema({
			extend: z.object({
				info: z.optional(z.array(z.object({
					title: z.optional(z.string()),
					text: z.string()
				}))),
				description: z.optional(z.string()),
				recipe: z.optional(z.boolean())
			})
		})
	}),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
