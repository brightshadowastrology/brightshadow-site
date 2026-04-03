"use client";
import Link from "next/link";
import React from "react";

import type { Header } from "@/payload-types";

import BrandLogo from "@/components/UI/BrandLogo";
import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between">
        <BrandLogo />
        <HeaderNav data={data} />
      </div>
    </header>
  );
};
