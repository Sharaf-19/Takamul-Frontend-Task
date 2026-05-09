// src/app/[locale]/page.tsx

import { getHeroSlides } from '@/lib/api/hero';
import { getTeamMembers } from '@/lib/api/team';
import { getTestimonials } from '@/lib/api/testimonials';
import { getStrapiMediaUrl } from '@/lib/api/strapi';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import ClientsSection from '@/components/sections/ClientSection';
import { HeroSlide } from '@/types/navigation';
import { TeamMember } from '@/types/team';
import { Testimonial, ClientsConfig } from '@/types/client';

interface Props {
  params: { locale: string };
}

export default async function HomePage({ params: { locale } }: Props) {
  const [rawSlides, rawTeam, rawTestimonials] = await Promise.all([
    getHeroSlides(locale),
    getTeamMembers(locale),
    getTestimonials(locale),
  ]);

  // Map Strapi hero slides → component shape
  // Slide order 1 = video slide (videoUrl hardcoded from public/images)
  const slides: HeroSlide[] = rawSlides.map(slide => {
    const isVideoSlide = slide.order === 1;

    return {
      id: slide.id,
      headline: slide.headline ?? '',
      headlineAr: slide.headline ?? '',
      subheadline: slide.subheadline ?? '',
      subheadlineAr: slide.subheadline ?? '',
      ctaLabel: slide.ctaLabel ?? '',
      ctaLabelAr: slide.ctaLabel ?? '',
      ctaUrl: slide.ctaUrl ?? '/services',
      backgroundImage: getStrapiMediaUrl(slide.backgroundImage?.url) ?? '/images/hero-bg-1.jpg',
      personImage: getStrapiMediaUrl(slide.personImage?.url) ?? null,
      type: isVideoSlide ? ('video' as const) : ('image' as const),
      videoUrl: isVideoSlide ? '/images/hero-video.mp4' : undefined,
    };
  });

  // Map Strapi team members → component shape
  const teamMembers: TeamMember[] = rawTeam.map(member => ({
    id: member.id,
    name: member.name ?? '',
    nameAr: member.name ?? '',
    role: member.role ?? '',
    roleAr: member.role ?? '',
    photo: getStrapiMediaUrl(member.photo?.url) ?? '/images/person1.png',
    socialLinks: {},
  }));

  // Map Strapi testimonials → component shape
  const testimonials: Testimonial[] = rawTestimonials.map(t => ({
    id: t.id,
    quote: t.quote ?? '',
    quoteAr: t.quote ?? '',
    name: t.name ?? '',
    nameAr: t.name ?? '',
    role: t.role ?? '',
    roleAr: t.role ?? '',
    photo: getStrapiMediaUrl(t.photo?.url) ?? '/images/person1.png',
  }));

  const clientsConfig: ClientsConfig = {
    heading: 'What our clients are saying',
    headingAr: 'ما يقوله عملاؤنا',
    intro:
      'Our clients range from individual investors, to local, international as well as fortune 500 companies.',
    introAr: 'يتنوع عملاؤنا بين المستثمرين الأفراد والشركات المحلية والدولية وشركات فورتشن 500.',
    testimonials,
  };

  return (
    <main>
      {slides.length > 0 && <HeroSection slides={slides} locale={locale} />}
      {teamMembers.length > 0 && <TeamSection locale={locale} members={teamMembers} />}
      {testimonials.length > 0 && <ClientsSection locale={locale} config={clientsConfig} />}
    </main>
  );
}
