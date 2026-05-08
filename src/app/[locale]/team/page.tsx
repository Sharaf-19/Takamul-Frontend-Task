// src/app/[locale]/team/page.tsx

import ClientsSection from '@/components/sections/ClientSection';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import { HeroSlide } from '@/types/navigation';

const teamPageSlides: HeroSlide[] = [
  {
    id: 1,
    headline: 'Our Team',
    headlineAr: 'فريقنا',
    subheadline: 'Meet the experts behind IO-TECH.',
    subheadlineAr: 'تعرّف على الخبراء وراء آيو تك.',
    ctaLabel: 'Contact Us',
    ctaLabelAr: 'تواصل معنا',
    ctaUrl: '/contact',
    backgroundImage: '/images/hero-bg-4.jpg', 
    personImage: null, 
    type: 'image',
  },
];

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params: { locale } }: Props) {
  return {
    title: locale === 'ar' ? 'فريقنا | IO-TECH' : 'Our Team | IO-TECH',
    description: locale === 'ar' ? 'تعرّف على فريق IO-TECH المتخصص' : 'Meet the IO-TECH team',
  };
}

export default function TeamPage({ params: { locale } }: Props) {
  return (
    <main>
      {/* ADDED: Hero Section is now actually rendered here */}
      <HeroSection slides={teamPageSlides} locale={locale} />

      <TeamSection locale={locale} />
      <ClientsSection locale={locale} />
    </main>
  );
}
