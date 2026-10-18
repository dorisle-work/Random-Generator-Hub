import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { categoryCatalog, getToolsForCategory } from "@/lib/catalog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return categoryCatalog.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryCatalog.find((entry) => entry.slug === slug);
  if (!category) return {};
  return {
    title: category.seoTitle,
    description: category.description,
    alternates: { canonical: `/categories/${category.slug}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categoryCatalog.find((entry) => entry.slug === slug);
  if (!category) notFound();
  const tools = getToolsForCategory(category.slug);

  return (
    <>
      <Header />
      <main className="site-container directory-page">
        <nav className="breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">›</span><Link href="/tools">Tools</Link><span aria-hidden="true">›</span><span>{category.name}</span></nav>
        <div className="directory-hero directory-hero-left">
          <h1>{category.name}</h1>
          <p>{category.intro}</p>
        </div>
        <section className="category-tool-list" aria-label={`${category.name} tools`}>
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/${tool.slug}`}>
              <h2>{tool.name}</h2>
              <p>{tool.description}</p>
              <span>Try {tool.name} <span aria-hidden="true">→</span></span>
            </Link>
          ))}
        </section>
        <section className="directory-copy">
          <h2>Choose the right randomizer</h2>
          <p>Start with the tool that matches your decision. Use a wheel when you want a shared visual moment, a picker for a list, a team generator for groups, or a number tool when the range matters.</p>
        </section>
      </main>
      <Footer />
    </>
  );
}
