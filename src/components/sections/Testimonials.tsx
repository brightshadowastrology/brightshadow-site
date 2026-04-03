"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import CarouselIndicator from "@/components/ui/CarouselIndicator";

const bgTexture = "/images/brushstrokes.jpg";

export interface TestimonialItem {
  quote: string;
  body: React.ReactNode;
  author: string;
}

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = testimonials.length;

  function prev() {
    setActiveIndex((i) => (i - 1 + total) % total);
  }

  function next() {
    setActiveIndex((i) => (i + 1) % total);
  }

  if (total === 0) return null;

  return (
    <section className="w-full flex flex-col">
      <div className="relative w-full bg-[var(--surface-dark)] overflow-hidden">
        {/* Background texture */}
        <Image
          src={bgTexture}
          alt=""
          aria-hidden
          fill
          unoptimized
          className="object-cover opacity-10 pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-between px-[var(--spacing-xxl)] py-[var(--gutter-size)]">
          {/* Prev arrow */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="shrink-0 w-10 h-10 flex items-center justify-center text-[color:var(--neutral-200)] opacity-70 hover:opacity-100 transition-opacity"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="text-2xl" />
          </button>

          {/* Content — grid-stack keeps height fixed to the tallest slide */}
          <div className="[display:grid] max-w-[75%] mx-auto w-full">
            {testimonials.map((t, i) => (
              <div
                key={i}
                aria-hidden={i !== activeIndex}
                className={`[grid-area:1/1] flex flex-col gap-[var(--spacing-xl)] items-center justify-start transition-opacity duration-300 ${
                  i === activeIndex
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none select-none"
                }`}
              >
                <h2 className="font-normal leading-normal text-[color:var(--neutral-200)] tracking-tight w-full">
                  {t.quote}
                </h2>

                <div className="text-[color:var(--neutral-200)] font-normal text-lg leading-normal space-y-[var(--spacing-xl)] w-full [&_p]:text-[color:var(--neutral-200)] [&_p]:mb-4">
                  {t.body}
                </div>
                <p className="text-[color:var(--neutral-200)] font-normal text-lg leading-normal space-y-[var(--spacing-xl)] w-full">
                  - {t.author}
                </p>

                <CarouselIndicator
                  count={total}
                  activeIndex={activeIndex}
                  onDotClick={setActiveIndex}
                />
              </div>
            ))}
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="shrink-0 w-10 h-10 flex items-center justify-center text-[var(--neutral-200)] opacity-70 hover:opacity-100 transition-opacity"
          >
            <FontAwesomeIcon icon={faChevronRight} className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
