import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/spin-the-wheel", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/random-name-picker", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/random-number-generator", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/random-team-generator", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/yes-or-no", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/coin-flip", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/categories/random-picker", priority: 0.75, changeFrequency: "monthly" as const },
  { path: "/categories/education", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/categories/entertainment", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/categories/productivity", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.45, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.25, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.25, changeFrequency: "yearly" as const },
];
const lastModified = new Date("2026-10-18T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ ...route, url: absoluteUrl(route.path), lastModified }));
}
