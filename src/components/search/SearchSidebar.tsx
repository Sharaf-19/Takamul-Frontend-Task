'use client';
// src/components/search/SearchSidebar.tsx

import { useRouter, usePathname } from 'next/navigation';
import { SearchCategory } from '@/types/search';

interface Props {
  query: string;
  activeCategory: SearchCategory;
  locale: string;
  teamCount: number;
  servicesCount: number;
}

export default function SearchSidebar({
  query,
  activeCategory,
  locale,
  teamCount,
  servicesCount,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const isAr = locale === 'ar';

  const switchCategory = (category: SearchCategory) => {
    const params = new URLSearchParams({
      query,
      category,
      page: '1',
    });
    router.push(`${pathname}?${params.toString()}`);
  };

  const tabs: { key: SearchCategory; labelEn: string; labelAr: string; count: number }[] = [
    { key: 'team', labelEn: 'Team', labelAr: 'الفريق', count: teamCount },
    { key: 'services', labelEn: 'Services', labelAr: 'الخدمات', count: servicesCount },
  ];

  return (
    <aside className='w-full md:w-[140px] shrink-0'>
      {/* Query label */}
      <p className='text-text-muted text-[12px] uppercase tracking-wide mb-3'>
        {isAr ? 'نتائج' : 'Results'}
      </p>

      <div className='flex md:flex-col gap-1'>
        {tabs.map(tab => {
          const isActive = activeCategory === tab.key;
          const label = isAr ? tab.labelAr : tab.labelEn;

          return (
            <button
              key={tab.key}
              onClick={() => switchCategory(tab.key)}
              className={`
                flex items-center justify-between w-full text-start px-3 py-2 text-[14px]
                rounded-sm transition-colors duration-200
                ${
                  isActive
                    ? 'text-[#4B2615] font-bold'
                    : 'text-text-muted hover:text-text-primary'
                }
              `}>
              <span>{label}</span>
              <span className={`text-[12px] ${isActive ? 'text-white/70' : 'text-text-muted/60'}`}>
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
