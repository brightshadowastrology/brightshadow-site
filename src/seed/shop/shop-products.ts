import type { Payload } from "payload";
import { block } from "sharp";

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

export async function seedShopProducts(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "shop" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log("Shop page not found — skipping shop products block.");
    return;
  }

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  const shopProductsBlock = {
    blockType: "content" as const,
    columns: [
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [
          {
            blockType: "sectionLabel" as const,
            title: "Shop",
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
              "Want to explore your chart on your own terms?",
              "These workbooks are generated from the details of your unique birth chart — not generic astrology, but insights that belong specifically to you. Each one includes reflective prompts to help you move from intellectual understanding to something more personal and lived.",
            ]),
          },
        ],
      },
      {
        blockType: "column" as const,
        size: "full" as const,
        blocks: [{ blockType: "products" as const }],
      },
    ],
  };

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, shopProductsBlock],
    },
  });

  console.log("Shop page shop products block added.");
}
