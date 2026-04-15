"use client";
import React from "react";

import { Media } from "@/components/Media";
import type { Page } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import Image from "next/image";

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
    <section className="w-full relative h-[80vh] bg-[var(--surface-page)]">
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
      <div className="relative z-10 flex flex-col gap-[var(--spacing-lg)] items-start max-w-[50%] pt-[var(--spacing-3xl)] ml-[10%]">
        <h1 className="font-normal text-display leading-tight text-[color:var(--primary-950)] whitespace-pre-wrap">
          {headingBefore}
          <br />
          <span className="text-[color:var(--surface-action)]">
            {headingAccent}
          </span>
          {headingAfter}
        </h1>

        <div className="flex flex-col gap-[var(--spacing-lg)] items-start">
          {bodyText && (
            <p className="font-normal text-2xl leading-normal text-[color:var(--primary-950)] max-w-[75%]">
              {bodyText}
            </p>
          )}

          {Array.isArray(links) && links.length > 0 && (
            <div className="flex gap-[var(--spacing-md)] items-center">
              {links.map(({ link }, i) => (
                <CMSLink key={i} {...link} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
