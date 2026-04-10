import type { Payload } from "payload";

export async function seedHomeQualifier(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });

  const statementBlock = {
    blockType: "statement" as const,
    topLabel: "IF YOU'RE...",
    conditions: [
      { text: "going through a life transition and looking for clarity" },
      { text: "need to build confidence as you make a big decision" },
      { text: "looking to feel calmer and centered in your body" },
      { text: "longing to feel more connected to your creative spark" },
    ],
    bottomLabel: "...YOU'VE COME TO THE RIGHT PLACE",
  };

  if (existing.docs.length > 0) {
    const page = existing.docs[0];
    const currentLayout = Array.isArray(page.layout) ? page.layout : [];

    await payload.update({
      collection: "pages",
      id: page.id,
      data: {
        layout: [...currentLayout, statementBlock],
      },
    });
    console.log("Home page qualifier block added.");
  } else {
    console.log(
      "Home page not found. Run seedHomeHero first to create the page.",
    );
  }
}
