"use client";
import React from "react";

import type { Page } from "@/payload-types";

import { CMSLink } from "@/components/Link";
import { Section } from "@/components/Section";
import Image from "next/image";

const clipPathImg = "/images/clip_path.svg";
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
      className="relative h-auto lg:h-[80vh] bg-[var(--surface-page)] px-[var(--gutter-size)] mt-[var(--spacing-3xl)] overflow-visible"
      fadeIn={false}
    >
      <div
        className="absolute z-10 top-[-100px] right-0 w-[40%] h-[120%] pointer-events-none"
        aria-hidden
      >
        <svg width="0" height="0" className="absolute overflow-hidden">
          <defs>
            <clipPath id="astroClipPath" clipPathUnits="objectBoundingBox">
              {/* <path
                d="M0 0H467V695H200C89.543 695 0 605.457 0 495V0Z"
                transform="scale(0.002141, 0.001439)"
              /> */}

              <path
                d="M626.833 111H627V613H626.983V693H389.983C362.369 693 339.984 670.614 339.983 643V613H100C44.7717 613 0.000202066 568.228 0 513V211C0.000199553 155.772 44.7716 111 100 111H154.833V100C154.833 44.7716 199.605 1.28853e-06 254.833 0H626.833V111Z"
                transform="scale(0.001595, 0.001443)"
              />
            </clipPath>
          </defs>
        </svg>
        <div
          style={{ clipPath: "url(#astroClipPath)" }}
          className="relative h-full overflow-hidden bg-[var(--primary-950)]"
        >
          <div className="absolute w-[200%] h-[200%] left-[-50%] top-[-30%] bg-[url('/images/background_home.svg')] bg-repeat bg-[length:500px] [animation:rotate-360_240s_linear_infinite]" />
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto">
        {/* Bottom beige  */}
        <div
          className="absolute z-5 bottom-[-1px] left-0 w-full pointer-events-none"
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
