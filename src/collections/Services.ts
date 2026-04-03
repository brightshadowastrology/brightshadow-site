import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
  slug: 'services',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'kicker', type: 'text' },
    { name: 'price', type: 'number' },
    { name: 'duration', type: 'text' },
    { name: 'description', type: 'richText' },
    {
      name: 'deliverables',
      type: 'array',
      fields: [{ name: 'text', type: 'text', required: true }],
    },
    {
      name: 'page',
      type: 'select',
      options: [
        { label: 'Home', value: 'home' },
        { label: 'Services', value: 'services' },
      ],
      required: true,
    },
    { name: 'order', type: 'number', defaultValue: 0 },
  ],
}
