import type { Payload } from "payload";

export async function seedAboutApproach(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "about" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("About page not found — skipping approach block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  const approachBlock = {
    blockType: "content" as const,
    columns: [
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [
          {
            blockType: "sectionLabel" as const,
            title: "My Approach",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "Style",
            description:
              "My readings draw from archetypal astrology, interpreting chart symbolism with technical precision and a psychologically-informed, culturally-sensitive perspective.",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "House System",
            description:
              "During consultations, readings are combined with the Whole Sign house system. In Whole Sign houses, the entire sign is treated as a single house — making aspects and timing more consistent and personally accurate.",
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "oneThird" as const,
        blocks: [
          {
            blockType: "card" as const,
            title: "Philosophy",
            description:
              "In drawing on astrology as a foundation, I take a co-creative approach — treating my clients as the experts on their own thoughts, feelings, and experiences. I bring chart insights without judgment.",
          },
        ],
      },
    ],
  };

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, approachBlock],
    },
  });

  console.log("About page 'My Approach' block added.");
}
