export type ToolSlug =
  | "spin-the-wheel"
  | "random-name-picker"
  | "random-number-generator"
  | "random-team-generator"
  | "yes-or-no"
  | "coin-flip";

export type ToolCatalogEntry = {
  slug: ToolSlug;
  name: string;
  description: string;
  categories: string[];
};

export const toolCatalog: ToolCatalogEntry[] = [
  { slug: "spin-the-wheel", name: "Spin the Wheel", description: "Build a custom wheel for a fair, visible random pick.", categories: ["random-picker", "education", "entertainment"] },
  { slug: "random-name-picker", name: "Random Name Picker", description: "Draw a name or winner from a list without duplicate results.", categories: ["random-picker", "education", "productivity"] },
  { slug: "random-number-generator", name: "Random Number Generator", description: "Generate one or many numbers inside a range, with optional uniqueness.", categories: ["random-picker", "productivity"] },
  { slug: "random-team-generator", name: "Random Team Generator", description: "Split participants into balanced random groups in seconds.", categories: ["random-picker", "education", "productivity"] },
  { slug: "yes-or-no", name: "Yes or No Generator", description: "Get an instant nudge for a low-stakes decision.", categories: ["entertainment", "productivity"] },
  { slug: "coin-flip", name: "Coin Flip", description: "Make a quick, impartial heads-or-tails decision.", categories: ["random-picker", "entertainment"] },
];

export const categoryCatalog = [
  {
    slug: "random-picker",
    name: "Random Pickers",
    seoTitle: "Random Picker Tools",
    description: "Simple tools for making a fair random choice from names, options, teams, and numbers.",
    intro: "Use a random picker when the choice matters more than the process. Each tool gives a clear result immediately and keeps the controls close to the task.",
  },
  {
    slug: "education",
    name: "Education",
    seoTitle: "Education Random Tools",
    description: "Classroom-friendly tools for picking students, making groups, and choosing an activity.",
    intro: "Teachers can use these tools to rotate participation, build groups, and keep activities moving without spending time on administration.",
  },
  {
    slug: "entertainment",
    name: "Entertainment",
    seoTitle: "Entertainment Random Tools",
    description: "Fast, social tools for game nights, food decisions, and friendly tie-breaks.",
    intro: "Turn a small decision into a shared moment with a wheel, a coin flip, or a quick answer generator.",
  },
  {
    slug: "productivity",
    name: "Productivity",
    seoTitle: "Productivity Random Tools",
    description: "Useful randomizers for fair assignments, meeting order, and quick decisions.",
    intro: "Use random assignment when you need a transparent way to choose a presenter, create teams, or break a deadlock.",
  },
] as const;

export function getToolsForCategory(category: string) {
  return toolCatalog.filter((tool) => tool.categories.includes(category));
}
