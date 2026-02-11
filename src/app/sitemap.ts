import type { MetadataRoute } from "next";
import { getWorkList } from "@/lib/work";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const work = getWorkList();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/work`,
      lastModified: new Date(),
    },
  ];

  const workRoutes: MetadataRoute.Sitemap = work.map((item) => ({
    url: `${SITE_URL}/work/${item.slug}`,
    lastModified: item.date
      ? new Date(item.date)
      : new Date(),
  }));

  return [...staticRoutes, ...workRoutes];
}