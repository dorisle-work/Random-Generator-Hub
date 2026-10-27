import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "How random.easy works",
  description:
    "Learn how random.easy generates browser-based results, how to set up a fair draw, and when to use a documented official process instead.",
  alternates: { canonical: "/how-random-works" },
};

export default function HowRandomWorksPage() {
  return (
    <>
      <Header />
      <main className="reading-page">
        <article className="reading-page-content">
          <Link href="/" className="back-link">← Back to tools</Link>
          <h1>How random.easy makes a random choice</h1>
          <p className="reading-page-lede">
            A useful randomizer should make the rules visible before it shows a result. This guide explains what happens in the browser, how to prepare a fair draw, and where a lightweight web tool should not be used.
          </p>

          <section>
            <h2>The result is made in your browser</h2>
            <p>
              random.easy generates results on the device that is running the tool. For number selection, list picking, shuffling, teams, wheels, and coin flips, the app uses the browser&apos;s Web Crypto random source when it is available. That source is designed to supply unpredictable values for web applications.
            </p>
            <p>
              For a number range, the app also rejects out-of-range values before mapping a result. This avoids giving an accidental extra chance to the first few numbers when a range does not divide evenly into the available random values. Older browsers that do not expose Web Crypto use their standard browser random function instead.
            </p>
          </section>

          <section>
            <h2>Fair starts with the list</h2>
            <p>
              The software can only randomize the choices that you enter. Before a draw, check that each person or option appears once, unless you intentionally want a weighted result. For a team split, check spelling and remove duplicates. For a wheel, agree whether a winner is removed after it is selected.
            </p>
            <ul>
              <li>State the rule before generating a result.</li>
              <li>Let everyone who is affected see the same input list.</li>
              <li>Use one draw rather than repeating until a preferred answer appears.</li>
              <li>Save or copy the result when the group needs a simple record.</li>
            </ul>
          </section>

          <section>
            <h2>What each tool is designed for</h2>
            <p>
              The wheel and name picker work well when a group wants a visible choice from a list. The number generator is useful for bounded samples and games. The team generator balances the number of people in each group, while a coin flip and Yes/No tool are deliberately small tie-breakers.
            </p>
            <p>
              These tools do not assess people, score candidates, balance skills, verify identity, or guarantee a legal outcome. When the stakes are high, the process needs more than a random draw.
            </p>
          </section>

          <section>
            <h2>When not to use a public random tool</h2>
            <p>
              Do not use random.easy for passwords, recovery codes, encryption keys, gambling, regulated prize draws, employment decisions, medical choices, financial decisions, safety decisions, or any process that needs an independently auditable record. Use the specialist procedure, policy, or system that applies to that situation instead.
            </p>
          </section>

          <section>
            <h2>Privacy and saved lists</h2>
            <p>
              Most tools work directly in the browser. Avoid putting sensitive or personally identifying information into a shared device. If you choose to sign in and save a list, review the <Link href="/privacy">Privacy Policy</Link> before saving it to cloud storage.
            </p>
          </section>

          <section>
            <h2>Choose a tool</h2>
            <p>
              Ready to use a randomizer? Browse the <Link href="/tools">full tool directory</Link>, or start with the <Link href="/spin-the-wheel">wheel</Link>, <Link href="/random-name-picker">name picker</Link>, <Link href="/random-number-generator">number generator</Link>, or <Link href="/random-team-generator">team generator</Link>.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}
