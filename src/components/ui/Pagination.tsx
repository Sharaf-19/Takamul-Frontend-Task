import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Props {
  currentPage: number;
  pageCount: number;
  buildHref: (page: number) => string;
  locale: string;
}

export default function Pagination({ currentPage, pageCount, buildHref, locale }: Props) {
  //if (pageCount <= 1) return null;

  const isAr = locale === 'ar';

  const pages: (number | 'ellipsis')[] = [];
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pages.push(i);
    } else if (pages[pages.length - 1] !== 'ellipsis') {
      pages.push('ellipsis');
    }
  }

  return (
    <nav aria-label='Pagination' className='flex items-center justify-end gap-2 p-0'>
      {/* Previous arrow — 24×24 fixed, radius-sm (4px), px from buttons-sm-padding */}
      {currentPage > 1 ? (
        <Link
          href={buildHref(currentPage - 1)}
          aria-label='Previous page'
          className='w-6 h-6 min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] rounded flex items-center justify-center gap-1 px-1.5 text-[#161616] hover:opacity-70 transition-opacity duration-200'>
          {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
        </Link>
      ) : (
        <span className='w-6 h-6 min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] rounded flex items-center justify-center gap-1 px-1.5 text-[#161616]/30'>
          {isAr ? <ArrowRight size={14} /> : <ArrowLeft size={14} />}
        </span>
      )}

      {/* Page items */}
      {pages.map((item, i) => {
        if (item === 'ellipsis') {
          // Overflow=yes: 24×24, border 1px solid #161616, radius-sm
          return (
            <span
              key={`e${i}`}
              className='w-6 h-6 min-w-[24px] rounded border border-[#161616] flex items-center justify-center text-[#161616] text-[13px]'>
              …
            </span>
          );
        }

        if (item === currentPage) {
          return (
            <span
              key={item}
              aria-current='page'
              className='min-w-[24px] h-6 rounded flex items-center justify-center text-[#161616] underline'>
              {item}
            </span>
          );
        }

        // Default Page: min-w 24px, radius-sm, no border, no bg
        return (
          <Link
            key={item}
            href={buildHref(item)}
            className='min-w-[24px] h-6 rounded text-[#161616] text-[13px] flex items-center justify-center hover:opacity-70 transition-opacity duration-200'>
            {item}
          </Link>
        );
      })}

      {/* Next arrow — 24×24 fixed, radius-sm (4px), px from buttons-sm-padding */}
      {currentPage < pageCount ? (
        <Link
          href={buildHref(currentPage + 1)}
          aria-label='Next page'
          className='w-6 h-6 min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] rounded flex items-center justify-center gap-1 px-1.5 text-[#161616] hover:opacity-70 transition-opacity duration-200'>
          {isAr ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </Link>
      ) : (
        <span className='w-6 h-6 min-w-[24px] max-w-[24px] min-h-[24px] max-h-[24px] rounded flex items-center justify-center gap-1 px-1.5 text-[#161616]/30'>
          {isAr ? <ArrowLeft size={14} /> : <ArrowRight size={14} />}
        </span>
      )}
    </nav>
  );
}
