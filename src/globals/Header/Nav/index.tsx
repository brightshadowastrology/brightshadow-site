"use client";

import React from "react";

import type { Header as HeaderType } from "@/payload-types";

import { CMSLink } from "@/components/UI/Link";

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems: typeof data.navItems = data?.navItems || [];

  return (
    <nav className="flex items-center gap-[var(--spacing-xl)] py-[var(--spacing-lg)]">
      {navItems.map(({ link }: (typeof navItems)[number], i: number) => {
        return <CMSLink key={i} {...link} />;
      })}
    </nav>
  );
};
