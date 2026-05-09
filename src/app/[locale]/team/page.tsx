// src/app/[locale]/team/page.tsx

import { getTeamMembers } from '@/lib/api/team';
import { getTestimonials } from '@/lib/api/testimonials';
import { getStrapiMediaUrl } from '@/lib/api/strapi';
import { TeamMember } from '@/types/team';
import { Testimonial, ClientsConfig } from '@/types/client';
import HeroShort from '@/components/sections/HeroShort';
import TeamSection from '@/components/sections/TeamSection';
import ClientsSection from '@/components/sections/ClientSection';

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params: { locale } }: Props) {
  return {
    title: locale === 'ar' ? 'فريقنا | Bin Hindi' : 'Our Team | Bin Hindi',
    description: locale === 'ar' ? 'تعرّف على فريق Bin Hindi المتخصص' : 'Meet the Bin Hindi team',
  };
}

export default async function TeamPage({ params: { locale } }: Props) {
  const [rawTeam, rawTestimonials] = await Promise.all([
    getTeamMembers(locale),
    getTestimonials(locale),
  ]);

  const teamMembers: TeamMember[] = rawTeam.map(member => ({
    id: member.id,
    name: member.name ?? '',
    nameAr: member.name ?? '',
    role: member.role ?? '',
    roleAr: member.role ?? '',
    photo: getStrapiMediaUrl(member.photo?.url) ?? '/images/person1.png',
    socialLinks: {},
  }));

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
      <HeroShort title='Our Team' />
      <TeamSection locale={locale} members={teamMembers} />
      <ClientsSection locale={locale} config={clientsConfig} />
    </main>
  );
}
