"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

type ConsentChoice = "accepted" | "essential";

const consentKey = "random-easy:consent";
const consentCookieName = "random_easy_consent";
// Publisher IDs are public identifiers. Keep the fallback in sync with the
// verification tag in the root layout so ad slots work in static deployments.
const adsenseClient =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? "ca-pub-2110256511208643";
const analyticsId = process.env.NEXT_PUBLIC_GA_ID;

function readConsent() {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(consentKey);
  return value === "accepted" || value === "essential" ? value : null;
}

function writeConsent(choice: ConsentChoice) {
  window.localStorage.setItem(consentKey, choice);
  document.cookie = `${consentCookieName}=${choice}; Path=/; Max-Age=31536000; SameSite=Lax`;
}

export function ConsentAndMonetization() {
  const [choice, setChoice] = useState<ConsentChoice | null>(null);
  const [ready, setReady] = useState(false);
  const isConfigured = Boolean(adsenseClient || analyticsId);

  useEffect(() => {
    const reopen = () => setChoice(null);
    window.addEventListener("random-easy:open-consent", reopen);
    const frame = window.requestAnimationFrame(() => {
      setChoice(readConsent());
      setReady(true);
    });
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("random-easy:open-consent", reopen);
    };
  }, []);

  const choose = (next: ConsentChoice) => {
    writeConsent(next);
    setChoice(next);
    window.dispatchEvent(new Event("random-easy:consent-updated"));
  };

  return (
    <>
      {choice === "accepted" && analyticsId && (
        <>
          <Script id="google-analytics-loader" strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`} />
          <Script id="google-analytics-config" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${analyticsId}', { anonymize_ip: true });`}
          </Script>
        </>
      )}
      {ready && isConfigured && choice === null && (
        <aside className="consent-banner" aria-label="Privacy choices">
          <p>
            We use optional advertising placements and measurement technologies to keep these tools free. You can continue with essential storage only.
            {" "}<Link href="/privacy">Learn how we use data</Link>.
          </p>
          <div className="consent-actions">
            <button type="button" className="btn-secondary" onClick={() => choose("essential")}>Essential only</button>
            <button type="button" className="btn-primary consent-accept" onClick={() => choose("accepted")}>Accept optional cookies</button>
          </div>
        </aside>
      )}
    </>
  );
}

export function PrivacyChoicesButton() {
  return (
    <button type="button" className="text-button" onClick={() => window.dispatchEvent(new Event("random-easy:open-consent"))}>
      Privacy choices
    </button>
  );
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ slot, className = "" }: { slot?: string; className?: string }) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const sync = () => setEnabled(readConsent() === "accepted");
    sync();
    window.addEventListener("random-easy:consent-updated", sync);
    return () => window.removeEventListener("random-easy:consent-updated", sync);
  }, []);

  useEffect(() => {
    if (!enabled || !adsenseClient || !slot) return;
    const timer = window.setTimeout(() => {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // The script can be blocked by a content blocker; the page remains usable.
      }
    }, 300);
    return () => window.clearTimeout(timer);
  }, [enabled, slot]);

  if (!enabled || !adsenseClient || !slot) return null;

  return (
    <section className={`ad-slot ${className}`} aria-label="Advertisement">
      <span>Advertisement</span>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={adsenseClient}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}
