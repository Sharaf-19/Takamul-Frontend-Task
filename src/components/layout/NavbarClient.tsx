'use client';
import { useState } from 'react';
import { Menu, Search } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/index';
import { openSearch } from '@/store/uiSlice';
import { NavLink, ServiceItem } from '@/types/navigation';
import NavLinks from './NavLinks';
import LanguageSwitcher from './LanguageSwitcher';
import SearchModal from './SearchModal';
import MobileMenu from './MobileMenu';

interface Props {
  locale: string;
  links: NavLink[];
  serviceColumns: ServiceItem[][];
}

export default function NavbarClient({ locale, links, serviceColumns }: Props) {
  const dispatch = useDispatch();
  const isSearchOpen = useSelector((state: RootState) => state.ui.isSearchOpen);
  const [mobileOpen, setMobileOpen] = useState(false);

  const searchPlaceholder = locale === 'ar' ? 'بحث...' : 'Search...';

  return (
    <>
      {/* Desktop nav — hidden on mobile */}
      <div className='hidden md:flex items-center gap-6'>
        <NavLinks links={links} serviceColumns={serviceColumns} locale={locale} />
      </div>

      {/* Right side controls */}
      <div className='flex items-center gap-4'>
        {/* Search icon */}
        <button
          onClick={() => dispatch(openSearch())}
          aria-label='Open search'
          className='text-white hover:text-white/70 transition-colors duration-200'>
          <Search size={18} />
        </button>

        {/* Language switcher */}
        <LanguageSwitcher locale={locale} />

        <a
          href={`/${locale}/contact`}
          className='hidden md:inline-flex items-center border border-white text-white text-[14px] px-4 py-2 rounded-md hover:bg-white hover:text-brown-dark transition-colors duration-200'>
          {locale === 'ar' ? 'احجز موعداً' : 'Book Appointment'}
        </a>

        {/* Hamburger — mobile only */}
        <button
          onClick={() => setMobileOpen(true)}
          aria-label='Open menu'
          className='md:hidden text-white p-1'>
          <Menu size={22} />
        </button>
      </div>

      {/* Search modal */}
      {isSearchOpen && <SearchModal locale={locale} placeholder={searchPlaceholder} />}

      {/* Mobile menu */}
      {mobileOpen && (
        <MobileMenu
          links={links}
          serviceColumns={serviceColumns}
          locale={locale}
          onClose={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}