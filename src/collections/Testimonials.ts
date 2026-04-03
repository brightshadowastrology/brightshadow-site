import type { CollectionConfig } from 'payload'

export const Testimonials: CollectionConfig = {
  slug: 'testimonials',
  admin: {
    useAsTitle: 'author',
  },
  fields: [
    { name: 'quote', type: 'text', required: true },
    { name: 'body', type: 'richText', required: true },
    { name: 'author', type: 'text', required: true },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
