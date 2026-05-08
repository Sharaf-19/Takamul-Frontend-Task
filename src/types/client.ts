export interface Testimonial {
  id: number;
  quote: string;
  quoteAr: string;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  photo: string;
}

export interface ClientsConfig {
  heading: string;
  headingAr: string;
  intro: string;
  introAr: string;
  testimonials: Testimonial[];
}
