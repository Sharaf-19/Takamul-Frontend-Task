// src/components/layout/Navbar.tsx

import Link from 'next/link';
import Image from 'next/image';
import { getNavLinks } from '@/lib/api/navigation';
import { getServices } from '@/lib/api/services';
import { NavLink, ServiceItem } from '@/types/navigation';
import NavbarClient from './NavbarClient';

interface Props {
  locale: string;
}

export default async function Navbar({ locale }: Props) {
  const [rawNavLinks, rawServices] = await Promise.all([getNavLinks(locale), getServices(locale)]);

  const navLinks: NavLink[] = rawNavLinks.map(item => ({
    label: item.label,
    labelAr: item.label,
    url: item.url,
  }));

  const allServices: ServiceItem[] = rawServices.map(s => ({
    label: (s as { title?: string }).title ?? '',
    labelAr: (s as { title?: string }).title ?? '',
    slug: (s as { slug?: string }).slug ?? '',
  }));

  const COLUMN_COUNT = 4;
  const serviceColumns: ServiceItem[][] = Array.from({ length: COLUMN_COUNT }, () => []);
  allServices.forEach((service, index) => {
    serviceColumns[index % COLUMN_COUNT].push(service);
  });

  return (
    <header className='fixed top-0 start-0 w-full z-40 bg-brown-dark h-[68px]'>
      <div className='mx-auto max-w-container h-full px-6 flex items-center justify-between'>
        <Link href={`/${locale}`} className='flex items-center gap-2 shrink-0'>
          <Image
            src='/images/logo.svg'
            alt={locale === 'ar' ? 'بن هندي' : 'Bin Hindi'}
            width={120}
            height={40}
            className='h-8 w-auto'
            priority
          />
        </Link>

        <NavbarClient locale={locale} links={navLinks} serviceColumns={serviceColumns} />
      </div>
    </header>
  );
}
