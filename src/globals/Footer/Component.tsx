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
    <footer
      className={cn(
        "flex flex-col gap-[var(--spacing-xl)] items-center",
        "bg-[var(--surface-darkest)]",
        "overflow-clip px-[112px] py-[var(--spacing-xl)]",
        "w-full",
      )}
    >
      <div className="flex items-center justify-between w-full">
        <Navigation navItems={navItems} variant="dark" showCart={false} />

        <Image
          src={"/images/logo.svg"}
          alt="Bright Shadow Studio"
          width={50}
          height={50}
          className="block shrink-0"
        />

        <nav className="flex justify-end items-center gap-[var(--spacing-xl)]">
          {legalItems.map(({ link }, i) => {
            return (
              <CMSLink
                className="text-[color:var(--neutral-100)]"
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
          "font-normal",
          "text-[color:var(--primary-300)]",
          "whitespace-nowrap",
        )}
      >
        {footerData?.copyright || "© 2024 Your Company"}
      </p>
    </footer>
  );
}
