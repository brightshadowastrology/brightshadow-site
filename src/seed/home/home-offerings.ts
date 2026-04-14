import type { Payload } from "payload";

export async function seedHomeOfferings(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Home page not found — skipping offerings block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  const offeringsBlock = {
    blockType: "content" as const,
    columns: [
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [
          {
            blockType: "sectionLabel" as const,
            title: "Offerings",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "Astrological Consultations",
            description:
              "Each session is a blend of natal chart interpretation, timing techniques, predictive astrology, and life guidance — giving you insight specific to you.",
            href: "/services/consultations",
            imageSrc: "/images/offerings-consultations.jpg",
            imageAlt:
              "Astrological consultation setting with herbs and candles",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "Reports and Workbooks",
            description:
              "Want to explore your chart and timing on your own terms? My reports and workbooks are generated directly from your birth chart — giving you something lasting and specific to you.",
            href: "/services/reports",
            imageSrc: "/images/offerings-reports.jpg",
            imageAlt: "Astrological reports and workbooks laid on a desk",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "Coaching",
            description:
              "Each session is a unique blend of natal chart interpretation, timing techniques, breathwork, and art therapy prompts — giving you tools that resonate with you.",
            href: "/services/coaching",
            imageSrc: "/images/offerings-coaching.jpg",
            imageAlt: "A woman in a contemplative coaching session",
          },
        ],
      },
    ],
  };

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, offeringsBlock],
    },
  });

  console.log("Home page offerings block added.");
}
