// src/lib/api/testimonials.ts

import { strapiGet } from './strapi';
import { StrapiCollection, StrapiTestimonial } from '@/types/strapi';

export async function getTestimonials(locale: string): Promise<StrapiTestimonial[]> {
  try {
    const data = await strapiGet<StrapiCollection<StrapiTestimonial>>('/testimonials', {
      locale,
      'populate[photo][fields][0]': 'url',
      'populate[photo][fields][1]': 'alternativeText',
      'sort[0]': 'order:asc',
      'pagination[pageSize]': '20',
    });

    return data.data;
  } catch (error) {
    console.warn('Failed to fetch testimonials from Strapi.', error);
    return [];
  }
}
