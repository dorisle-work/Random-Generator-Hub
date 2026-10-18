import Link from "next/link";
import type { ToolSlug } from "@/lib/catalog";

type Guide = {
  summary: string;
  steps: string[];
  useCases: string[];
  faqs: Array<{ question: string; answer: string }>;
};

const guides: Record<ToolSlug, Guide> = {
  "spin-the-wheel": {
    summary: "A wheel is best when everyone should be able to see the same transparent random choice. Add choices, spin, and keep or remove the winner for the next round.",
    steps: ["Add one or more choices, separated by commas.", "Review the list and remove anything you do not want included.", "Spin the wheel, then save the list to your cloud account if you want to reuse it."],
    useCases: ["Choose a classroom activity", "Pick a lunch option with friends", "Select a giveaway winner"],
    faqs: [
      { question: "Can I reuse a wheel?", answer: "Yes. Your current wheel is kept in this browser, and signed-in users can save a wheel to their cloud account." },
      { question: "Can I remove a winner?", answer: "After a result appears, choose Remove & Spin to take that choice out before the next spin." },
    ],
  },
  "random-name-picker": {
    summary: "Use the name picker when you need a fast, neutral way to draw a participant. It is useful for classroom turns, giveaways, and picking a meeting presenter.",
    steps: ["Paste one name per line or separate names with commas.", "Choose whether to allow duplicates or remove a name after it is picked.", "Pick a name and copy the result when you need a record."],
    useCases: ["Call on a student fairly", "Choose a giveaway winner", "Rotate meeting presenters"],
    faqs: [
      { question: "Can a name be picked twice?", answer: "Yes by default. Turn off duplicate results when each name should only be drawn once." },
      { question: "Where are my names stored?", answer: "The picker works in your browser. Avoid entering sensitive personal information on a shared device." },
    ],
  },
  "random-number-generator": {
    summary: "Generate random numbers for games, samples, classroom tasks, or a quick draw. Choose your lower and upper bounds, then decide how many values you need.",
    steps: ["Set a minimum and maximum value.", "Choose the number of results to generate.", "Turn off duplicates when every result must be unique."],
    useCases: ["Roll a virtual die", "Create a small sample", "Pick raffle numbers"],
    faqs: [
      { question: "Are duplicate values optional?", answer: "Yes. Turn off Allow duplicate numbers to generate a unique set inside the chosen range." },
      { question: "Why is my range rejected?", answer: "The maximum must be greater than the minimum, and the range must contain no more than 1,000,000 whole-number values." },
    ],
  },
  "random-team-generator": {
    summary: "Create balanced-size groups from a participant list. It is useful whenever the grouping should feel fair and take no time to organize manually.",
    steps: ["Paste participants, one per line or separated by commas.", "Choose how many teams you need.", "Generate the teams, then reshuffle if the group agrees to try again."],
    useCases: ["Make classroom discussion groups", "Assign workshop teams", "Split a game-night group"],
    faqs: [
      { question: "Are team sizes balanced?", answer: "Yes. Participants are shuffled, then distributed across teams so sizes differ by at most one person." },
      { question: "Can I copy the teams?", answer: "After generating, use Copy teams to copy the full assignment in a simple text format." },
    ],
  },
  "yes-or-no": {
    summary: "This is a quick prompt for a low-stakes decision—not advice for medical, legal, financial, or safety-critical choices. Add a question if you want the result saved with its context.",
    steps: ["Write a short, low-stakes question.", "Get an answer.", "Ask again when you want a fresh random result."],
    useCases: ["Choose a movie tonight", "Break a minor tie", "Pick the next game"],
    faqs: [
      { question: "Is it advice?", answer: "No. The result is random and should not be used for important, regulated, medical, legal, financial, or safety decisions." },
      { question: "Why does Maybe appear less often?", answer: "Yes and No each have a 45% chance. Maybe is reserved for 10% of outcomes." },
    ],
  },
  "coin-flip": {
    summary: "A coin flip gives two outcomes equal footing. Use it for a quick tie-break when the decision is low stakes and both sides agree to the rules first.",
    steps: ["Choose Flip coin or click the coin.", "Wait for the result.", "Use the session stats if you are running several flips."],
    useCases: ["Set the first player", "Break a friendly tie", "Choose between two lunch options"],
    faqs: [
      { question: "Can I see previous flips?", answer: "Yes. The session history shows recent heads and tails results until you reset the session." },
      { question: "Should I use this for an official draw?", answer: "No. Use an auditable process for regulated, high-value, or official selections." },
    ],
  },
};

export default function ToolGuide({ tool }: { tool: ToolSlug }) {
  const guide = guides[tool];
  return (
    <section className="seo-guide" aria-label={`Guide for ${tool}`}>
      <div className="seo-guide-intro">
        <h2>Make a fair choice, faster</h2>
        <p>{guide.summary}</p>
      </div>
      <div className="seo-guide-grid">
        <section>
          <h3>How to use it</h3>
          <ol>{guide.steps.map((step) => <li key={step}>{step}</li>)}</ol>
        </section>
        <section>
          <h3>Popular uses</h3>
          <ul>{guide.useCases.map((useCase) => <li key={useCase}>{useCase}</li>)}</ul>
        </section>
      </div>
      <div className="faq-list">
        <h2>Questions people ask</h2>
        {guide.faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
      <p className="seo-guide-note">Looking for another way to choose? <Link href="/tools">Browse all free random tools</Link>.</p>
    </section>
  );
}
