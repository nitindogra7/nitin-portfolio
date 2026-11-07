import type { MetadataRoute } from "next";
import { isPreviewDeployment, siteUrl } from "@/lib/site";

const indexablePaths = ["/", "/work", "/experience", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreviewDeployment) return [];

  return indexablePaths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
