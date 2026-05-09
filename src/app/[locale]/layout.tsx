// src/app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { DM_Sans, Tajawal } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import StoreProvider from '@/store/StoreProvider';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
});

const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
});

const locales = ['en', 'ar'];

export const metadata: Metadata = {
  title: 'Bin Hindi Law Company',
  description: 'Bin Hindi Law Company',
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontClass = locale === 'ar' ? tajawal.variable : dmSans.variable;

  return (
    <html lang={locale} dir={dir} className={fontClass}>
      <body className={locale === 'ar' ? 'font-tajawal' : 'font-dm-sans'}>
        <NextIntlClientProvider messages={messages}>
          <StoreProvider>
            <Navbar locale={locale} />
            <main className='pt-[68px]'>{children}</main>
            <Footer locale={locale} />
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
