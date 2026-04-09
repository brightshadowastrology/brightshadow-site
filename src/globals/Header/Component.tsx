import React from "react";
import Link from "next/link";
import { getCachedGlobal } from "@/utilities/getGlobals";

import BrandLogo from "@/components/UI/BrandLogo";
import { Button } from "@/components/UI/Button";
import { HeaderNav } from "./Nav";

import type { Header } from "@/payload-types";

export async function Header() {
  const headerData: Header = await getCachedGlobal("header", 1)();

  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between items-center">
        <BrandLogo />
        <HeaderNav data={headerData} />
        <Button asChild>
          <Link href={headerData.cta?.url || "/services"}>
            {headerData.cta?.label || "Contact Us"}
          </Link>
        </Button>
      </div>
    </header>
  );
}
