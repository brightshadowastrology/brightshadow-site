import React from "react";
import Image from "next/image";
import Navigation, { NavItem } from "./Navigation";
import { cn } from "@/utilities/ui";

interface LegalItem {
  label: string;
  href: string;
}

interface FooterProps {
  logoSrc?: string;
  navItems?: NavItem[];
  legalItems?: LegalItem[];
  copyrightText?: string;
  className?: string;
}

const DEFAULT_LEGAL_ITEMS: LegalItem[] = [
  { label: "TERMS AND CONDITIONS", href: "/terms" },
  { label: "PRIVACY POLICY", href: "/privacy" },
];

export default function Footer({
  logoSrc,
  navItems,
  legalItems = DEFAULT_LEGAL_ITEMS,
  copyrightText = "© 2025. Bright Shadow Studio. All Rights Reserved.",
  className,
}: FooterProps) {
  return (
    <footer
      className={cn(
        "flex flex-col gap-[var(--spacing-xl)] items-center",
        "bg-[var(--surface-darkest)]",
        "overflow-clip px-[112px] py-[var(--spacing-xl)]",
        "w-full",
        className,
      )}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-1">
          <Navigation
            items={navItems}
            variant="dark"
            className="whitespace-nowrap"
            showCart={false}
          />
        </div>

        <Image
          src={logoSrc ?? "/images/logo.svg"}
          alt="Bright Shadow Studio"
          width={50}
          height={50}
          className="block shrink-0"
        />

        <nav className="flex flex-1 justify-end items-center gap-[var(--spacing-xl)]">
          {legalItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "font-normal",
                "text-[color:var(--neutral-100)]",
                "whitespace-nowrap no-underline",
                "hover:opacity-70 transition-opacity duration-200",
              )}
            >
              {item.label}
            </a>
          ))}
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
        {copyrightText}
      </p>
    </footer>
  );
}
