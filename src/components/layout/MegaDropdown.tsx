'use client';
import Link from 'next/link';
import { ServiceItem } from '@/types/navigation';

interface Props {
  columns: ServiceItem[][];
  locale: string;
  isOpen: boolean;
}

export default function MegaDropdown({ columns, locale, isOpen }: Props) {
  if (!isOpen) return null;

  return (
    // FIX 1: 'fixed' instead of 'absolute' breaks it out of the button and anchors to the screen
    // FIX 2: 'top-[68px]' exactly matches your navbar height, so it sits perfectly below it
    // FIX 3: 'left-0 right-0 w-full' guarantees it stretches edge-to-edge with perfect centering
    <div
      className='fixed top-[68px] left-0 right-0 w-full bg-brown-dark/95 backdrop-blur-sm z-50 border-t border-white/10 shadow-2xl'
      onMouseEnter={e => e.stopPropagation()}>
      <div className='mx-auto max-w-container px-6 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6'>
          {columns.map((col, colIndex) => (
            <ul key={colIndex} className='space-y-5'>
              {col.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/${locale}/services/${item.slug}`}
                    className='text-white/90 text-sm font-normal hover:text-gold-accent transition-colors duration-200 block leading-relaxed'>
                    {locale === 'ar' ? item.labelAr : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}
