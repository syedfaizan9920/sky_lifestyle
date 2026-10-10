import type { Metadata } from "next";
import { CartProvider } from "@/components/cart-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Sky Lifestyle | Style Starts Here.",
    template: "%s | Sky Lifestyle",
  },
  description:
    "Discover the Sky Lifestyle edit of sunglasses, watches, shoes, bags, wallets, caps, jewellery, and perfumes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <a
            href="#main-content"
            className="sr-only z-50 bg-white p-3 text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </CartProvider>
      </body>
    </html>
  );
}
