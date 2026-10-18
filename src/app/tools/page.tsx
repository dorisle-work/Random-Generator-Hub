import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { IconCoin, IconHash, IconTeam, IconUser, IconWheel, IconYesNo } from "@/components/Icons";
import { toolCatalog, type ToolSlug } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Free Random Generator Tools",
  description: "Browse free random tools for wheels, names, numbers, teams, coin flips, and quick decisions.",
  alternates: { canonical: "/tools" },
};

const icons: Record<ToolSlug, typeof IconWheel> = {
  "spin-the-wheel": IconWheel,
  "random-name-picker": IconUser,
  "random-number-generator": IconHash,
  "random-team-generator": IconTeam,
  "yes-or-no": IconYesNo,
  "coin-flip": IconCoin,
};

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="site-container directory-page">
        <div className="directory-hero">
          <h1>Free random tools for everyday decisions</h1>
          <p>Use a clear, quick randomizer for a classroom, team, game night, giveaway, or small tie-break.</p>
        </div>
        <section className="directory-grid" aria-label="All random tools">
          {toolCatalog.map((tool) => {
            const Icon = icons[tool.slug];
            return (
              <Link key={tool.slug} href={`/${tool.slug}`} className="directory-tool-card">
                <Icon size={28} color="#8675E8" />
                <h2>{tool.name}</h2>
                <p>{tool.description}</p>
                <span>Open tool <span aria-hidden="true">→</span></span>
              </Link>
            );
          })}
        </section>
        <section className="directory-copy">
          <h2>Designed to be simple and transparent</h2>
          <p>Each tool is free to use with no required sign-in. Use optional cloud sync only when you want to save a compatible list, and avoid entering sensitive information into any browser-based tool.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
