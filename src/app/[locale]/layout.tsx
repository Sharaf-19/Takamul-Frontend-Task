//app/[locale]/layout.tsx

import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
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
  const fontClass = locale === 'ar' ? tajawal.variable : inter.variable;

  return (
    <html lang={locale} dir={dir} className={fontClass}>
      <body className={locale === 'ar' ? 'font-tajawal' : 'font-inter'}>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
