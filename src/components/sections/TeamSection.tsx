// src/components/sections/TeamSection.tsx

import { teamMembers, teamSection } from '@/lib/mock/team';
import TeamCarousel from './TeamCarousel';

interface Props {
  locale: string;
}

export default function TeamSection({ locale }: Props) {
  const isAr = locale === 'ar';
  const heading = isAr ? teamSection.headingAr : teamSection.heading;
  const subtext = isAr ? teamSection.subtextAr : teamSection.subtext;

  return (
    <section className='bg-off-white py-16 md:py-24'>
      <div className='mx-auto max-w-container px-6'>
        {/* Section heading */}
        <div className='font-dm-sans text-center mb-10'>
          <h2 className='text-text-primary text-[40px] font-bold leading-tight mb-3'>{heading}</h2>
          <p className='text-text-muted text-[14px] leading-[1.7] max-w-[480px] mx-auto'>
            {subtext}
          </p>
        </div>

        {/* Carousel — client component handles interaction */}
        <TeamCarousel members={teamMembers} locale={locale} />
      </div>
    </section>
  );
}
