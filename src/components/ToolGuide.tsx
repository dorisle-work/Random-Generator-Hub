import Link from "next/link";
import type { ToolSlug } from "@/lib/catalog";

type Guide = {
  summary: string;
  method: string;
  steps: string[];
  useCases: string[];
  example: { title: string; body: string };
  faqs: Array<{ question: string; answer: string }>;
};

const guides: Record<ToolSlug, Guide> = {
  "spin-the-wheel": {
    summary: "A wheel is best when everyone should be able to see the same transparent random choice. Add choices, spin, and keep or remove the winner for the next round.",
    method: "The wheel shuffles a result in your browser when you spin. The animation is only the visual reveal: each choice has the same chance when every option appears once in the list. Add an option more than once only when you intentionally want it to carry more weight.",
    steps: ["Add one or more choices, separated by commas.", "Review the list and remove anything you do not want included.", "Spin the wheel, then save the list to your cloud account if you want to reuse it."],
    useCases: ["Choose a classroom activity", "Pick a lunch option with friends", "Select a giveaway winner"],
    example: { title: "Example: rotate a classroom warm-up", body: "Enter one activity per line—such as discussion, quiz, recap, or pair work. Keep each activity in the wheel once so the choice is easy for the group to understand, then remove the selected activity if you do not want it drawn again." },
    faqs: [
      { question: "Can I reuse a wheel?", answer: "Yes. Your current wheel is kept in this browser, and signed-in users can save a wheel to their cloud account." },
      { question: "Can I remove a winner?", answer: "After a result appears, choose Remove & Spin to take that choice out before the next spin." },
      { question: "Does the animation change the winner?", answer: "No. The spin animation presents the outcome; it does not let a person steer the result after spinning begins." },
    ],
  },
  "random-name-picker": {
    summary: "Use the name picker when you need a fast, neutral way to draw a participant. It is useful for classroom turns, giveaways, and picking a meeting presenter.",
    method: "Names are picked from the list you provide in the browser. If duplicate results are disabled, a selected name is removed from the remaining draw pool so each person can be picked once before the list is reset.",
    steps: ["Paste one name per line or separate names with commas.", "Choose whether to allow duplicates or remove a name after it is picked.", "Pick a name and copy the result when you need a record."],
    useCases: ["Call on a student fairly", "Choose a giveaway winner", "Rotate meeting presenters"],
    example: { title: "Example: pick a meeting presenter", body: "Paste the team roster, turn off duplicate results, and draw one presenter per meeting. Keep the list open until everyone has had a turn, then start a fresh round the next week." },
    faqs: [
      { question: "Can a name be picked twice?", answer: "Yes by default. Turn off duplicate results when each name should only be drawn once." },
      { question: "Where are my names stored?", answer: "The picker works in your browser. Avoid entering sensitive personal information on a shared device." },
      { question: "Can I use this for a regulated giveaway?", answer: "No. For a contest with legal, financial, or official rules, use a documented and auditable process that meets the rules of that event." },
    ],
  },
  "random-number-generator": {
    summary: "Generate random numbers for games, samples, classroom tasks, or a quick draw. Choose your lower and upper bounds, then decide how many values you need.",
    method: "The generator requests a random value from the browser’s Web Crypto API when it is available. It uses rejection sampling so a value near the edge of a range is not favoured by a modulo shortcut. Older browsers can fall back to the standard browser random function.",
    steps: ["Set a minimum and maximum value.", "Choose the number of results to generate.", "Turn off duplicates when every result must be unique."],
    useCases: ["Roll a virtual die", "Create a small sample", "Pick raffle numbers"],
    example: { title: "Example: choose five unique task IDs", body: "Set the range from 1 to 30, choose five results, and turn off duplicates. The output gives five distinct numbers you can map to a pre-agreed task list." },
    faqs: [
      { question: "Are duplicate values optional?", answer: "Yes. Turn off Allow duplicate numbers to generate a unique set inside the chosen range." },
      { question: "Why is my range rejected?", answer: "The maximum must be greater than the minimum, and the range must contain no more than 1,000,000 whole-number values." },
      { question: "Is this suitable for security codes?", answer: "No. Do not use a public web tool to generate passwords, recovery codes, keys, or any secret that protects an account or system." },
    ],
  },
  "random-team-generator": {
    summary: "Create balanced-size groups from a participant list. It is useful whenever the grouping should feel fair and take no time to organize manually.",
    method: "Participants are first shuffled in the browser, then placed into teams in sequence. This keeps team sizes as even as possible: the largest and smallest teams differ by no more than one participant.",
    steps: ["Paste participants, one per line or separated by commas.", "Choose how many teams you need.", "Generate the teams, then reshuffle if the group agrees to try again."],
    useCases: ["Make classroom discussion groups", "Assign workshop teams", "Split a game-night group"],
    example: { title: "Example: split 17 workshop attendees", body: "Enter the 17 names and ask for four teams. The generator will create groups sized 5, 4, 4, and 4, rather than leaving one group substantially smaller." },
    faqs: [
      { question: "Are team sizes balanced?", answer: "Yes. Participants are shuffled, then distributed across teams so sizes differ by at most one person." },
      { question: "Can I copy the teams?", answer: "After generating, use Copy teams to copy the full assignment in a simple text format." },
      { question: "Can it balance skills or roles?", answer: "Not yet. This tool balances headcount, not expertise. For a skill-balanced exercise, create the constraints first and use the randomizer inside each role group." },
    ],
  },
  "yes-or-no": {
    summary: "This is a quick prompt for a low-stakes decision—not advice for medical, legal, financial, or safety-critical choices. Add a question if you want the result saved with its context.",
    method: "Each answer is generated in the browser. Yes and No each receive a 45% chance, while Maybe receives 10%, so the tool generally helps break a tie without pretending to replace judgement.",
    steps: ["Write a short, low-stakes question.", "Get an answer.", "Ask again when you want a fresh random result."],
    useCases: ["Choose a movie tonight", "Break a minor tie", "Pick the next game"],
    example: { title: "Example: settle a game-night tie", body: "Ask a concrete question such as “Do we play the co-op game first?” Let the group agree beforehand that one result settles the choice, then move on rather than repeatedly drawing for a preferred answer." },
    faqs: [
      { question: "Is it advice?", answer: "No. The result is random and should not be used for important, regulated, medical, legal, financial, or safety decisions." },
      { question: "Why does Maybe appear less often?", answer: "Yes and No each have a 45% chance. Maybe is reserved for 10% of outcomes." },
      { question: "Why did I get a different answer after asking again?", answer: "Every draw is a new random event. Repeating the question changes the draw; it does not validate or invalidate a previous result." },
    ],
  },
  "coin-flip": {
    summary: "A coin flip gives two outcomes equal footing. Use it for a quick tie-break when the decision is low stakes and both sides agree to the rules first.",
    method: "The flip chooses Heads or Tails in the browser before the animation finishes. The visual coin is a reveal of that result, not a simulation of physical physics, so agree on the rules before you flip.",
    steps: ["Choose Flip coin or click the coin.", "Wait for the result.", "Use the session stats if you are running several flips."],
    useCases: ["Set the first player", "Break a friendly tie", "Choose between two lunch options"],
    example: { title: "Example: decide who starts", body: "Before a two-player game begins, agree that Heads goes first and Tails goes second. Make one flip, show the result to both players, and start the round without adding exceptions afterward." },
    faqs: [
      { question: "Can I see previous flips?", answer: "Yes. The session history shows recent heads and tails results until you reset the session." },
      { question: "Should I use this for an official draw?", answer: "No. Use an auditable process for regulated, high-value, or official selections." },
      { question: "Are Heads and Tails equally likely?", answer: "Yes. Each flip is generated as one of two outcomes with equal probability before the animation is displayed." },
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
      <section className="guide-method">
        <h2>How this tool works</h2>
        <p>{guide.method}</p>
      </section>
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
      <section className="guide-example">
        <h2>{guide.example.title}</h2>
        <p>{guide.example.body}</p>
      </section>
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
