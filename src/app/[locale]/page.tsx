import HeroSection from '@/components/sections/HeroSection';
import { heroSlides } from '@/lib/mock/hero';

interface Props {
  params: { locale: string };
}

export default function HomePage({ params: { locale } }: Props) {
  return (
    <main>
      <HeroSection slides={heroSlides} locale={locale} />
    </main>
  );
}
