// src/lib/api/team.ts

import { strapiGet } from './strapi';
import { StrapiCollection, StrapiTeamMember } from '@/types/strapi';

export async function getTeamMembers(locale: string): Promise<StrapiTeamMember[]> {
  const data = await strapiGet<StrapiCollection<StrapiTeamMember>>('/team-members', {
    locale,
    'populate[photo][fields][0]': 'url',
    'populate[photo][fields][1]': 'alternativeText',
    'sort[0]': 'order:asc',
    'pagination[pageSize]': '50',
  });

  return data.data;
}

export async function searchTeamMembers(
  query: string,
  locale: string,
  page: number = 1,
  pageSize: number = 9,
): Promise<StrapiCollection<StrapiTeamMember>> {
  return strapiGet<StrapiCollection<StrapiTeamMember>>('/team-members', {
    locale,
    'filters[$or][0][name][$containsi]': query,
    'filters[$or][1][role][$containsi]': query,
    'pagination[page]': String(page),
    'pagination[pageSize]': String(pageSize),
  });
}
