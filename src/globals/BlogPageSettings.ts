import type { GlobalConfig } from 'payload'

export const BlogPageSettings: GlobalConfig = {
  slug: 'blog-page-settings',
  fields: [
    { name: 'heading', type: 'text', defaultValue: 'Something is brewing.' },
    {
      name: 'body',
      type: 'textarea',
      defaultValue:
        'Essays, reflections, and astrological insights are on their way. Check back soon.',
    },
  ],
}
