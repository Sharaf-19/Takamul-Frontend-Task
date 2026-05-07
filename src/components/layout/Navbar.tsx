import Link from 'next/link';
//import Image from 'next/image';
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
          <div className='w-10 h-10 bg-white/10 rounded flex items-center justify-center'>
            <span className='text-white text-xs font-bold'>IO</span>
          </div>
          <span className='text-white font-bold text-sm hidden sm:block'>
            {locale === 'ar' ? 'آيو تك' : 'IO-TECH'}
          </span>
        </Link>

        {/* Client-side interactive part */}
        <NavbarClient locale={locale} links={navLinks} serviceColumns={serviceColumns} />
      </div>
    </header>
  );
}
