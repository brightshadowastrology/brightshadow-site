import type { Payload } from "payload";

export async function seedAboutCTA(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "about" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log(
      "About page not found. Run seedAboutPage first to create the page.",
    );
    return;
  }

  const ctaBlock = {
    blockType: "cta" as const,
    line1: "Thank you for being here.",
    line2: "I'd love to be a part of your journey.",
    cta: {
      type: "custom" as const,
      url: "/services",
      label: "Book Your Free Consultation",
      newTab: false,
      appearance: "primary" as const,
    },
  };

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, ctaBlock],
    },
  });

  console.log("About page CTA block added.");
}
