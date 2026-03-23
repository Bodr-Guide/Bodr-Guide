import type { MetadataRoute } from "next";
import { getAllCountries } from "@/lib/data";

const SITE_URL = "https://borderwiki.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE_URL}/visa-guide`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
  ];

  const countryDetailRoutes: MetadataRoute.Sitemap = getAllCountries().map(
    (country) => ({
      url: `${SITE_URL}/country/${country.id}`,
      lastModified: country.updatedAt ? new Date(country.updatedAt) : now,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...countryDetailRoutes];
}
