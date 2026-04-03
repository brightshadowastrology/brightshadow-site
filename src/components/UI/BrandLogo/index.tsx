import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  className?: string;
  logoSrc?: string;
  logoAlt?: string;
  href?: string;
}

export default function BrandLogo({
  className,
  logoSrc = "/images/logo.svg",
  logoAlt = "Bright Shadow Studio",
  href = "/",
}: BrandLogoProps) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-[var(--spacing-xs)] no-underline ${className ?? ""}`}
    >
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={25}
        height={25}
        className="block shrink-0"
      />
      <span className="font-header font-normal text-type-lg leading-none tracking-[-0.9405px] whitespace-nowrap text-[color:var(--surface-action)]">
        Bright Shadow Studio
      </span>
    </Link>
  );
}
