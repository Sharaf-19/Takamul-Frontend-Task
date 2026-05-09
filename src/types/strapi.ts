// src/types/strapi.ts

// ─── Base Strapi 5 response shapes ───────────────────────────────────────────

export interface StrapiImage {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiMeta {
  pagination: StrapiPagination;
}

// A single item response: { data: { id, ...attrs }, meta: {} }
export interface StrapiSingle<T> {
  data: T & { id: number };
  meta: Record<string, unknown>;
}

// A collection response: { data: [...], meta: { pagination } }
export interface StrapiCollection<T> {
  data: (T & { id: number })[];
  meta: StrapiMeta;
}

// ─── Hero Slide ───────────────────────────────────────────────────────────────

export interface StrapiHeroSlide {
  id: number;
  headline: string;
  subheadline: string;
  ctaLabel: string;
  ctaUrl: string;
  order: number;
  isActive: boolean;
  backgroundImage: StrapiImage | null;
  personImage: StrapiImage | null;
}

// ─── Service ─────────────────────────────────────────────────────────────────

// Strapi Blocks rich text node types
export interface StrapiBlockText {
  type: 'text';
  text: string;
  bold?: boolean;
}

export interface StrapiBlockParagraph {
  type: 'paragraph';
  children: StrapiBlockText[];
}

export interface StrapiBlockHeading {
  type: 'heading';
  level: number;
  children: StrapiBlockText[];
}

export interface StrapiBlockListItem {
  type: 'list-item';
  children: StrapiBlockText[];
}

export interface StrapiBlockList {
  type: 'list';
  format: 'ordered' | 'unordered';
  children: StrapiBlockListItem[];
}

export type StrapiBlock = StrapiBlockParagraph | StrapiBlockHeading | StrapiBlockList;

export interface StrapiService {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  body: StrapiBlock[];
  seoTitle: string;
  seoDescription: string;
  isActive: boolean;
  coverImage: StrapiImage | null;
}

// ─── Team Member ─────────────────────────────────────────────────────────────

export interface StrapiTeamMember {
  id: number;
  name: string;
  role: string;
  bio: string | null;
  order: number;
  photo: StrapiImage | null;
}

// ─── Testimonial ─────────────────────────────────────────────────────────────

export interface StrapiTestimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  order: number;
  photo: StrapiImage | null;
}

// ─── Navigation ──────────────────────────────────────────────────────────────

export interface StrapiNavItem {
  id: number;
  label: string;
  url: string;
  order: number;
  hasDropdown: boolean;
}

// ─── Footer Config ───────────────────────────────────────────────────────────

export interface StrapiFooterNavLink {
  label: string;
  url: string;
}

export interface StrapiSocialLink {
  platform: 'twitter' | 'facebook' | 'google-plus';
  url: string;
  ariaLabel: string;
}

export interface StrapiFooterConfig {
  id: number;
  copyrightText: string;
  contactsLabel: string;
  contactsUrl: string;
  navLinks: StrapiFooterNavLink[];
  socialLinks: StrapiSocialLink[];
}
