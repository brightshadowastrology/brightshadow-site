import type { Payload } from "payload";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export async function seedHomeAbout(payload: Payload) {
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

  const aboutBlock = {
    blockType: "splitContent" as const,
    eyebrow: "About Me",
    intro: "Hi, I'm Singithi!",
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
                text: "I'm an astrologer with a passion for helping people gain insight into their lives through the symbolic language of astrology. I have been practicing Western archetypal astrology for several years, and during this time, I have helped countless individuals find direction, purpose, and meaning in their lives.",
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
                text: "My approach to astrology combines the psychological approach to Western astrology, which I blend with the ancient techniques of Hellenistic teaching to offer a comprehensive and personalized reading to each of my clients.",
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
                text: "Whether you are seeking guidance on love and relationships, career and finances, health and wellness, or personal growth and spirituality, I am here to help.",
              },
            ],
          },
        ],
      },
    },
    link: {
      type: "custom" as const,
      url: "/about",
      label: "Learn More",
      newTab: false,
      appearance: "primary" as const,
    },
    media: "/images/headshot.jpg",
    contentLeftSide: false,
  };

  const page = existing.docs[0];
  const currentLayout = Array.isArray(page.layout) ? page.layout : [];

  await payload.update({
    collection: "pages",
    id: page.id,
    data: {
      layout: [...currentLayout, aboutBlock],
    },
  });

  console.log("Home page 'About' block added.");
}
