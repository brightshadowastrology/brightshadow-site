import type { Payload } from "payload";

export async function seedHeader(payload: Payload) {
  await payload.updateGlobal({
    slug: "header",
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
            url: "/shop",
            label: "Shop",
            newTab: false,
          },
        },
        {
          link: {
            type: "custom",
            url: "/blog",
            label: "Blog",
            newTab: false,
          },
        },
      ],
      cta: {
        type: "custom",
        url: "/services",
        label: "Book an Appointment",
        newTab: false,
        appearance: "primary",
      },
    },
  });

  console.log("Header seeded.");
}
