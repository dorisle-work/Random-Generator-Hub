import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <InfoPage title="About random.easy" intro="Simple, useful random tools for decisions, classrooms, games, and everyday work." sections={[
    { heading: "What we make", body: "random.easy brings practical randomizers together in one fast, accessible place. Each tool should work immediately—without a required account or a complicated setup." },
    { heading: "How we think", body: "A random result should be quick, understandable, and enjoyable to use. We focus on clear controls, respectful motion, keyboard access, and responsive layouts." },
    { heading: "Part of easy", body: "random.easy is part of the easy ecosystem. We are continuing to improve the existing tools before expanding the collection." },
  ]} />;
}
