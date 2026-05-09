// src/app/[locale]/services/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/api/services';
import HeroShort from '@/components/sections/HeroShort';
import StrapiBlocksRenderer from '@/components/ui/StrapiBlocksRenderer';

interface Props {
  params: { locale: string; slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllServiceSlugs();
  const locales = ['en', 'ar'];
  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })));
}

export async function generateMetadata({ params: { locale, slug } }: Props) {
  const service = await getServiceBySlug(slug, locale);
  if (!service) return {};
  return {
    title: service.seoTitle,
    description: service.seoDescription,
  };
}

export default async function ServiceDetailPage({ params: { locale, slug } }: Props) {
  const service = await getServiceBySlug(slug, locale);
  if (!service) notFound();

  const isAr = locale === 'ar';
  const backLabel = isAr ? 'رجوع' : 'Back';

  return (
    <main>
      <HeroShort title={service.title ?? ''} />

      <div className='bg-white'>
        <div className='mx-auto max-w-container px-6 py-10 md:py-16'>
          <div className='mb-10'>
            <Link
              href={`/${locale}/services`}
              className='inline-flex items-center gap-2 font-medium text-[14px] transition-opacity duration-200 hover:opacity-70'
              style={{ color: '#4B2615' }}>
              {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {backLabel}
            </Link>
          </div>

          <div className='w-full max-w-[1000px] font-dm-sans'>
            <h1 className='text-text-primary text-[28px] md:text-[40px] font-bold leading-tight mb-8'>
              {service.title}
            </h1>

            <p className='text-text-muted text-[16px] leading-[1.7] mb-12'>{service.excerpt}</p>

            {service.body && service.body.length > 0 && (
              <StrapiBlocksRenderer blocks={service.body} locale={locale} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
