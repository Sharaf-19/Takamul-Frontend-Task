// src/lib/mock/footer.ts

import { FooterConfig } from '@/types/footer';

export const footerConfig: FooterConfig = {
  navLinks: [
    { label: 'About', labelAr: 'عن الشركة', url: '/about' },
    { label: 'Our Strategy', labelAr: 'استراتيجيتنا', url: '/strategy' },
    { label: 'Our Advantages', labelAr: 'مزاياتنا', url: '/advantages' },
    {
      label: 'Social Responsibility',
      labelAr: 'المسؤولية الاجتماعية',
      url: '/social-responsibility',
    },
    { label: 'Our Services', labelAr: 'خدماتنا', url: '/services' },
  ],
  socialLinks: [
    { platform: 'twitter', url: 'https://twitter.com', ariaLabel: 'Follow us on Twitter' },
    { platform: 'facebook', url: 'https://facebook.com', ariaLabel: 'Follow us on Facebook' },
    {
      platform: 'google-plus',
      url: 'https://plus.google.com',
      ariaLabel: 'Follow us on Google Plus',
    },
  ],
  copyrightText: '© 2024 . All rights reserved.',
  copyrightTextAr: '© 2024 . جميع الحقوق محفوظة.',
  contactsLabel: 'Contacts',
  contactsLabelAr: 'تواصل معنا',
  contactsUrl: '/contact',
};
