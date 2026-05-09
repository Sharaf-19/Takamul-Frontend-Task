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
    // Changed from gap-6 to divide-y to create horizontal lines between items
    <div className='flex flex-col divide-y divide-gray-200'>
      {items.map(item => (
        // Added py-6 to give breathing room between the text and the separator line
        <article key={`${item.category}-${item.id}`} className='py-6'>
          <p className='text-text-primary text-[13px] leading-[1.6] line-clamp-2 mb-2'>
            {item.excerpt}
          </p>
          <Link
            href={item.url}
            className='text-text-primary text-[13px] hover:underline transition-colors duration-200 font-bold underline'>
            {readMore}
          </Link>
        </article>
      ))}
    </div>
  );
}
