export interface HeroSlide {
  id: number;
  headline: string;
  headlineAr: string;
  subheadline: string;
  subheadlineAr: string;
  ctaLabel: string;
  ctaLabelAr: string;
  ctaUrl: string;
  backgroundImage: string; // public path or URL
  personImage: string | null;
  type: 'image' | 'video';
  videoUrl?: string;
}

export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    headline: 'Professional Legal Services You Can Trust',
    headlineAr: 'خدمات قانونية احترافية يمكنك الوثوق بها',
    subheadline:
      'We provide comprehensive legal consulting and representation across all practice areas in the Kingdom.',
    subheadlineAr:
      'نقدم استشارات قانونية شاملة وتمثيلاً قانونياً في جميع مجالات الممارسة بالمملكة.',
    ctaLabel: 'Read more',
    ctaLabelAr: 'اقرأ المزيد',
    ctaUrl: '/services',
    backgroundImage: '/images/hero-bg-1.jpg',
    videoUrl: '/images/hero-video.mp4', // Optional: If you want to use a video background
    personImage: '/images/owner.svg',
    type: 'video',
  },
  {
    id: 2,
    headline: 'Trusted by Leading Companies in Saudi Arabia',
    headlineAr: 'موثوق به من قِبل كبرى الشركات في المملكة',
    subheadline:
      'Our team of experienced lawyers delivers results for corporate and individual clients alike.',
    subheadlineAr: 'يقدم فريقنا من المحامين ذوي الخبرة نتائج متميزة للعملاء من الشركات والأفراد.',
    ctaLabel: 'Our Services',
    ctaLabelAr: 'خدماتنا',
    ctaUrl: '/services',
    backgroundImage: '/images/hero-bg-1.jpg',
    personImage: null,
    type: 'image',
  },
  {
    id: 3,
    headline: 'Supporting Vision 2030 Legal Framework',
    headlineAr: 'دعم الإطار القانوني لرؤية 2030',
    subheadline:
      'Specialized expertise in commercial law, foreign investment, and corporate governance.',
    subheadlineAr: 'خبرة متخصصة في قانون التجارة والاستثمار الأجنبي وحوكمة الشركات.',
    ctaLabel: 'Book Appointment',
    ctaLabelAr: 'احجز موعداً',
    ctaUrl: '/contact',
    backgroundImage: '/images/hero-bg-3.jpg',
    personImage: null,
    type: 'image',
  },
];
