"use client";
import Link from "next/link";
import React from "react";

import type { Header } from "@/payload-types";

import BrandLogo from "@/components/UI/BrandLogo";
import { Button } from "@/components/UI/Button";
import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  console.log("Header data:", data);
  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between">
        <BrandLogo />
        <HeaderNav data={data} />
        <Button asChild>
          <Link href={data.cta?.url || "/services"}>
            {data.cta?.label || "Contact Us"}
          </Link>
        </Button>
      </div>
    </header>
  );
};
