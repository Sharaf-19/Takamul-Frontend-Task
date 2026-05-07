import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['en', 'ar'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) notFound();

  return {
    // Notice the path goes up ONE folder now (../) instead of two (../../)
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
