"use client";
import React from "react";

import { Media } from "@/components/Media";
import type { Page } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import Image from "next/image";
import { Section } from "@/components/Section";

const subtractImg = "/images/subtract.svg";

export const HighImpactHero: React.FC<Page["hero"]> = ({
  links,
  media,
  headingBefore,
  headingAccent,
  headingAfter,
  bodyText,
}) => {
  return (
    <Section className="relative h-auto lg:h-[80vh] bg-[var(--surface-page)] px-[var(--gutter-size)] mt-[var(--spacing-3xl)]">
      <div className="max-w-[1440px] mx-auto">
        {/* Bottom beige  */}
        <div
          className="absolute bottom-[-1px] left-0 w-full pointer-events-none"
          aria-hidden
        >
          <Image
            src={subtractImg}
            alt=""
            width={1440}
            height={200}
            unoptimized
            className="block w-full h-auto"
          />

          {/* <Media fill resource={media} imgClassName={"object-cover"} /> */}
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-[var(--spacing-lg)] items-start w-full lg:max-w-[50%] pt-[var(--spacing-xl)] pb-[10vh] md:pb-0 lg:pt-[var(--spacing-3xl)] lg:ml-[5%]">
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
