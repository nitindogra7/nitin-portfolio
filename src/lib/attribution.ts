"use client";

const SESSION_SOURCE_KEY = "nd_lead_source";
const SESSION_REF_KEY = "nd_lead_ref";

function detectReferrerSource(referrer: string): string {
  if (!referrer) return "direct";
  try {
    const host = new URL(referrer).hostname.toLowerCase();
    if (host.includes("chatgpt.com")) return "chatgpt";
    if (host.includes("perplexity.ai")) return "perplexity";
    if (host.includes("claude.ai")) return "claude";
    if (host.includes("gemini.google.com")) return "gemini";
    if (host.includes("google.")) return "google-search";
    if (host.includes("bing.")) return "bing-search";
    if (host.includes("github.com")) return "github";
    if (host.includes("linkedin.com")) return "linkedin";
    if (host.includes("twitter.com") || host.includes("x.com")) return "x";
    return host;
  } catch {
    return "unknown";
  }
}

export function initLeadAttribution(): void {
  if (typeof window === "undefined") return;

  try {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const refParam = params.get("ref") || params.get("project");

    if (refParam && !sessionStorage.getItem(SESSION_REF_KEY)) {
      sessionStorage.setItem(SESSION_REF_KEY, refParam);
    }

    if (!sessionStorage.getItem(SESSION_SOURCE_KEY)) {
      if (utmSource) {
        sessionStorage.setItem(SESSION_SOURCE_KEY, utmSource);
      } else if (document.referrer) {
        sessionStorage.setItem(SESSION_SOURCE_KEY, detectReferrerSource(document.referrer));
      } else {
        sessionStorage.setItem(SESSION_SOURCE_KEY, "direct");
      }
    }
  } catch {
    // Ignore storage issues in restricted browsing contexts
  }
}

export function getLeadAttribution(): { source: string; ref: string } {
  if (typeof window === "undefined") return { source: "direct", ref: "" };

  try {
    const source = sessionStorage.getItem(SESSION_SOURCE_KEY) || "direct";
    const ref = sessionStorage.getItem(SESSION_REF_KEY) || "";
    return { source, ref };
  } catch {
    return { source: "direct", ref: "" };
  }
}

