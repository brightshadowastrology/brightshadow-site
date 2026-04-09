import { getCachedGlobal } from "@/utilities/getGlobals";
import React from "react";
import Image from "next/image";

import type { Footer } from "@/payload-types";

import { CMSLink } from "@/components/UI/Link";
import { cn } from "@/utilities/ui";

export async function Footer() {
  const footerData: Footer = await getCachedGlobal("footer", 1)();

  const navItems = footerData?.navItems || [];
  const legalItems = footerData?.legalItems || [];

  return (
    // <footer className="mt-auto border-t bg-[var(--primary-950)] dark:bg-card text-white">
    //   <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between">
    //     <BrandLogo />

    //     <div className="flex flex-col-reverse items-start md:flex-row gap-4 md:items-center">
    //       <nav className="flex flex-col md:flex-row gap-4">
    //         {navItems.map(({ link }, i) => {
    //           return <CMSLink key={i} {...link} />;
    //         })}
    //       </nav>
    //       <nav className="flex flex-col md:flex-row gap-4">
    //         {legalItems.map(({ link }, i) => {
    //           return <CMSLink key={i} {...link} />;
    //         })}
    //       </nav>
    //       <div className="text-sm text-gray-400">
    //         {footerData?.copyright || "© 2024 Your Company"}
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer
      className={cn(
        "flex flex-col gap-[var(--spacing-xl)] items-center",
        "bg-[var(--surface-darkest)]",
        "overflow-clip px-[112px] py-[var(--spacing-xl)]",
        "w-full",
      )}
    >
      <div className="flex items-center justify-between w-full">
        <nav className="flex flex-1 items-center gap-[var(--spacing-xl)]">
          {navItems.map(({ link }, i) => {
            return (
              <CMSLink
                className="text-[color:var(--neutral-100)]"
                key={i}
                {...link}
              />
            );
          })}
        </nav>

        <Image
          src={"/images/logo.svg"}
          alt="Bright Shadow Studio"
          width={50}
          height={50}
          className="block shrink-0"
        />

        <nav className="flex flex-1 justify-end items-center gap-[var(--spacing-xl)]">
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
