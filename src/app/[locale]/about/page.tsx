// src/app/[locale]/about/page.tsx

import HeroShort from '@/components/sections/HeroShort';
import { aboutContent } from '@/lib/mock/about';

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params: { locale } }: Props) {
  return {
    title: locale === 'ar' ? 'من نحن | Bin Hindi' : 'About Us | Bin Hindi',
    description:
      locale === 'ar'
        ? 'تعرّف على Bin Hindi ومهمتنا ورؤيتنا وقيمنا'
        : 'Learn about Bin Hindi, our mission, vision and values',
  };
}

export default function AboutPage({ params: { locale } }: Props) {
  const isAr = locale === 'ar';
  const c = aboutContent;

  return (
    <main>
      <HeroShort title={isAr ? c.headingAr : c.heading} />

      <div className='bg-white'>
        <div className='mx-auto max-w-container px-6 py-14'>
          <div className='max-w-[720px] mb-14'>
            <p className='text-text-muted text-[15px] leading-[1.8]'>
              {isAr ? c.introAr : c.intro}
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 py-10 border-y border-gray-100'>
            {c.stats.map((stat, i) => (
              <div key={i} className='text-center'>
                <p className='text-brown-dark text-[36px] font-bold leading-none mb-2'>
                  {stat.value}
                </p>
                <p className='text-text-muted text-[13px]'>{isAr ? stat.labelAr : stat.label}</p>
              </div>
            ))}
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mb-16'>
            <div>
              <h2 className='text-text-primary text-[20px] font-bold mb-4'>
                {isAr ? c.mission.headingAr : c.mission.heading}
              </h2>
              <p className='text-text-muted text-[14px] leading-[1.8]'>
                {isAr ? c.mission.bodyAr : c.mission.body}
              </p>
            </div>

            <div>
              <h2 className='text-text-primary text-[20px] font-bold mb-4'>
                {isAr ? c.vision.headingAr : c.vision.heading}
              </h2>
              <p className='text-text-muted text-[14px] leading-[1.8]'>
                {isAr ? c.vision.bodyAr : c.vision.body}
              </p>
            </div>
          </div>

          <div>
            <h2 className='text-text-primary text-[20px] font-bold mb-8'>
              {isAr ? c.values.headingAr : c.values.heading}
            </h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
              {c.values.items.map((value, i) => (
                <div key={i} className='bg-off-white px-6 py-8 rounded-sm'>
                  <p className='text-brown-dark text-[28px] font-bold leading-none mb-4'>
                    0{i + 1}
                  </p>
                  <h3 className='text-text-primary text-[15px] font-bold mb-2'>
                    {isAr ? value.titleAr : value.title}
                  </h3>
                  <p className='text-text-muted text-[13px] leading-[1.7]'>
                    {isAr ? value.descriptionAr : value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
