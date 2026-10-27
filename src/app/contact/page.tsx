import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { supportEmail } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact the team behind random.easy for support, privacy questions, or feedback about a randomizer.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="reading-page">
        <article className="reading-page-content">
          <Link href="/" className="back-link">← Back to tools</Link>
          <h1>Contact random.easy</h1>
          <p className="reading-page-lede">
            Have a question about a tool, cloud-saved list, privacy, or a suggestion for a useful randomizer? The easy team reads support messages sent to the address below.
          </p>
          <section>
            <h2>Support and feedback</h2>
            <p>
              Email us at <a href={`mailto:${supportEmail}`}>{supportEmail}</a>. Please include the tool name, the device/browser you are using, and a short description of the issue or idea.
            </p>
          </section>
          <section>
            <h2>Privacy requests</h2>
            <p>
              For questions about browser storage, optional sign-in, or cloud-saved data, email the same address with “Privacy” in the subject line. You can also review our <Link href="/privacy">Privacy Policy</Link> and <Link href="/terms">Terms of Use</Link>.
            </p>
          </section>
          <section>
            <h2>What we can help with</h2>
            <p>
              We can help explain a tool, investigate a reproducible bug, and consider feature suggestions. We cannot validate official draws, verify the fairness of a third-party contest, or provide advice for regulated or high-stakes decisions.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
