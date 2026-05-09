// src/lib/api/navigation.ts

import { strapiGet } from './strapi';
import { StrapiCollection, StrapiNavItem, StrapiFooterConfig } from '@/types/strapi';

export async function getNavLinks(locale: string): Promise<StrapiNavItem[]> {
  try {
    const data = await strapiGet<StrapiCollection<StrapiNavItem>>('/navigations', {
      locale,
      'sort[0]': 'order:asc',
      'pagination[pageSize]': '20',
    });

    return data.data;
  } catch (error) {
    console.warn('Failed to fetch navigation links from Strapi.', error);
    return [];
  }
}

export async function getFooterConfig(locale: string): Promise<StrapiFooterConfig | null> {
  try {
    const data = await strapiGet<StrapiCollection<StrapiFooterConfig>>('/footer-configs', {
      locale,
      'pagination[pageSize]': '1',
    });

    return data.data[0] ?? null;
  } catch (error) {
    console.warn('Failed to fetch footer config from Strapi.', error);
    return null;
  }
}
