import { getCachedGlobal } from "@/utilities/getGlobals";

import BrandLogo from "@/components/BrandLogo";
import Navigation from "@/components/Navigation";

import { CMSLink } from "@/components/Link";
import type { Header } from "@/payload-types";

export async function Header() {
  const headerData = (await getCachedGlobal("header", 1)()) as Header;

  const navItems: typeof headerData.navItems = headerData?.navItems || [];

  return (
    <header className="container relative z-20">
      <div className="py-[var(--spacing-md)] flex justify-between items-center">
        <BrandLogo />

        <Navigation navItems={navItems} variant="default" showCart={true} />

        {headerData.cta && <CMSLink size="default" {...headerData.cta} />}
      </div>
    </header>
  );
}
