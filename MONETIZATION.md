# Monetization and launch checklist

## What is ready in the code

- Search crawlers receive `robots.txt` and `sitemap.xml`.
- Each tool has original on-page usage guidance and FAQs, plus crawlable tool and category directories.
- Advertising and analytics scripts are disabled by default and load only after the visitor accepts optional cookies.
- Responsive manual ad placements exist below the primary tool experience. They render only after a real AdSense client and slot ID are configured.
- Privacy and Terms cover optional cloud sync, browser storage, and advertising technologies.

## Consent requirement for international traffic

The in-app privacy banner keeps advertising and analytics off until a visitor makes a choice. It is useful baseline product behavior, but it is **not** a replacement for a Google-certified CMP.

Before serving personalised ads to people in the EEA, UK, or Switzerland, configure the Google CMP in AdSense **Privacy & messaging** or integrate another Google-certified TCF CMP. Test the production message in the relevant regions and make sure visitors see one clear consent flow; do not treat the local banner as a substitute for certified regional ad consent.

## Before applying for AdSense

1. Deploy the site at its final HTTPS domain and set `NEXT_PUBLIC_SITE_URL` to that exact canonical origin.
2. Configure a real operator contact email in the footer and Privacy Policy. Do not enable ads without it.
3. Add the domain to Google Search Console, verify it, and submit `/sitemap.xml`.
4. Keep the original guide/FAQ content on every tool page. Add a new, genuinely useful tool or substantial guide only when it has distinct user value; do not create thin, near-duplicate SEO pages.
5. Check every external link, Privacy Policy, Terms, mobile layout, sign-in flow, and cloud data deletion control on production.
6. Apply through a single legitimate AdSense publisher account. Never buy clicks, reward ad views, or ask users to click ads.

## Enable ads after approval

1. Copy `.env.example` to your deployment environment; never commit real credentials.
2. Set `NEXT_PUBLIC_ADSENSE_CLIENT` to the approved value such as `ca-pub-xxxxxxxxxxxxxxxx`.
3. Start with Auto ads in the AdSense console or create responsive manual slots. If using manual slots, set `NEXT_PUBLIC_ADSENSE_SLOT_HOME_INLINE` and `NEXT_PUBLIC_ADSENSE_SLOT_TOOL_INLINE`.
4. Keep manual ads below the main interaction, visibly labelled "Advertisement", and away from buttons, inputs, result cards, and navigation.
5. Inspect both desktop and mobile in AdSense preview. Exclude any area where an ad interrupts a tool interaction.
6. Add `NEXT_PUBLIC_GA_ID` only if you use Google Analytics and keep the optional-consent flow enabled.
7. If you have EEA, UK, or Swiss traffic, publish a Google-certified CMP message in AdSense before enabling personalised ads.

## Revenue operating loop

- Use Search Console to find queries with impressions but low click-through rate; improve the matching page title, description, and guide content.
- Use analytics to compare acquisition, repeat use, tool completion, and ad viewability by page and device.
- Keep one above-the-fold task and one content-rich below-the-fold area. Do not increase ad density before checking return visits, speed, and policy compliance.
- Build the next tool from real search demand and existing user behavior. The current high-value next candidates are Dice Roller, Random List Picker, Random Letter, and classroom workflows—not generic pages with the same content.
