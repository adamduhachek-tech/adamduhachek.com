import type { MetadataRoute } from "next";
import { listEssays } from "@/lib/essays";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteUrl();
  const pages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/research`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/teaching`, changeFrequency: "yearly", priority: 0.7 },
  ];
  const essays: MetadataRoute.Sitemap = listEssays().map((e) => ({
    url: `${base}/essays/${e.slug}`,
    changeFrequency: "yearly",
    priority: 0.6,
  }));
  return [...pages, ...essays];
}
