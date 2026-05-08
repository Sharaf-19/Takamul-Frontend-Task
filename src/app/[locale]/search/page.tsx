import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { searchMock } from '@/lib/mock/search';
import { SearchCategory } from '@/types/search';
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
    title: locale === 'ar' ? `نتائج البحث: ${query} | IO-TECH` : `Search: ${query} | IO-TECH`,
  };
}

const VALID_CATEGORIES: SearchCategory[] = ['team', 'services'];

export default function SearchPage({ params: { locale }, searchParams }: Props) {
  const query = searchParams.query?.trim() ?? '';
  const rawCategory = searchParams.category ?? 'services';
  const page = parseInt(searchParams.page ?? '1', 10);
  const isAr = locale === 'ar';

  const category: SearchCategory = VALID_CATEGORIES.includes(rawCategory as SearchCategory)
    ? (rawCategory as SearchCategory)
    : 'services';

  if (!query) notFound();

  const results = searchMock(query, category, page, locale);
  const teamTotal = searchMock(query, 'team', 1, locale).pagination.total;
  const servicesTotal = searchMock(query, 'services', 1, locale).pagination.total;

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
          {/* TWO-COLUMN LAYOUT */}
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Left sidebar */}
            <SearchSidebar
              query={query}
              activeCategory={category}
              locale={locale}
              teamCount={teamTotal}
              servicesCount={servicesTotal}
            />

            {/* Right column — Results area */}
            <div className='flex-1 min-w-0'>
              {/* BACK BUTTON — positioned inside the right column */}
              <div className='mb-8'>
                <Link
                  href={`/${locale}`}
                  className='inline-flex items-center gap-2 font-medium text-[14px] transition-opacity duration-200 hover:opacity-70'
                  style={{ color: '#4B2615' }}>
                  {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
                  {backLabel}
                </Link>
              </div>

              {/* Search Results */}
              {results.items.length === 0 ? (
                <EmptyState
                  query={query}
                  category={
                    isAr
                      ? category === 'team'
                        ? 'الفريق'
                        : 'الخدمات'
                      : category === 'team'
                        ? 'Team'
                        : 'Services'
                  }
                  locale={locale}
                />
              ) : (
                <SearchResults items={results.items} locale={locale} />
              )}

              {/* Pagination */}
              <div className='pt-8'>
                <Pagination
                  currentPage={results.pagination.page}
                  pageCount={results.pagination.pageCount}
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
