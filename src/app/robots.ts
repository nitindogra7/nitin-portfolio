import type { MetadataRoute } from "next";
import { absoluteUrl, isPreviewDeployment } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: isPreviewDeployment
      ? { userAgent: "*", disallow: "/" }
      : { userAgent: "*", allow: "/" },
    sitemap: isPreviewDeployment ? undefined : absoluteUrl("/sitemap.xml"),
  };
}
