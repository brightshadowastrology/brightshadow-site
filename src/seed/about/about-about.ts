import type { Payload } from "payload";

export async function seedAboutAbout(payload: Payload) {
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
                text: "I am an astrologer with a passion for helping people gain deeper insight into their lives through the symbolic languages of both astrology and therapy.",
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
                text: "I hold a BFA in Drawing and Painting from OCAD University, as well as certifications from the Canadian Institute of Art Therapy. On the astrology side, I've studied with luminaries of the astrological community. Since 2021, I've led online workshops, written horoscopes for publications, and organized gatherings for people who love to learn, share, and talk about astrology together — and through all of it, I discovered my passion for helping individuals find their own path through the stars.",
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
                text: "A fortunate aspect in my own life revealed to me how astrology can be more than a source of information — it can be, like other practices, a space that helps us make sense of what might otherwise feel like chaos. That's what Bright Shadow Astrology is. I took the name from a note in my own birth chart — a reminder that both light and shadow are essential parts of what it means to grow.",
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
                text: "Founded in 2020, Bright Shadow Astrology was born during a challenging and turbulent time in the world — which felt like exactly the right moment for it.",
              },
            ],
          },
        ],
      },
    },
    link: {
      type: "custom" as const,
      url: "/services",
      label: "Learn More",
      newTab: false,
      appearance: "primary" as const,
    },
    contentLeftSide: true,
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

  console.log("About page 'About' block added.");
}
