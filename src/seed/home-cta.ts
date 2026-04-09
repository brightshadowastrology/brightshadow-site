import type { Payload } from "payload";

export async function seedHomeCTA(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });

  const ctaBlock = {
    blockType: "cta" as const,
    line1: "Your birthchart is a map.",
    line2: "Creative practice is how you navigate it.",
    cta: {
      type: "custom" as const,
      url: "/services",
      label: "Book Your First Consultation",
      newTab: false,
      appearance: "primary" as const,
    },
  };

  if (existing.docs.length > 0) {
    const page = existing.docs[0];
    const currentLayout = Array.isArray(page.layout) ? page.layout : [];

    await payload.update({
      collection: "pages",
      id: page.id,
      data: {
        layout: [...currentLayout, ctaBlock],
      },
    });
    console.log("Home page CTA block added.");
  } else {
    console.log(
      "Home page not found. Run seedHomeHero first to create the page.",
    );
  }
}
