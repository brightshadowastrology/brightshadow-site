"use client";

import React, { useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import { cn } from "@/utilities/ui";
import CartIcon from "./CartIcon";
import type { Header as HeaderType } from "@/payload-types";
import { CMSLink } from "@/components/Link";

interface NavigationProps {
  navItems?: HeaderType["navItems"];
  variant?: "default" | "dark";
  className?: string;
  showCart?: boolean;
}

export default function Navigation({
  navItems,
  variant = "default",
  className,
  showCart = true,
}: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const textColor =
    variant === "dark"
      ? "text-[color:var(--neutral-100)]"
      : "text-[color:var(--neutral-800)]";

  return (
    <>
      {/* Desktop nav — hidden on mobile */}
      <NavigationMenu.Root
        className={
          variant === "default" ? `hidden md:block` : `w-full md:w-fit`
        }
      >
        <NavigationMenu.List
          className={cn(
            "flex py-[var(--spacing-lg)] md:py-none items-center",
            "gap-[var(--spacing-xs)] md:gap-[var(--spacing-sm)] lg:gap-[var(--spacing-xl)]",
            "list-none m-0 p-0 font-normal",
            variant === "dark"
              ? "w-full justify-between gap-0 md:w-fit md:justify-start items-center"
              : "",
            className,
          )}
        >
          {navItems?.map(({ link }: (typeof navItems)[number], i: number) => (
            <NavigationMenu.Item key={link.label}>
              <NavigationMenu.Link asChild>
                <CMSLink
                  key={i}
                  {...link}
                  className={cn(
                    "whitespace-nowrap hover:opacity-70 transition-opacity duration-200 no-underline",
                    textColor,
                  )}
                />
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
          {showCart && (
            <NavigationMenu.Item>
              <CartIcon />
            </NavigationMenu.Item>
          )}
        </NavigationMenu.List>
      </NavigationMenu.Root>

      {/* Mobile hamburger button — hidden on desktop */}
      <div
        className={`flex items-center gap-[var(--spacing-sm)] ${variant === "default" ? "md:hidden" : "hidden"}`}
      >
        <button
          aria-label="Open navigation menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen(true)}
          className={cn(
            "p-[var(--spacing-xs)] rounded-[var(--radius-md)]",
            "transition-opacity hover:opacity-70",
            textColor,
          )}
        >
          <HamburgerMenuIcon width={24} height={24} />
        </button>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className={`fixed inset-0 z-50 flex flex-col bg-[color:var(--surface-page)] ${variant === "default" ? "md:hidden" : ""}`}
        >
          {/* Top bar with close button */}
          <div className="flex justify-end items-center px-[var(--spacing-lg)] py-[var(--spacing-md)]">
            <button
              aria-label="Close navigation menu"
              onClick={() => setMobileOpen(false)}
              className="p-[var(--spacing-xs)] rounded-[var(--radius-md)] transition-opacity hover:opacity-70 text-[color:var(--text-heading)]"
            >
              <Cross2Icon width={24} height={24} />
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col gap-[var(--spacing-xl)] px-[var(--spacing-lg)] py-[var(--spacing-2xl)]">
            {navItems?.map(({ link }: (typeof navItems)[number], i: number) => (
              <CMSLink
                key={i}
                {...link}
                //onClick={() => setMobileOpen(false)}
                className={cn(
                  "text-[color:var(--text-heading)]",
                  "font-[family-name:var(--font-header)]",
                  "text-[length:var(--type-h3)]",
                  "hover:opacity-70 transition-opacity duration-200 no-underline",
                )}
              />
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
