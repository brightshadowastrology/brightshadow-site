import type { Payload } from "payload";

export async function seedFooter(payload: Payload) {
  await payload.updateGlobal({
    slug: "footer",
    data: {
      navItems: [
        {
          link: {
            type: "custom",
            url: "/about",
            label: "About",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/services",
            label: "Services",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/store",
            label: "Store",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/mission",
            label: "Mission",
            newTab: false,
          },
        },
      ],
      legalItems: [
        {
          link: {
            type: "custom",
            url: "/terms-and-conditions",
            label: "Terms and Conditions",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/privacy-policy",
            label: "Privacy Policy",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/faq",
            label: "FAQ",
            newTab: false,
          },
        },
      ],
      copyright: "© 2025. Bright Shadow Astrology. All Rights Reserved.",
    },
  });

  console.log("Footer seeded.");
}
