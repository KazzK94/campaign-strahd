
import { defineCollection, z } from 'astro:content'

const pcs = defineCollection({
	schema: z.object({
		name: z.string(),
		image: z.string()
	})
})

const npcs = defineCollection({
	schema: z.object({
		name: z.string(),
		description: z.string(),
		image: z.string(),
		status: z.enum(['alive', 'dead', 'vampire', 'unknown'])
	})
})

const lore = defineCollection({
	schema: z.object({
		title: z.string()
	})
})

export const collections = { pcs, npcs, lore }