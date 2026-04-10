import type { Payload } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export async function seedHomeHowItWorks(payload: Payload) {
  const existing = await payload.find({
    collection: "pages",
    where: { slug: { equals: "home" } },
    limit: 1,
  });

  if (existing.docs.length === 0) {
    console.log(
      "Home page not found. Run seedHomeHero first to create the page.",
    );
    return;
  }

  // Upload the studio image
  const imagePath = path.resolve(dirname, "../../public/images/studio.jpg");
  const imageBuffer = fs.readFileSync(imagePath);
  const imageBlob = new Blob([imageBuffer], { type: "image/jpeg" });
  const imageFile = new File([imageBlob], "studio.jpg", {
    type: "image/jpeg",
  });

  const uploadedMedia = await payload.create({
    collection: "media",
    data: {
      alt: "Art supplies and paint brushes in the Bright Shadow Studio",
    },
    file: {
      data: imageBuffer,
      mimetype: "image/jpeg",
      name: "studio.jpg",
      size: imageBuffer.length,
    },
  });

  const howItWorksBlock = {
    blockType: "splitContent" as const,
    eyebrow: "How It Works",
    intro:
      "Bright Shadow Studio is a space for meaning-making, where astrology, art, and inner work meet.",
    bodyText: {
      root: {
        type: "root",
        format: "" as const,
        indent: 0,
        version: 1,
        direction: "ltr" as const,
        children: [
          {
            type: "paragraph",
            format: "" as const,
            indent: 0,
            version: 1,
            direction: "ltr" as const,
            children: [
              {
                type: "text",
                format: 0,
                version: 1,
                text: "I believe insight alone doesn't create transformation. We change when understanding becomes felt, embodied, and expressed. My work brings together astrology and therapeutic art practices to help you move beyond interpretation and into lived experience.",
              },
            ],
          },
          {
            type: "paragraph",
            format: "" as const,
            indent: 0,
            version: 1,
            direction: "ltr" as const,
            children: [
              {
                type: "text",
                format: 0,
                version: 1,
                text: "Astrology offers a symbolic language for understanding the cycles, patterns, and potential in your chart. Art-making offers a way to enter into direct dialogue with and evolve those symbols, through image, materiality, and creative process.",
              },
            ],
          },
          {
            type: "paragraph",
            format: "" as const,
            indent: 0,
            version: 1,
            direction: "ltr" as const,
            children: [
              {
                type: "text",
                format: 0,
                version: 1,
                text: "Together, they open a deeper conversation with yourself, and ultimately, illuminate pathways into the life you were always meant to live.",
              },
            ],
          },
          {
            type: "paragraph",
            format: "" as const,
            indent: 0,
            version: 1,
            direction: "ltr" as const,
            children: [
              {
                type: "text",
                format: 0,
                version: 1,
                text: "No art experience is required. Just your curiosity, imagination, and whatever materials you have on hand.",
              },
            ],
          },
        ],
      },
    },
    link: {
      type: "custom" as const,
      url: "/services",
      label: "Work With Me",
      newTab: false,
      appearance: "primary" as const,
    },
    media: uploadedMedia.id,
    contentLeftSide: true,
  };

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, howItWorksBlock],
    },
  });

  console.log("Home page 'How It Works' block added.");
}
