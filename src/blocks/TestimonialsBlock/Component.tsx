import React from "react";
import { getPayload } from "payload";
import config from "@payload-config";
import type { Testimonial } from "@/payload-types";
import { TestimonialsCarousel } from "./Component.client";

type TestimonialsBlockProps = {
  testimonials?: (number | Testimonial)[] | null;
};

export const TestimonialsBlock: React.FC<TestimonialsBlockProps> = async ({
  testimonials: selected,
}) => {
  let testimonials: Testimonial[] = [];

  if (selected && selected.length > 0) {
    testimonials = selected.filter(
      (t): t is Testimonial => typeof t !== "number" && t !== null,
    );
  } else {
    const payload = await getPayload({ config });
    const result = await payload.find({
      collection: "testimonials",
      sort: "order",
      limit: 100,
    });
    testimonials = result.docs;
  }

  if (!testimonials.length) return null;

  return <TestimonialsCarousel testimonials={testimonials} />;
};
