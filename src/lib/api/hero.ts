// src/lib/api/hero.ts

import { strapiGet } from './strapi';
import { StrapiCollection, StrapiHeroSlide } from '@/types/strapi';

export async function getHeroSlides(locale: string): Promise<StrapiHeroSlide[]> {
  try {
    const data = await strapiGet<StrapiCollection<StrapiHeroSlide>>('/hero-slides', {
      locale,
      'populate[backgroundImage][fields][0]': 'url',
      'populate[backgroundImage][fields][1]': 'alternativeText',
      'populate[personImage][fields][0]': 'url',
      'populate[personImage][fields][1]': 'alternativeText',
      'filters[isActive][$eq]': 'true',
      'sort[0]': 'order:asc',
      'pagination[pageSize]': '10',
    });

    return data.data;
  } catch (error) {
    console.warn('Failed to fetch hero slides from Strapi.', error);
    return [];
  }
}
