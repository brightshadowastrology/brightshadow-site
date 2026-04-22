import { getCachedGlobal } from "@/utilities/getGlobals";
import React from "react";
import Image from "next/image";

import Navigation from "@/components/Navigation";
import type { Footer } from "@/payload-types";
import { CMSLink } from "@/components/Link";
import { cn } from "@/utilities/ui";

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)();

  const navItems = footerData?.navItems || [];
  const legalItems = footerData?.legalItems || [];

  return (
    <footer className={cn("bg-[var(--surface-darkest)]", "w-full")}>
      <div
        className={cn(
          "w-full max-w-[1440px] mx-auto",
          "flex flex-col gap-[var(--spacing-xl)] items-center",
          "overflow-clip px-[var(--gutter-size)] py-[var(--spacing-xl)]",
        )}
      >
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-[var(--spacing-lg)] md:gap-0">
          <Navigation navItems={navItems} variant="dark" showCart={false} />

          <Image
            src={"/images/logo.svg"}
            alt="Bright Shadow Studio"
            width={50}
            height={50}
            className="block shrink-0"
          />

          <nav className="flex justify-end items-center gap-[var(--spacing-xs)] md:gap-[var(--spacing-sm)] lg:gap-[var(--spacing-xl)]">
            {legalItems.map(({ link }, i) => {
              return (
                <CMSLink
                  className="w-fit text-[color:var(--neutral-100)] whitespace-nowrap"
                  key={i}
                  {...link}
                />
              );
            })}
          </nav>
        </div>

        <div className="w-full border-t border-[var(--border-divider)]" />

        <p
          className={cn(
            "flex flex-col md:flex-row",
            "font-normal",
            "text-[color:var(--primary-300)] text-center",
          )}
        >
          <span>{footerData?.copyright || "© 2024 Your Company"}</span>
          {/* <span>{` All Rights Reserved.`}</span> */}
        </p>
      </div>
    </footer>
  );
}
