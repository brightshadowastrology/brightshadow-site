import type { Payload } from "payload";

function lexicalDoc(paragraphs: string[]) {
  return {
    root: {
      children: paragraphs.map((text) => ({
        children: [
          {
            detail: 0,
            format: 0,
            mode: "normal",
            style: "",
            text,
            type: "text",
            version: 1,
          },
        ],
        direction: "ltr" as const,
        format: "" as const,
        indent: 0,
        type: "paragraph",
        version: 1,
      })),
      direction: "ltr" as const,
      format: "" as const,
      indent: 0,
      type: "root",
      version: 1,
    },
  };
}

export async function seedTestimonialsCollection(payload: Payload): Promise<number[]> {
  const testimonials = [
    {
      quote:
        '"I have had a few astrology readings over the years, but this reading was on a whole other level."',
      body: lexicalDoc([
        "Her vast astrological knowledge is apparent and so much of the explanations rang true, but that is not what stood out the most for me. It was this unique ability to match the vast astrological knowledge with this extreme sense of   and empathy. It was such a powerful, beautiful reading.",
        'The age old very important saying "Know Thyself" makes astrology so valuable to many, but this was more than just a reading for me, it was a heart opening.',
        "I cannot recommend Singithi enough. Hands down the most holistic astrology reading I have had.",
      ]),
      author: "Lia",
      order: 1,
    },
    {
      quote:
        '"Singithi has a gift for making the complex feel personal and clear."',
      body: lexicalDoc([
        "I came in with so many questions about my chart and left with a genuine sense of direction. The session felt collaborative rather than just informational.",
        "Highly recommend to anyone curious about astrology or at a crossroads in life.",
      ]),
      author: "Maya",
      order: 2,
    },
    {
      quote: '"An experience that genuinely shifted something in me."',
      body: lexicalDoc([
        "I was sceptical going in, but Singithi's approach disarmed me immediately. She connected dots I had never seen before and the breathwork element was unexpectedly powerful.",
        "I left feeling seen and grounded.",
      ]),
      author: "James",
      order: 3,
    },
    {
      quote: '"The most grounded, thoughtful reading I have ever received."',
      body: lexicalDoc([
        "Singithi balances technical astrological knowledge with real warmth. She never projected — she asked great questions and held space beautifully.",
        "I have already booked a follow-up session.",
      ]),
      author: "Priya",
      order: 4,
    },
    {
      quote: '"I felt held and understood throughout the entire session."',
      body: lexicalDoc([
        "What struck me most was how Singithi wove together timing, natal themes, and reflective prompts into something that felt truly integrated.",
        "It was not just a reading — it was a conversation with myself.",
      ]),
      author: "Sophie",
      order: 5,
    },
  ];

  const created = [];
  for (const t of testimonials) {
    const doc = await payload.create({ collection: "testimonials", data: t });
    created.push(doc.id);
  }

  console.log(`Seeded ${created.length} testimonials.`);
  return created;
}

export async function seedServicesCollection(payload: Payload): Promise<void> {
  const services = [
    {
      name: "The Quick Snapshot",
      price: 47,
      duration: "/ 15 minute session",
      description: lexicalDoc([
        "A focused fifteen-minute audio reading on a specific question in your natal chart.",
        "Bring one question — about a relationship, a career decision, a life area you're navigating. I'll look at what your chart has to say about it and record a clear, direct response.",
        "You will receive: An audio recording, to be emailed within three business days of purchase.",
        "Note: Quick Snapshots are for natal chart questions only. Compatibility charts (synastry, composite) are not available at this time.",
      ]),
      deliverables: [
        {
          text: "An audio recording, to be emailed within three business days of purchase.",
        },
      ],
      page: "services" as const,
      order: 1,
    },
    {
      name: "The Detailed Study",
      price: 125,
      duration: "/ 1 hour session",
      description: lexicalDoc([
        "A deep, one-hour exploration of your natal chart and a piece of art chosen to accompany you afterward.",
        "Your natal chart, also known as your birth chart, is a map of the solar system at the exact moment you took your first breath.",
        "You can expect: Natal chart interpretations of your most significant placements and planetary aspects. Understand the main themes, gifts, and challenges in your chart. Integrate what you've learned with an art-making prompt to help you access and dialogue with the symbols in your chart.",
        "After your session, you'll receive: An audio recording, to be emailed within three business days of purchase. A work of art selected for its resonance with your chart, along with a short note explaining its significance.",
      ]),
      deliverables: [
        {
          text: "An audio recording, to be emailed within three business days of purchase",
        },
        {
          text: "A work of art selected for its resonance with your chart, along with a short note explaining its significance",
        },
      ],
      page: "services" as const,
      order: 2,
    },
    {
      name: "The Finished Canvas",
      price: 750,
      duration: "/ 6 x 1 hour sessions",
      description: lexicalDoc([
        "Six sessions, six conversations, six artworks. A sustained container for going deeper.",
        "This option is for those who want to do real work with their chart over time — not just understand it, but create tangible change.",
        "Completed at your own pace over six weeks, each session is a unique blend of natal chart interpretation, timing techniques, breathwork, and art-making prompts. No two sessions are the same.",
        "You can expect: In-depth interpretation of your chart as a whole, including the lights, planets, lunar nodes, and the aspects between them. Discussion of your main themes, gifts, and challenges, with grounded guidance on how to work with what you have. Art-making prompts and therapeutic dialogue to help you evolve your relationship with the symbols in your chart. Breathwork and parts work exercises to deepen your intuition. Timing techniques (transits, profections, progressions, and more) to help you plan your next steps.",
      ]),
      deliverables: [
        {
          text: "In-depth interpretation of your chart as a whole, including the lights, planets, lunar nodes, and the aspects between them",
        },
        {
          text: "Discussion of your main themes, gifts, and challenges, with grounded guidance on how to work with what you have",
        },
        {
          text: "Art-making prompts and therapeutic dialogue to help you evolve your relationship with the symbols in your chart",
        },
        {
          text: "Breathwork and parts work exercises to deepen your intuition",
        },
        {
          text: "Timing techniques (transits, profections, progressions, and more) to help you plan your next steps",
        },
      ],
      page: "services" as const,
      order: 3,
    },
  ];

  for (const svc of services) {
    await payload.create({ collection: "services", data: svc });
  }

  console.log(`Seeded ${services.length} services.`);
}

export async function seedProductsCollection(payload: Payload): Promise<void> {
  const products = [
    {
      name: "Yearly Transits Forecast",
      kicker:
        "A personalized guide to the major astrological cycles shaping your year ahead.",
      stripeProductId: "prod_UFb3k6buoMszkb",
      stripePrices: [
        {
          stripePriceId: "price_1TH5rJHCg2DQIqeCEa8pW8Az",
          label: "One-time purchase",
          currency: "cad",
          unitAmount: 20,
          interval: "",
        },
      ],
      description: lexicalDoc([
        "A detailed written report of the major astrological transits affecting your chart over the coming year — personalised to your unique birth chart, not generic sun-sign forecasts.",
        "Bring one question — about a relationship, a career decision, a life area you're navigating. I'll look at what your chart has to say about it and record a clear, direct response.",
        "Your report will be emailed within three business days of purchase.",
        "Note: Quick Snapshots are for natal chart questions only. Compatibility charts (synastry, composite) are not available at this time.",
      ]),
      order: 1,
    },
    {
      name: "Natal Promise Workbook",
      kicker:
        "Explore the strengths, challenges, and deeper meaning of your natal chart placements.",
      stripeProductId: "prod_UFb4D0aOKdwd1T",
      stripePrices: [
        {
          stripePriceId: "price_1TH5sfHCg2DQIqeCtCTB7xJ7",
          label: "One-time",
          currency: "cad",
          unitAmount: 10,
          interval: "",
        },
      ],
      description: lexicalDoc([
        "A comprehensive self-guided workbook generated from the specifics of your birth chart — covering your placements, major aspects, and core themes, with reflective prompts throughout.",
        "Designed to be worked through at your own pace, this workbook gives you the tools to develop an ongoing, personal relationship with your chart.",
        "Your workbook will be emailed within three business days of purchase.",
      ]),
      order: 2,
    },
  ];

  for (const product of products) {
    await payload.create({ collection: "products", data: product });
  }

  console.log(`Seeded ${products.length} products.`);
}

export async function seedFAQItemsCollection(payload: Payload): Promise<void> {
  const generalFaqs = [
    {
      question:
        "What is the therapeutic arts? How does it intersect with astrology?",
      answer: lexicalDoc([
        "The therapeutic arts use creative modalities — drawing, painting, collage, movement — as a way to access and process inner experience. When combined with astrology, the symbols and archetypes in your chart become material to work with creatively, not just intellectually. Art-making allows you to embody what you learn, rather than simply understand it.",
      ]),
      category: "general" as const,
      order: 1,
    },
    {
      question:
        "Do I need to be an artist or have prior experience with making art to benefit?",
      answer: lexicalDoc([
        "Absolutely no experience is necessary. Art Therapy is for anyone and everyone who is wanting to use creativity as a form of healing and self-discovery. I work with clients who haven't picked up a paintbrush in over 20 years to people who are professional artists. All you need is an open heart and mind.",
      ]),
      category: "general" as const,
      order: 2,
    },
    {
      question: "What supplies do I need?",
      answer: lexicalDoc([
        "No special supplies are required. I encourage you to use whatever you already have at home — pencils, pens, coloured markers, old magazines for collage, paint, or even your phone's notes app. The goal is creative engagement, not artistic perfection.",
      ]),
      category: "general" as const,
      order: 3,
    },
    {
      question: "What can I expect during a session?",
      answer: lexicalDoc([
        "Each session is tailored to you and your chart. You can expect a combination of natal chart interpretation, reflective dialogue, and a creative prompt to help you engage with the material. Sessions are warm, grounded, and client-led — you set the pace and direction.",
      ]),
      category: "general" as const,
      order: 4,
    },
  ];

  const shopFaqs = [
    {
      question: "How are the reports personalised?",
      answer: lexicalDoc([
        "Every report is generated using the specific details of your birth chart — your exact birth date, time, and location. This means the insights reflect your unique planetary placements, not a generalised sun-sign forecast.",
      ]),
      category: "shop" as const,
      order: 1,
    },
    {
      question: "What do I need to provide to receive a report?",
      answer: lexicalDoc([
        "You will need to provide your birth date, birth time, and birth location. If you are unsure of your birth time, let me know — some reports can still be produced with an approximate time or a noon chart.",
      ]),
      category: "shop" as const,
      order: 2,
    },
    {
      question: "How long does it take to receive my report?",
      answer: lexicalDoc([
        "All reports and workbooks are delivered by email within three business days of purchase. If you need something sooner, please reach out and I will do my best to accommodate.",
      ]),
      category: "shop" as const,
      order: 3,
    },
    {
      question: "Can I purchase a report as a gift?",
      answer: lexicalDoc([
        "Yes! Reports make a thoughtful gift. After purchase, just send me the recipient's birth details and the email address to deliver it to. I can also include a personalised note if you'd like.",
      ]),
      category: "shop" as const,
      order: 4,
    },
  ];

  for (const faq of [...generalFaqs, ...shopFaqs]) {
    await payload.create({ collection: "faq-items", data: faq });
  }

  console.log(`Seeded ${generalFaqs.length + shopFaqs.length} FAQ items.`);
}
