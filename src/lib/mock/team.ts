// src/lib/mock/team.ts

import { TeamMember } from '@/types/team';

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Mohammed Saif',
    nameAr: 'محمد سيف',
    role: 'CEO / Founder',
    roleAr: 'الرئيس التنفيذي / المؤسس',
    photo: '/images/person1.png',
    socialLinks: {
      phone: 'tel:+966500000001',
      whatsapp: 'https://wa.me/966500000001',
      email: 'mailto:mohammed@io-tech.sa',
    },
  },
  {
    id: 2,
    name: 'Sarah Al-Rashidi',
    nameAr: 'سارة الراشدي',
    role: 'Head of Strategy',
    roleAr: 'رئيسة الاستراتيجية',
    photo: '/images/person1.png',
    socialLinks: {
      phone: 'tel:+966500000002',
      whatsapp: 'https://wa.me/966500000002',
      email: 'mailto:sarah@io-tech.sa',
    },
  },
  {
    id: 3,
    name: 'Khalid Al-Otaibi',
    nameAr: 'خالد العتيبي',
    role: 'Lead Engineer',
    roleAr: 'مهندس أول',
    photo: '/images/person1.png',
    socialLinks: {
      phone: 'tel:+966500000003',
      whatsapp: 'https://wa.me/966500000003',
      email: 'mailto:khalid@io-tech.sa',
    },
  },
  {
    id: 4,
    name: 'Nora Al-Zahrani',
    nameAr: 'نورة الزهراني',
    role: 'UX Designer',
    roleAr: 'مصممة تجربة المستخدم',
    photo: '/images/person1.png',
    socialLinks: {
      phone: 'tel:+966500000004',
      whatsapp: 'https://wa.me/966500000004',
      email: 'mailto:nora@io-tech.sa',
    },
  },
  {
    id: 5,
    name: 'Faisal Al-Ghamdi',
    nameAr: 'فيصل الغامدي',
    role: 'Project Manager',
    roleAr: 'مدير المشاريع',
    photo: '/images/person1.png',
    socialLinks: {
      phone: 'tel:+966500000005',
      whatsapp: 'https://wa.me/966500000005',
      email: 'mailto:faisal@io-tech.sa',
    },
  },
];

export const teamSection = {
  heading: 'Our Team',
  headingAr: 'فريقنا',
  subtext:
    "Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem ipsum has been the industry's standard dummy text ever since the 1500s.",
  subtextAr:
    'نص تجريبي يُستخدم في صناعة الطباعة والتنضيد. لوريم إيبسوم هو النص التجريبي المعياري في الصناعة منذ القرن السادس عشر.',
};
