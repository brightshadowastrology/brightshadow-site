import type { GlobalConfig } from 'payload'

export const AboutPageSection: GlobalConfig = {
  slug: 'about-page-section',
  fields: [
    { name: 'label', type: 'text', defaultValue: 'About Me' },
    { name: 'heading', type: 'text', defaultValue: "Hi, I'm Singithi!" },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    { name: 'buttonLabel', type: 'text', defaultValue: 'WORK WITH ME' },
    { name: 'buttonHref', type: 'text', defaultValue: '/services' },
  ],
}
