// src/components/sections/TeamSection.tsx

import { TeamMember } from '@/types/team';
import TeamCarousel from './TeamCarousel';

interface Props {
  locale: string;
  members: TeamMember[];
}

const teamSection = {
  heading: 'Our Team',
  headingAr: 'فريقنا',
  subtext:
    'Our team combines legal knowledge, commercial awareness, and practical experience to guide clients with clear advice and dependable representation.',
  subtextAr:
    'يجمع فريقنا بين الخبرة القانونية والفهم التجاري والخبرة العملية لتقديم استشارات واضحة وتمثيل مهني موثوق لعملائنا.',
};

export default function TeamSection({ locale, members }: Props) {
  const isAr = locale === 'ar';
  const heading = isAr ? teamSection.headingAr : teamSection.heading;
  const subtext = isAr ? teamSection.subtextAr : teamSection.subtext;

  return (
    <section className='bg-off-white py-16 md:py-24'>
      <div className='mx-auto max-w-container px-6'>
        <div className='font-dm-sans text-center mb-10'>
          <h2 className='text-text-primary text-[40px] font-bold leading-tight mb-3'>{heading}</h2>
          <p className='text-text-muted text-[14px] leading-[1.7] max-w-[480px] mx-auto'>
            {subtext}
          </p>
        </div>
        <TeamCarousel members={members} locale={locale} />
      </div>
    </section>
  );
}
