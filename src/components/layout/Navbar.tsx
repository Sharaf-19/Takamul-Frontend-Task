import Link from 'next/link';
import Image from 'next/image';
import { navLinks, serviceColumns } from '@/lib/mock/navigation';
import NavbarClient from './NavbarClient';

interface Props {
  locale: string;
}

export default function Navbar({ locale }: Props) {
  return (
    <header className='fixed top-0 start-0 w-full z-40 bg-brown-dark h-[68px]'>
      <div className='mx-auto max-w-container h-full px-6 flex items-center justify-between'>
        {/* Logo */}
        <Link href={`/${locale}`} className='flex items-center gap-2 shrink-0'>
          <Image
            src='/images/logo.svg'
            alt={locale === 'ar' ? 'آيو تك' : 'IO-TECH'}
            width={120}
            height={40}
            className='h-8 w-auto'
            priority
          />
        </Link>

        {/* Client-side interactive part */}
        <NavbarClient locale={locale} links={navLinks} serviceColumns={serviceColumns} />
      </div>
    </header>
  );
}
