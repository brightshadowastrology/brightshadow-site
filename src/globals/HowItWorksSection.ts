import type { GlobalConfig } from 'payload'

export const HowItWorksSection: GlobalConfig = {
  slug: 'how-it-works-section',
  fields: [
    { name: 'label', type: 'text', defaultValue: 'How It Works' },
    {
      name: 'heading',
      type: 'text',
      defaultValue:
        'Bright Shadow Studio is a space for meaning-making, where astrology, art, and inner work meet.',
    },
    {
      name: 'bodyParagraphs',
      type: 'array',
      fields: [{ name: 'text', type: 'textarea', required: true }],
    },
    { name: 'buttonLabel', type: 'text', defaultValue: 'WORK WITH ME' },
    { name: 'buttonHref', type: 'text', defaultValue: '/services' },
  ],
}
