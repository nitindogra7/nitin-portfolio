import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

/** Set NEXT_PUBLIC_SITE_URL to the verified production origin, without a path. */
export const siteUrl = configuredSiteUrl
  ? new URL(configuredSiteUrl).origin
  : undefined;

export const isPreviewDeployment =
  process.env.VERCEL_ENV === "preview" ||
  process.env.NEXT_PUBLIC_DEPLOYMENT_ENV === "preview";

export function absoluteUrl(path: string) {
  return siteUrl ? new URL(path, siteUrl).toString() : undefined;
}

export const socialImage = absoluteUrl("/avatar.png")
  ? [{ url: absoluteUrl("/avatar.png")!, alt: "Portrait of Nitin Dogra" }]
  : undefined;

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
      card: "summary" as const,
      title,
      description,
      images: socialImage,
    },
  } satisfies Pick<Metadata, "openGraph" | "twitter">;
}

