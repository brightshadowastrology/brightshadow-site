import type { Payload } from "payload";

export async function seedHomeHero(payload: Payload) {
  const heroData = {
    type: "highImpact" as const,
    headingBefore: "Understand your stars,",
    headingAccent: "create",
    headingAfter: " your future.",
    bodyText:
      "I use astrology and therapeutic arts practices to help you explore your cosmic design, heal the past, and open new possibilities.",
    links: [
      {
        link: {
          type: "custom" as const,
          url: "/#how-it-works",
          label: "How It Works",
          newTab: false,
          appearance: "secondary" as const,
        },
      },
      {
        link: {
          type: "custom" as const,
          url: "/services",
          label: "Book a Consultation",
          newTab: false,
          appearance: "primary" as const,
        },
      },
    ],
  };

  await payload.create({
    collection: "pages",
    data: {
      title: "Home",
      slug: "home",
      hero: heroData,
      layout: [],
      _status: "published",
    },
  });
  console.log("Home page created with hero.");

  console.log(
    "Note: Upload the hero star-chart image via the admin panel and assign it to the Home page hero media field.",
  );
}
