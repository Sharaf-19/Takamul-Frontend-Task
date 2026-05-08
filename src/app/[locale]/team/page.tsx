// src/app/[locale]/team/page.tsx

import ClientsSection from '@/components/sections/ClientSection';
import HeroShort from '@/components/sections/HeroShort';
import TeamSection from '@/components/sections/TeamSection';


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
      <HeroShort title={'Our Team'}/>
      <TeamSection locale={locale} />
      <ClientsSection locale={locale} />
    </main>
  );
}
