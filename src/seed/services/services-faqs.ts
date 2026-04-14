import type { Payload } from "payload";

export async function seedServicesFAQs(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "services" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Services page not found — skipping FAQs block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [
        ...currentLayout,
        {
          blockType: "faqs" as const,
          category: "general",
        },
      ],
    },
  });

  console.log("Services page FAQs block added.");
}
