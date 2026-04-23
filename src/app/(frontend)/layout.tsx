import type { Metadata } from "next";
import { Lora, Quicksand } from "next/font/google";

import { Footer } from "@/globals/Footer/Component";
import { Header } from "@/globals/Header/Component";
import { CartProvider } from "@/context/CartContext";

import { getServerSideURL } from "@/utilities/getURL";
import { mergeOpenGraph } from "@/utilities/mergeOpenGraph";

import "./globals.css";

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
  title: "Bright Shadow Astrology",
  description: "Astrology and therapeutic arts practices.",
  metadataBase: new URL(getServerSideURL()),
  openGraph: mergeOpenGraph(),
  twitter: {
    card: "summary_large_image",
    creator: "@payloadcms",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${lora.variable} ${quicksand.variable}`}>
      <head>
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
