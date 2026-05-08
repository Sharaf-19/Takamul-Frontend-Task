export interface NavLink {
  label: string;
  labelAr: string;
  url: string;
}

export interface ServiceItem {
  label: string;
  labelAr: string;
  slug: string;
}

export interface HeroSlide {
  id: number;
  headline: string;
  headlineAr: string;
  subheadline: string;
  subheadlineAr: string;
  ctaLabel: string;
  ctaLabelAr: string;
  ctaUrl: string;
  backgroundImage: string;
  personImage: string | null;
  type: 'image' | 'video';
  videoUrl?: string;
}