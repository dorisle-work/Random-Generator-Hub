import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Random Generator Hub — Random anything, instantly.",
    template: "%s | Random Generator Hub",
  },
  description:
    "Free online random generator tools: Spin the Wheel, Random Name Picker, Number Generator, Team Generator, Coin Flip & more. No signup required.",
  keywords: [
    "random generator", "spin the wheel", "random name picker",
    "random number generator", "coin flip", "dice roller",
    "team generator", "yes or no generator",
  ],
  openGraph: {
    type: "website",
    title: "Random Generator Hub",
    description: "Random anything, instantly. Free random generator tools.",
    siteName: "Random Generator Hub",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
