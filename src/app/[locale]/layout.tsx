import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import StoreProvider from '@/store/StoreProvider';
import Navbar from '@/components/layout/Navbar';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const tajawal = Tajawal({
  subsets: ['arabic'],
  weight: ['400', '700'],
  variable: '--font-tajawal',
});

const locales = ['en', 'ar'];

export const metadata: Metadata = {
  title: 'IO-TECH',
  description: 'IO-TECH Services',
};

interface Props {
  children: React.ReactNode;
  params: { locale: string };
}

export default async function LocaleLayout({ children, params: { locale } }: Props) {
  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';
  const fontVariable = locale === 'ar' ? tajawal.variable : inter.variable;
  const fontClass = locale === 'ar' ? 'font-tajawal' : 'font-inter';

  return (
    <html lang={locale} dir={dir} className={fontVariable}>
      <body className={fontClass}>
        <StoreProvider>
          <NextIntlClientProvider messages={messages}>
            <Navbar locale={locale} />
            {children}
          </NextIntlClientProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
