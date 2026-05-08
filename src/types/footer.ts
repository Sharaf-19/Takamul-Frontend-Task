// src/types/footer.ts

export interface FooterLink {
  label: string;
  labelAr: string;
  url: string;
}

export interface SocialLink {
  platform: 'twitter' | 'facebook' | 'google-plus';
  url: string;
  ariaLabel: string;
}

export interface FooterConfig {
  navLinks: FooterLink[];
  socialLinks: SocialLink[];
  copyrightText: string;
  copyrightTextAr: string;
  contactsLabel: string;
  contactsLabelAr: string;
  contactsUrl: string;
}
