const HERO_SLIDE_BACKGROUNDS = [
  '/images/hero-bg-1.jpg',
  '/images/hero-bg-2.webp',
  '/images/hero-bg-4.jpg',
];

const TEAM_MEMBER_PHOTOS = [
  '/images/team-person1.png',
  '/images/team-person2.jpg',
  '/images/team-person3.jpg',
  '/images/team-person4.jpg',
  '/images/team-person5.jpg',
];

const TESTIMONIAL_PHOTOS = [
  '/images/person1.jpg',
  '/images/person2.jpg',
  '/images/person3.jpg',
];

const TEAM_MEMBER_SOCIAL_LINKS = [
  {
    phone: 'tel:+966500000001',
    whatsapp: 'https://wa.me/966500000001',
    email: 'mailto:mohammed@io-tech.sa',
  },
  {
    phone: 'tel:+966500000002',
    whatsapp: 'https://wa.me/966500000002',
    email: 'mailto:sarah@io-tech.sa',
  },
  {
    phone: 'tel:+966500000003',
    whatsapp: 'https://wa.me/966500000003',
    email: 'mailto:khalid@io-tech.sa',
  },
  {
    phone: 'tel:+966500000004',
    whatsapp: 'https://wa.me/966500000004',
    email: 'mailto:nora@io-tech.sa',
  },
  {
    phone: 'tel:+966500000005',
    whatsapp: 'https://wa.me/966500000005',
    email: 'mailto:faisal@io-tech.sa',
  },
];

function getIndexedAsset<T>(assets: T[], index: number): T {
  return assets[Math.min(index, assets.length - 1)];
}

export function getHeroSlideBackground(index: number): string {
  return getIndexedAsset(HERO_SLIDE_BACKGROUNDS, index);
}

export function getHeroSlidePersonImage(): string {
  return '/images/owner.svg';
}

export function getTeamMemberPhoto(index: number): string {
  return getIndexedAsset(TEAM_MEMBER_PHOTOS, index);
}

export function getTestimonialPhoto(index: number): string {
  return getIndexedAsset(TESTIMONIAL_PHOTOS, index);
}

export function getTeamMemberSocialLinks(index: number) {
  return getIndexedAsset(TEAM_MEMBER_SOCIAL_LINKS, index);
}
