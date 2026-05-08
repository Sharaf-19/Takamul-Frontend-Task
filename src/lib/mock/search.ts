import { services } from '@/lib/mock/services';
import { teamMembers } from '@/lib/mock/team';
import { SearchResultItem, SearchResults, SearchCategory } from '@/types/search';

const PAGE_SIZE = 9;

function normalize(str: string): string {
  return str.toLowerCase().trim();
}

function buildServiceResults(query: string, locale: string): SearchResultItem[] {
  const q = normalize(query);
  return services
    .filter(s => {
      const title = normalize(locale === 'ar' ? s.titleAr : s.title);
      const excerpt = normalize(locale === 'ar' ? s.excerptAr : s.excerpt);
      return title.includes(q) || excerpt.includes(q);
    })
    .map(s => ({
      id: s.id,
      title: locale === 'ar' ? s.titleAr : s.title,
      excerpt: locale === 'ar' ? s.excerptAr : s.excerpt,
      url: `/${locale}/services/${s.slug}`,
      category: 'services' as const,
    }));
}

function buildTeamResults(query: string, locale: string): SearchResultItem[] {
  const q = normalize(query);
  return teamMembers
    .filter(m => {
      const name = normalize(locale === 'ar' ? m.nameAr : m.name);
      const role = normalize(locale === 'ar' ? m.roleAr : m.role);
      return name.includes(q) || role.includes(q);
    })
    .map(m => ({
      id: m.id,
      title: locale === 'ar' ? m.nameAr : m.name,
      excerpt: locale === 'ar' ? m.roleAr : m.role,
      url: `/${locale}/team`,
      category: 'team' as const,
    }));
}

export function searchMock(
  query: string,
  category: SearchCategory,
  page: number,
  locale: string,
): SearchResults {
  const allItems =
    category === 'services' ? buildServiceResults(query, locale) : buildTeamResults(query, locale);

  const total = allItems.length;
  const pageCount = Math.max(1, Math.ceil(total / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), pageCount);
  const start = (safePage - 1) * PAGE_SIZE;
  const items = allItems.slice(start, start + PAGE_SIZE);

  return {
    items,
    pagination: {
      page: safePage,
      pageSize: PAGE_SIZE,
      pageCount,
      total,
    },
  };
}
