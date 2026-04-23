import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  logoAlt?: string;
  href?: string;
}

export default function BrandLogo({
  className,
  logoAlt = "Bright Shadow Astrology",
  href = "/",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-[var(--spacing-xs)] no-underline ${className ?? ""}`}
    >
      <Image
        src="/images/logo.svg"
        alt={logoAlt}
        width={25}
        height={25}
        className="block shrink-0"
      />
      <span className="font-header font-normal text-type-lg leading-none tracking-[-0.9405px] whitespace-nowrap text-[color:var(--surface-action)]">
        Bright Shadow Astrology
      </span>
    </Link>
  );
}
