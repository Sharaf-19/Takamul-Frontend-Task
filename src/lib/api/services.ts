// src/lib/api/services.ts

import { strapiGet } from './strapi';
import { StrapiCollection, StrapiService } from '@/types/strapi';

export async function getServices(locale: string): Promise<StrapiService[]> {
  const data = await strapiGet<StrapiCollection<StrapiService>>('/services', {
    locale,
    'populate[coverImage][fields][0]': 'url',
    'populate[coverImage][fields][1]': 'alternativeText',
    'filters[isActive][$eq]': 'true',
    'sort[0]': 'createdAt:asc',
    'pagination[pageSize]': '100',
  });

  return data.data;
}

export async function getServiceBySlug(
  slug: string,
  locale: string,
): Promise<StrapiService | null> {
  const data = await strapiGet<StrapiCollection<StrapiService>>('/services', {
    locale,
    'populate[coverImage][fields][0]': 'url',
    'populate[coverImage][fields][1]': 'alternativeText',
    'filters[slug][$eq]': slug,
    'pagination[pageSize]': '1',
  });

  return data.data[0] ?? null;
}

export async function getAllServiceSlugs(): Promise<string[]> {
  const data = await strapiGet<StrapiCollection<StrapiService>>('/services', {
    'fields[0]': 'slug',
    'pagination[pageSize]': '100',
  });

  return data.data.map(s => s.slug);
}

export async function searchServices(
  query: string,
  locale: string,
  page: number = 1,
  pageSize: number = 9,
): Promise<StrapiCollection<StrapiService>> {
  return strapiGet<StrapiCollection<StrapiService>>('/services', {
    locale,
    'filters[$or][0][title][$containsi]': query,
    'filters[$or][1][excerpt][$containsi]': query,
    'filters[isActive][$eq]': 'true',
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
  });
}
