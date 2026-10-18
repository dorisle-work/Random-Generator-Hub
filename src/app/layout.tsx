import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { ConsentAndMonetization } from "@/components/ConsentAndMonetization";
import { siteName, siteUrl } from "@/lib/site";

// Publisher IDs are designed to be public. The environment value lets each
// deployment override this, while the fallback keeps the verification tag in
// every production build (including static/Vercel builds without env config).
const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-2110256511208643";

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
  // Lets AdSense identify this site during its verification and review flow.
  other: adsenseClient
    ? { "google-adsense-account": adsenseClient }
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
      <Script
        id="adsense-script"
        async
        strategy="afterInteractive"
        crossOrigin="anonymous"
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
      />
    </html>
  );
}
