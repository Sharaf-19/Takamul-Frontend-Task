'use client';
import { useState, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import { NavLink, ServiceItem } from '@/types/navigation';
import MegaDropdown from './MegaDropdown';

interface Props {
  links: NavLink[];
  serviceColumns: ServiceItem[][];
  locale: string;
}

export default function NavLinks({ links, serviceColumns, locale }: Props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 150);
  };

  //const servicesLabel = locale === 'ar' ? 'الخدمات' : 'Services';

  return (
    <nav className='relative flex items-center gap-6'>
      {links.map(link => {
        const isServices = link.label === 'Services';
        const label = locale === 'ar' ? link.labelAr : link.label;

        if (isServices) {
          return (
            <div
              key={link.url}
              className='relative'
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <button
                className='flex items-center gap-1 text-white text-[14px] hover:text-white/80 transition-colors duration-200'
                aria-expanded={dropdownOpen}
                aria-haspopup='true'>
                {label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {dropdownOpen && (
                <MegaDropdown columns={serviceColumns} locale={locale} isOpen={dropdownOpen} />
              )}
            </div>
          );
        }

        return (
          <Link
            key={link.url}
            href={`/${locale}${link.url}`}
            className='text-white text-[14px] hover:text-white/80 transition-colors duration-200'>
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
