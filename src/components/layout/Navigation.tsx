"use client";

import React from "react";
import Link from "next/link";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { cn } from "@/utilities/ui";
import CartIcon from "@/components/UI/CartIcon";

export interface NavItem {
  label: string;
  href: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "SHOP", href: "/shop" },
  { label: "BLOG", href: "/blog" },
];

interface NavigationProps {
  items?: NavItem[];
  variant?: "default" | "dark";
  className?: string;
  showCart?: boolean;
}

export default function Navigation({
  items = DEFAULT_NAV_ITEMS,
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
        {items.map((item) => (
          <NavigationMenu.Item key={item.href}>
            <NavigationMenu.Link asChild>
              <Link
                href={item.href}
                className={cn(
                  "whitespace-nowrap hover:opacity-70 transition-opacity duration-200 no-underline",
                  textColor,
                )}
              >
                {item.label}
              </Link>
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
  );
}
