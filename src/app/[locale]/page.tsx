import ClientsSection from '@/components/sections/ClientSection';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import { heroSlides } from '@/lib/mock/hero';

interface Props {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: Props) {
  return (
    <main>
      <HeroSection slides={heroSlides} locale={locale} />
      <TeamSection locale={locale} />
      <ClientsSection locale={locale} />
    </main>
  );
}
