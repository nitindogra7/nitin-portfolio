import type { MetadataRoute } from "next";
import { isPreviewDeployment, siteLastModified, siteUrl } from "@/lib/site";

interface RouteConfig {
  path: string;
  priority: number;
  changeFrequency: "weekly" | "monthly" | "daily";
}

const indexableRoutes: RouteConfig[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/work", priority: 0.9, changeFrequency: "weekly" },
  { path: "/experience", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  if (isPreviewDeployment) return [];

  return indexableRoutes.map((route) => ({
    url: new URL(route.path, siteUrl).toString(),
    lastModified: siteLastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
