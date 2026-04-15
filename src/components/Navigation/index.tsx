"use client";

import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/utilities/ui";
import CartIcon from "@/components/CartIcon";
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
  const textColor =
    variant === "dark"
      ? "text-[color:var(--neutral-100)]"
      : "text-[color:var(--neutral-800)]";

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List
        className={cn(
          "flex items-center gap-[var(--spacing-xl)] py-[var(--spacing-lg)]",
          "list-none m-0 p-0",
          "font-normal",
          className,
        )}
      >
        {navItems?.map(({ link }: (typeof navItems)[number], i: number) => {
          return (
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
          );
        })}

        {showCart && (
          <NavigationMenu.Item>
            <CartIcon />
          </NavigationMenu.Item>
        )}
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
