import type { Payload } from "payload";

export async function seedShopFAQs(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "shop" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Shop page not found — skipping FAQs block.");
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
          category: "shop",
        },
      ],
    },
  });

  console.log("Shop page FAQs block added.");
}
