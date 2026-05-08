// src/types/service.ts

export interface ServiceBodyItem {
  subheading: string;
  subheadingAr: string;
  paragraph: string;
  paragraphAr: string;
  bullets?: string[];
  bulletsAr?: string[];
}

export interface Service {
  id: number;
  slug: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  body: ServiceBodyItem[];
  coverImage: string;
  seoTitle: string;
  seoTitleAr: string;
  seoDescription: string;
  seoDescriptionAr: string;
}
