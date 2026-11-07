import type { MetadataRoute } from "next";
import { absoluteUrl, isPreviewDeployment } from "@/lib/site";

const allowedAiBots = [
  "Googlebot",
  "Bingbot",
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "PerplexityBot",
  "ClaudeBot",
  "Claude-SearchBot",
  "Google-Extended",
  "Applebot-Extended",
];

export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/thank-you"],
      },
      {
        userAgent: allowedAiBots,
        allow: "/",
        disallow: ["/thank-you"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
