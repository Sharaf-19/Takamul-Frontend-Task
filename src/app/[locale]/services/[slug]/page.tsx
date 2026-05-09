import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getServiceBySlug, getAllServiceSlugs } from '@/lib/mock/services';
import HeroShort from '@/components/sections/HeroShort';

interface Props {
  params: { locale: string; slug: string };
}

export function generateStaticParams() {
  const slugs = getAllServiceSlugs();
  const locales = ['en', 'ar'];

  return locales.flatMap(locale => slugs.map(slug => ({ locale, slug })));
}

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
      <HeroShort title='Services' />

      <div className='bg-white'>
        <div className='mx-auto max-w-container px-6 py-10 md:py-16'>
          {/* Back link */}
          <div className='mb-10'>
            <Link
              href={`/${locale}/services`}
              className='inline-flex items-center gap-2 font-medium text-[14px] transition-opacity duration-200 hover:opacity-70'
              style={{ color: '#4B2615' }}>
              {isAr ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
              {backLabel}
            </Link>
          </div>

          {/* Content wrapper */}
          <div className='w-full max-w-[1000px] font-dm-sans'>
            {/* Page title */}
            <h1 className='text-text-primary text-[28px] md:text-[40px] font-bold leading-tight mb-8'>
              {title}
            </h1>

            {/* Intro / excerpt */}
            <p className='text-text-muted text-[16px] leading-[1.7] mb-12'>{excerpt}</p>

            {/* Body sections */}
            {service.body.map((section, index) => {
              const subheading = isAr ? section.subheadingAr : section.subheading;
              const paragraph = isAr ? section.paragraphAr : section.paragraph;
              const bullets = isAr ? section.bulletsAr : section.bullets;

              return (
                <div key={index} className='mb-10 last:mb-0'>
                  <h2 className='text-text-primary text-[18px] md:text-[20px] font-bold mb-4'>
                    {subheading}
                  </h2>

                  <p className='text-text-muted text-[16px] leading-[1.7] mb-6'>{paragraph}</p>

                  {/* Bullet list — Figma style: Gray line left, Rectangular bullets, Spaced */}
                  {bullets && bullets.length > 0 && (
                    <div className={`border-l-2 border-gray-300 ${isAr ? 'pr-6' : 'pl-6'}`}>
                      <ul className='space-y-4'>
                        {bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className='flex items-start gap-3'>
                            {/* Rectangular bullet marker */}
                            <span className='mt-1.5 text-[16px] text-text-primary ml-4 shrink-0'>■</span>
                            {/* Bullet text */}
                            <span className='text-text-muted text-[16px] leading-[1.7]'>
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
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
