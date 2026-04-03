import type { GlobalConfig } from 'payload'

export const HomeAboutSection: GlobalConfig = {
  slug: 'home-about-section',
  fields: [
    { name: 'label', type: 'text', defaultValue: 'About Me' },
    { name: 'heading', type: 'text', defaultValue: "Hi, I'm Singithi!" },
    {
      name: 'paragraphs',
      type: 'array',
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    { name: 'buttonLabel', type: 'text', defaultValue: 'Learn More' },
    { name: 'buttonHref', type: 'text', defaultValue: '/about' },
  ],
}
