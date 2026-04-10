import type { Payload } from "payload";
import { seedTestimonialsCollection } from "./seed-collections";

export async function seedHomeTestimonials(payload: Payload) {
  const created = await seedTestimonialsCollection(payload);

  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Home page not found — skipping testimonials block.");
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
          blockType: "testimonials" as const,
          testimonials: created,
        },
      ],
    },
  });

  console.log("Home page testimonials block added.");
}
