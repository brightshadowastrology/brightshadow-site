import type { GlobalConfig } from 'payload'

export const HeroSection: GlobalConfig = {
  slug: 'hero-section',
  fields: [
    { name: 'headingBefore', type: 'text', defaultValue: 'Understand your stars, ' },
    { name: 'headingAccent', type: 'text', defaultValue: 'create' },
    { name: 'headingAfter', type: 'text', defaultValue: ' your future.' },
    {
      name: 'body',
      type: 'textarea',
      defaultValue:
        'I use astrology and therapeutic arts practices to help you explore your cosmic design, heal the past, and open new possibilities.',
    },
    { name: 'primaryButtonLabel', type: 'text', defaultValue: 'HOW IT WORKS' },
    { name: 'primaryButtonHref', type: 'text', defaultValue: '#how-it-works' },
    { name: 'secondaryButtonLabel', type: 'text', defaultValue: 'BOOK A CONSULTATION' },
    { name: 'secondaryButtonHref', type: 'text', defaultValue: '/booking' },
  ],
}
