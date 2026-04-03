import type { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getSiteSettings } from "@/lib/payload-queries";
import "@/styles/globals.css";
import { CartProvider } from "@/context/CartContext";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-header",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bright Shadow Studio",
  description: "Astrology and therapeutic arts practices.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [siteSettings] = await Promise.all([getSiteSettings()]);

  return (
    <html lang="en" className={`${lora.variable} ${quicksand.variable}`}>
      <body>
        <CartProvider>
          <Navbar
            navItems={siteSettings.navItems ?? undefined}
            ctaLabel={siteSettings.navbarCtaLabel ?? undefined}
            ctaHref={siteSettings.navbarCtaHref ?? undefined}
          />
          <main>{children}</main>
          <Footer
            navItems={siteSettings.navItems ?? undefined}
            legalItems={siteSettings.footerLegalLinks ?? undefined}
            copyrightText={siteSettings.footerCopyright ?? undefined}
          />
        </CartProvider>
      </body>
    </html>
  );
}
