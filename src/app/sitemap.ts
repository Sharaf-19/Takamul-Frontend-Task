// src/app/sitemap.ts

import { MetadataRoute } from 'next';
import { getAllServiceSlugs } from '@/lib/mock/services';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://io-tech.sa';
const LOCALES = ['en', 'ar'] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const slugs = getAllServiceSlugs();

  // Static routes — one entry per locale
  const staticRoutes = ['', '/team', '/search', '/about', '/contact'].flatMap(path =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: path === '' ? 1.0 : 0.8,
    })),
  );

  // Dynamic service routes — one entry per slug per locale
  const serviceRoutes = slugs.flatMap(slug =>
    LOCALES.map(locale => ({
      url: `${BASE_URL}/${locale}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...serviceRoutes];
}
