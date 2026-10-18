import type { Metadata } from "next";
import "./globals.css";
import { ConsentAndMonetization } from "@/components/ConsentAndMonetization";
import { siteName, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "random.easy — Random anything, instantly. by easy",
    template: "%s | random.easy",
  },
  description:
    "Free random generator tools by easy. Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
  keywords: [
    "random generator", "spin the wheel", "random name picker",
    "random number generator", "coin flip", "team generator",
    "yes or no generator", "random easy", "easy tools",
  ],
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    title: "random.easy — Random anything, instantly.",
    description: "Free random generator tools by easy. No signup required.",
    siteName: `${siteName} by easy.io.vn`,
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ConsentAndMonetization />
      </body>
    </html>
  );
}
