import Link from "next/link";
import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

type Section = { heading: string; body: ReactNode };

export default function InfoPage({ title, intro, sections }: { title: string; intro: string; sections: Section[] }) {
  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh" }}>
        <article style={{ maxWidth: 760, margin: "0 auto", padding: "72px 24px" }}>
          <Link href="/" className="back-link">← Back to tools</Link>
          <h1 style={{ fontSize: "clamp(2.2rem, 6vw, 3.5rem)", margin: "24px 0 16px" }}>{title}</h1>
          <p style={{ color: "var(--text-muted)", fontSize: "1.12rem", maxWidth: "64ch" }}>{intro}</p>
          <div style={{ display: "grid", gap: 28, marginTop: 44 }}>
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 style={{ fontSize: "1.3rem", marginBottom: 8 }}>{section.heading}</h2>
                <p style={{ color: "var(--text-muted)", maxWidth: "70ch" }}>{section.body}</p>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
