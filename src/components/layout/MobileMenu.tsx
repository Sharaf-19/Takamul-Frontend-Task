'use client';
import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown } from 'lucide-react';
import { NavLink, ServiceItem } from '@/types/navigation';

interface Props {
  links: NavLink[];
  serviceColumns: ServiceItem[][];
  locale: string;
  onClose: () => void;
}

export default function MobileMenu({ links, serviceColumns, locale, onClose }: Props) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const allServices = serviceColumns.flat();

  return (
    <div className='fixed inset-0 bg-brown-dark z-50 overflow-y-auto'>
      <div className='flex items-center justify-between px-4 h-[68px] border-b border-white/10'>
        <span className='text-white font-bold text-lg'>IO-TECH</span>
        <button onClick={onClose} aria-label='Close menu' className='text-white p-2'>
          <X size={22} />
        </button>
      </div>

      <nav className='px-4 py-6 flex flex-col gap-1'>
        {links.map(link => {
          const label = locale === 'ar' ? link.labelAr : link.label;
          const isServices = link.label === 'Services';

          if (isServices) {
            return (
              <div key={link.url}>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className='flex items-center justify-between w-full text-white text-[15px] py-3 border-b border-white/10'>
                  {label}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {servicesOpen && (
                  <div className='ps-4 py-2 flex flex-col gap-2'>
                    {allServices.map(item => (
                      <Link
                        key={item.slug}
                        href={`/${locale}/services/${item.slug}`}
                        onClick={onClose}
                        className='text-white/70 text-[13px] py-1 hover:text-white transition-colors'>
                        {locale === 'ar' ? item.labelAr : item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={link.url}
              href={`/${locale}${link.url}`}
              onClick={onClose}
              className='text-white text-[15px] py-3 border-b border-white/10 block hover:text-white/80 transition-colors'>
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
