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

export async function seedServicesServices(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "services" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Services page not found — skipping services block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  const servicesBlock = {
    blockType: "content" as const,
    columns: [
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [
          {
            blockType: "sectionLabel" as const,
            title: "Services",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [
          {
            blockType: "richTextBlock" as const,
            content: lexicalDoc([
              "Clarity, creativity, and a map for what comes next.",
              "Choose your depth.",
            ]),
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "serviceCard" as const,
            title: "The Quick Snapshot",
            price: 47,
            currency: "CAD",
            duration: "~15 minute session",
            description: lexicalDoc([
              "A focused fifteen-minute audio reading on a specific question or area of your chart.",
              "Bring one question — about a specific decision, a life area you are navigating, or what to look at and be aware of in your chart.",
              "You will receive: An audio recording, to be emailed within three business days of purchase.",
              "Note: Quick Snapshots are for more direct questions only. Compatibility chart-opening components are not available at this time.",
            ]),
            link: {
              type: "custom" as const,
              label: "Book Now",
              url: "/book",
              appearance: "primary" as const,
            },
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "serviceCard" as const,
            title: "The Detailed Study",
            price: 125,
            currency: "CAD",
            duration: "1 hour session",
            description: lexicalDoc([
              "A deep, one-hour exploration of your natal chart and a piece of self-chosen context — recommending you a framework.",
              "This can be your Birth Chart, a map of the natal chart as it is understood to be your most important chart — or the Compatibility Chart, an art-making dialogue with an on-air-making prompt to help you access and dialogue with the symbols in your chart.",
              "After your session, you will receive:",
              "An audio recording, to be emailed within three business days of your session.",
              "A work of art selected for its resonance with your chart, along with a short note explaining its significance.",
            ]),
            link: {
              type: "custom" as const,
              label: "Book Now",
              url: "/book",
              appearance: "primary" as const,
            },
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "serviceCard" as const,
            title: "The Finished Canvas",
            price: 750,
            currency: "CAD",
            duration: "1-3 x 1-hour sessions",
            description: lexicalDoc([
              "Six sessions, six conversations, as private and as personal as they need to be — for those who want to do this with their own time — and rest well with their chart over time — to understand it, but remain, long-range.",
              "Completed at your own pace over six weeks, each session is a unique blend of natal chart interpretation, timing techniques, and art-making prompts. No two sessions are the same.",
              "You will receive:",
              "In-depth interpretation of your chart in its entirety, including the signs, planets, lunar nodes, and the aspects between them.",
              "Discussion of your main themes, gifts, and challenges, with grounded guidance on how to work with what you have.",
              "Art-making prompts and therapeutic exercises to help you evolve your relationship with the symbols and the symbols in your chart.",
              "Homework and one-to-one exercises to deepen your intuition.",
              "A network of practitioners (writers, architects, programmers, and more) that specialise in your chart — thirty days of support.",
              "After each session, you will receive:",
              "An audio recording emailed within three business days.",
              "A work of art selected for its resonance with your chart, along with a short note explaining its significance.",
            ]),
            link: {
              type: "custom" as const,
              label: "Book Now",
              url: "/book",
              appearance: "primary" as const,
            },
          },
        ],
      },
    ],
  };

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, servicesBlock],
    },
  });

  console.log("Services page services block added.");
}
