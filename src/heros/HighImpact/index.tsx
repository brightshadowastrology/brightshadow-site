"use client";
import React from "react";

import type { Page } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import { Section } from "@/components/Section";
import Image from "next/image";
import { cn } from "@/utilities/ui";

const subtractImg = "/images/subtract.svg";

export const HighImpactHero: React.FC<Page["hero"]> = ({
  links,
  headingBefore,
  headingAccent,
  headingAfter,
  bodyText,
}) => {
  return (
    <Section
      className="relative h-[100vh] lg:h-[90vh] bg-[var(--surface-page)] px-[var(--gutter-size)] overflow-hidden"
      fadeIn={false}
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Bottom beige  */}
        <div
          className="absolute z-10 bottom-[-3px] left-0 w-full pointer-events-none"
          aria-hidden
        >
          <Image
            src={subtractImg}
            alt=""
            width={1440}
            height={200}
            unoptimized
            loading="eager"
            className="block w-full h-auto"
          />
        </div>

        {/* Top clip path */}
        <div
          className={cn(
            "absolute z-5",
            "right-[-10%] bottom-[-20%] w-[60vh] h-[60vh]",
            "md:right[25%] md:bottom-[-20%] md:w-[80vh] md:h-[80vh]",
            "lg:right-[-10%] lg:bottom-[-20%] lg:w-[100vh] lg:h-[100vh]",
            "pointer-events-none",
          )}
          aria-hidden
        >
          <svg width="0" height="0" className="absolute overflow-hidden">
            <defs>
              <clipPath id="astroClipPath" clipPathUnits="objectBoundingBox">
                <circle cx="0.5" cy="0.5" r="0.5" />
              </clipPath>
            </defs>
          </svg>
          <div
            style={{ clipPath: "url(#astroClipPath)" }}
            className="relative h-full overflow-hidden bg-[var(--primary-950)]"
          >
            <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-30%] bg-[url('/images/background_home.svg')] bg-repeat bg-[length:500px] animate-rotate-360" />
          </div>
        </div>
        {/* Content */}
        <div className="relative z-10 flex flex-col gap-[var(--spacing-lg)] items-start w-full lg:max-w-[50%] mt-[var(--spacing-xl)] pb-[10vh] md:pb-0 lg:mt-[20vh]">
          <h1 className="w-full font-normal text-display leading-tight text-[color:var(--primary-950)] whitespace-pre-wrap text-center lg:text-left">
            {headingBefore}
            <br />
            <span className="text-[color:var(--surface-action)]">
              {headingAccent}
            </span>
            {headingAfter}
          </h1>

          <div className="flex flex-col gap-[var(--spacing-lg)] items-start">
            {bodyText && (
              <p className="font-normal lg:text-2xl leading-normal text-[color:var(--primary-950)] w-full lg:max-w-[75%] text-center lg:text-left">
                {bodyText}
              </p>
            )}

            {Array.isArray(links) && links.length > 0 && (
              <div className="w-full flex flex-col md:flex-row lg:flex-row gap-[var(--spacing-md)] items-center">
                {links.map(({ link }, i) => (
                  <CMSLink
                    key={i}
                    {...link}
                    className="w-full lg:max-w-[250px]"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};
