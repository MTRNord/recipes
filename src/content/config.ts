import { defineCollection, z } from 'astro:content';
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({
		schema: (context) => {
			return docsSchema()(context).extend({
				info: z.optional(z.array(z.object({
					title: z.optional(z.string()),
					text: z.string()
				}))),
				description: z.optional(z.string())
			})
		}
	}),
	i18n: defineCollection({ type: 'data', schema: i18nSchema() }),
};
