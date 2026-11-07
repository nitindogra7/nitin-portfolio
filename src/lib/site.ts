import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

/** NEXT_PUBLIC_SITE_URL can override the verified canonical production origin. */
export const siteUrl = new URL(
  configuredSiteUrl || "https://nitindogra.space",
).origin;

export const siteLastModified = "2026-11-07T00:00:00Z";

export const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "preview";

export function absoluteUrl(path: string) {
  return new URL(path, siteUrl).toString();
}

export const socialImage = [
  { url: absoluteUrl("/avatar.png"), alt: "Portrait of Nitin Dogra, Full Stack Developer" },
];

export function pageSocialMetadata(title: string, description: string, path: string) {
  return {
    openGraph: {
      type: "website" as const,
      siteName: "Nitin Dogra Portfolio",
      locale: "en_IN",
      title,
      description,
      url: absoluteUrl(path),
      images: socialImage,
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: socialImage,
    },
  } satisfies Pick<Metadata, "openGraph" | "twitter">;
}
