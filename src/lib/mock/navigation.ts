// Mock data shaped to match future Strapi response
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

export const navLinks: NavLink[] = [
  { label: 'About us', labelAr: 'من نحن', url: '/about' },
  { label: 'Services', labelAr: 'الخدمات', url: '/services' },
  { label: 'Our Team', labelAr: 'فريقنا', url: '/team' },
  { label: 'Blogs', labelAr: 'المدونة', url: '/blogs' },
  { label: 'Contact Us', labelAr: 'اتصل بنا', url: '/contact' },
];

// 4 columns × 5 items — matches Figma mega dropdown
export const serviceColumns: ServiceItem[][] = [
  [
    {
      label: 'Legal Consultation Services',
      labelAr: 'خدمات الاستشارات القانونية',
      slug: 'legal-consultation',
    },
    {
      label: 'Foreign Investment Services',
      labelAr: 'خدمات الاستثمار الأجنبي',
      slug: 'foreign-investment',
    },
    { label: 'Contracts', labelAr: 'العقود', slug: 'contracts' },
    { label: 'Notarization', labelAr: 'التوثيق', slug: 'notarization' },
    { label: 'Insurance', labelAr: 'التأمين', slug: 'insurance' },
  ],
  [
    {
      label: '........... and Defense in All Cases',
      labelAr: 'الدفاع في جميع القضايا',
      slug: 'defense-cases',
    },
    {
      label: 'Banks and Financial Institutions',
      labelAr: 'البنوك والمؤسسات المالية',
      slug: 'banks-financial',
    },
    {
      label: 'Corporate Governance Services',
      labelAr: 'خدمات حوكمة الشركات',
      slug: 'corporate-governance',
    },
    { label: 'Companies Liquidation', labelAr: 'تصفية الشركات', slug: 'companies-liquidation' },
    {
      label: 'Internal Regulations for Companies',
      labelAr: 'اللوائح الداخلية للشركات',
      slug: 'internal-regulations',
    },
  ],
  [
    {
      label: 'Services for Companies and Institutions',
      labelAr: 'خدمات الشركات والمؤسسات',
      slug: 'company-services',
    },
    { label: 'Arbitration', labelAr: 'التحكيم', slug: 'arbitration' },
    { label: 'Intellectual Property', labelAr: 'الملكية الفكرية', slug: 'intellectual-property' },
    {
      label: 'Corporate Restructuring and Reorganization',
      labelAr: 'إعادة هيكلة الشركات',
      slug: 'corporate-restructuring',
    },
  ],
  [
    {
      label: 'Establishing National and Foreign Companies',
      labelAr: 'تأسيس الشركات الوطنية والأجنبية',
      slug: 'establishing-companies',
    },
    { label: 'Commercial Agencies', labelAr: 'الوكالات التجارية', slug: 'commercial-agencies' },
    { label: 'Supporting Vision 2030', labelAr: 'دعم رؤية 2030', slug: 'vision-2030' },
    { label: 'Estates', labelAr: 'العقارات', slug: 'estates' },
  ],
];
