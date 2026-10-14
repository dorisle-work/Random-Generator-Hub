import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
    siteName: "random.easy by easy.io.vn",
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
