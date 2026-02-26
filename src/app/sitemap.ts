import type { MetadataRoute } from "next";
import { getAllCountries } from "@/lib/data";
import { getAllCountrySlugs } from "@/lib/countries";

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

  const countryGalleryRoutes: MetadataRoute.Sitemap = getAllCountrySlugs().map(
    (slug) => ({
      url: `${SITE_URL}/countries/${slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    })
  );

  return [...staticRoutes, ...countryDetailRoutes, ...countryGalleryRoutes];
}
