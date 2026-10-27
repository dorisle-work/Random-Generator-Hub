import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = { title: "About", alternates: { canonical: "/about" } };

export default function AboutPage() {
  return <InfoPage title="About random.easy" intro="Practical browser tools for fair, low-stakes choices in classrooms, teams, games, and everyday life." sections={[
    { heading: "Why random.easy exists", body: "Small decisions can consume more time than they deserve: who presents first, which activity starts next, how a group is split, or what to choose for lunch. random.easy keeps these moments lightweight with clear tools that work without an account." },
    { heading: "How results are generated", body: "The tools generate their results in the browser. Where a browser supports the Web Crypto API, random.easy uses it as the source for picks and shuffles. We explain the method, limits, and appropriate use cases in the How random.easy works guide." },
    { heading: "Product principles", body: "We design for visible inputs, simple rules, keyboard-friendly controls, responsive layouts, and respectful motion. A randomizer should make it easy for a group to agree on the process before seeing the outcome." },
    { heading: "Limits", body: "random.easy is not a source of professional, legal, medical, financial, security, gambling, or regulated-draw advice. High-stakes decisions need a documented process that meets the rules that apply to them." },
    { heading: "Part of easy", body: "random.easy is an independent tool collection within the easy ecosystem. The team also builds digital products and online utilities at easy.io.vn. We improve the existing tools and guides before adding new categories." },
  ]} />;
}
