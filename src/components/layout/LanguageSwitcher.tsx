'use client';
import { useRouter, usePathname } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Props {
  locale: string;
}

export default function LanguageSwitcher({ locale }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const switchTo = (nextLocale: string) => {
    setOpen(false);
    // Replace current locale prefix in the path
    const segments = pathname.split('/');
    segments[1] = nextLocale;
    router.push(segments.join('/'));
  };

  return (
    <div className='relative'>
      <button
        onClick={() => setOpen(!open)}
        className='flex items-center gap-1 text-white text-[14px] hover:text-white/80 transition-colors duration-200'
        aria-label='Switch language'>
        {locale === 'ar' ? 'ع' : 'En'}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div className='absolute top-full mt-2 start-0 bg-brown-dark border border-white/10 rounded-sm min-w-[80px] z-50'>
          {['en', 'ar'].map(loc => (
            <button
              key={loc}
              onClick={() => switchTo(loc)}
              className={`w-full text-start px-3 py-2 text-[13px] transition-colors duration-200
                ${loc === locale ? 'text-white/50 cursor-default' : 'text-white hover:bg-brown-mid'}`}>
              {loc === 'en' ? 'English' : 'العربية'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
