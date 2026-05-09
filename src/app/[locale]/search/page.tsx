// src/app/[locale]/search/page.tsx

import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { searchServices } from '@/lib/api/services';
import { searchTeamMembers } from '@/lib/api/team';
import { SearchCategory, SearchResultItem } from '@/types/search';
import HeroShort from '@/components/sections/HeroShort';
import SearchSidebar from '@/components/search/SearchSidebar';
import SearchResults from '@/components/search/SearchResults';
import Pagination from '@/components/ui/Pagination';
import EmptyState from '@/components/ui/EmptyState';

interface Props {
  params: { locale: string };
  searchParams: { query?: string; category?: string; page?: string };
}

export function generateMetadata({ params: { locale }, searchParams }: Props) {
  const query = searchParams.query ?? '';
  return {
    title: locale === 'ar' ? `نتائج البحث: ${query} | Bin Hindi` : `Search: ${query} | Bin Hindi`,
  };
}

const VALID_CATEGORIES: SearchCategory[] = ['team', 'services'];

export default async function SearchPage({ params: { locale }, searchParams }: Props) {
  const query = searchParams.query?.trim() ?? '';
  const rawCategory = searchParams.category ?? 'services';
  const page = parseInt(searchParams.page ?? '1', 10);
  const isAr = locale === 'ar';

  const category: SearchCategory = VALID_CATEGORIES.includes(rawCategory as SearchCategory)
    ? (rawCategory as SearchCategory)
    : 'services';

  if (!query) notFound();

  const [activeResults, servicesCount, teamCount] = await Promise.all([
    category === 'services'
      ? searchServices(query, locale, page)
      : searchTeamMembers(query, locale, page),
    searchServices(query, locale, 1, 1),
    searchTeamMembers(query, locale, 1, 1),
  ]);

  const items: SearchResultItem[] =
    category === 'services'
      ? activeResults.data.map(s => ({
          id: s.id,
          title: (s as { title?: string }).title ?? '',
          excerpt: (s as { excerpt?: string }).excerpt ?? '',
          url: `/${locale}/services/${(s as { slug?: string }).slug ?? ''}`,
          category: 'services' as const,
        }))
      : activeResults.data.map(m => ({
          id: m.id,
          title: (m as { name?: string }).name ?? '',
          excerpt: (m as { role?: string }).role ?? '',
          url: `/${locale}/team`,
          category: 'team' as const,
        }));

  const pagination = activeResults.meta.pagination;
  const backLabel = isAr ? 'رجوع' : 'Back';

  const buildHref = (p: number) => {
    const params = new URLSearchParams({ query, category, page: String(p) });
    return `/${locale}/search?${params.toString()}`;
  };

  return (
    <main>
      <HeroShort title='' />

      <div className='bg-white min-h-[calc(100vh-68px)]'>
        <div className='mx-auto max-w-container px-6 py-8'>
          <div className='flex flex-col md:flex-row gap-8'>
            <SearchSidebar
              query={query}
              activeCategory={category}
              locale={locale}
              teamCount={teamCount.meta.pagination.total}
              servicesCount={servicesCount.meta.pagination.total}
            />

            <div className='flex-1 min-w-0'>
              <div className='mb-8'>
                <Link
                  href={`/${locale}`}
                  className='inline-flex items-center gap-2 font-medium text-[14px] transition-opacity duration-200 hover:opacity-70'
                  style={{ color: '#4B2615' }}>
                  {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                  {backLabel}
                </Link>
              </div>

              {items.length === 0 ? (
                <EmptyState
                  query={query}
                  category={isAr ? (category === 'team' ? 'الفريق' : 'الخدمات') : category === 'team' ? 'Team' : 'Services'}
                  locale={locale}
                />
              ) : (
                <SearchResults items={items} locale={locale} />
              )}

              <div className='pt-8'>
                <Pagination
                  currentPage={pagination.page}
                  pageCount={pagination.pageCount}
                  buildHref={buildHref}
                  locale={locale}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
