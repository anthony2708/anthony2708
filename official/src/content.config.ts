import { defineCollection } from 'astro:content';
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import { docsSchema, i18nSchema } from '@astrojs/starlight/schema';
// import { blogSchema } from 'starlight-blog/schema'
// import { videosSchema } from 'starlight-videos/schemas'

export const collections = {
	docs: defineCollection({
		loader: docsLoader(),
		schema: docsSchema(),
	}),
	i18n: defineCollection({ loader: i18nLoader(), schema: i18nSchema() }),
};
