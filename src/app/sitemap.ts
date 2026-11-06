import type { MetadataRoute } from "next";
import { isPreviewDeployment, siteUrl } from "@/lib/site";

const publicPaths = ["/", "/work", "/experience", "/contact", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (!siteUrl || isPreviewDeployment) return [];

  return publicPaths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
