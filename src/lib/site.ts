const fallbackSiteUrl = "https://random.easy.io.vn";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? fallbackSiteUrl).replace(/\/$/, "");
export const siteName = "random.easy";
export const supportEmail =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "easyteam.vietnam@gmail.com";

export function absoluteUrl(path = "/") {
  return new URL(path, `${siteUrl}/`).toString();
}
