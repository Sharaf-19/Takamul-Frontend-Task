import Link from 'next/link';
import { SearchResultItem } from '@/types/search';

interface Props {
  items: SearchResultItem[];
  locale: string;
}

export default function SearchResults({ items, locale }: Props) {
  const isAr = locale === 'ar';
  const readMore = isAr ? 'اقرأ المزيد' : 'Read more';

  return (
    <div className='flex flex-col gap-6'>
      {items.map(item => (
        <article key={`${item.category}-${item.id}`}>
          <p className='text-text-muted text-[13px] leading-[1.6] line-clamp-2 mb-2'>
            {item.excerpt}
          </p>
          <Link
            href={item.url}
            className='text-[#4B2615] text-[13px] hover:underline transition-colors duration-200'>
            {readMore}
          </Link>
        </article>
      ))}
    </div>
  );
}
