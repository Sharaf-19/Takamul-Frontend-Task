// src/app/[locale]/services/[slug]/page.tsx

import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/mock/services';
import HeroShort from '@/components/sections/HeroShort';

interface Props {
  params: { locale: string; slug: string };
}

// Pre-render all service slugs at build time
export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const locales = ['en', 'ar'];

  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })));
}

// SEO metadata per service + locale
export function generateMetadata({ params: { locale, slug } }: Props) {
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const isAr = locale === 'ar';
  return {
    title: isAr ? service.seoTitleAr : service.seoTitle,
    description: isAr ? service.seoDescriptionAr : service.seoDescription,
  };
}

export default function ServiceDetailPage({ params: { locale, slug } }: Props) {
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const isAr = locale === 'ar';
  const title = isAr ? service.titleAr : service.title;
  const excerpt = isAr ? service.excerptAr : service.excerpt;
  const backLabel = isAr ? 'رجوع' : 'Back';

  return (
    <main>
      {/* Short hero — reuses same component as team page */}
      <HeroShort title='Services' backgroundImage={service.coverImage} />

      <div className='bg-white'>
        <div className='mx-auto max-w-container px-6 py-10'>
          {/* Back link */}
          <Link
            href={`/${locale}/services`}
            className='inline-flex items-center gap-1 text-text-muted text-[14px] hover:text-text-primary transition-colors duration-200 mb-6'>
            {isAr ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            {backLabel}
          </Link>

          {/* Content — single column, max 720px */}
          <div className='max-w-[720px]'>
            {/* Page title */}
            <h1 className='text-text-primary text-[26px] md:text-[28px] font-bold leading-tight mb-4'>
              {title}
            </h1>

            {/* Intro / excerpt */}
            <p className='text-text-muted text-[14px] leading-[1.7] mb-8'>{excerpt}</p>

            {/* Body sections */}
            {service.body.map((section, index) => {
              const subheading = isAr ? section.subheadingAr : section.subheading;
              const paragraph = isAr ? section.paragraphAr : section.paragraph;
              const bullets = isAr ? section.bulletsAr : section.bullets;

              return (
                <div key={index} className='mb-8'>
                  {/* Subheading */}
                  <h2 className='text-text-primary text-[16px] font-bold mb-2'>{subheading}</h2>

                  {/* Paragraph */}
                  <p className='text-text-primary text-[14px] leading-[1.7] mb-3'>{paragraph}</p>

                  {/* Bullet list */}
                  {bullets && bullets.length > 0 && (
                    <ul className='ps-5 space-y-1' dir={isAr ? 'rtl' : 'ltr'}>
                      {bullets.map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className='text-text-primary text-[14px] leading-[1.7] list-none flex items-start gap-2'>
                          <span className='mt-1 shrink-0 text-[10px]'>■</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
