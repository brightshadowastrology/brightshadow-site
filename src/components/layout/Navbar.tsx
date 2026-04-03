import React from "react";
import Link from "next/link";
import BrandLogo from "../ui/BrandLogo";
import Navigation, { NavItem } from "./Navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/shared/lib/css";

interface NavbarProps {
  logoSrc?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
}

export default function Navbar({
  logoSrc,
  navItems,
  ctaLabel = "BOOK AN APPOINTMENT",
  ctaHref = "/booking",
  className,
}: NavbarProps) {
  return (
    <header
      className={cn(
        "flex items-center justify-between",
        "bg-[var(--surface-page)]",
        "h-[64px] px-[64px] py-[10px]",
        "overflow-clip w-full",
        className,
      )}
    >
      <BrandLogo logoSrc={logoSrc} />

      <Navigation items={navItems} variant="default" />

      <Button asChild>
        <Link href={ctaHref}>{ctaLabel}</Link>
      </Button>
    </header>
  );
}
