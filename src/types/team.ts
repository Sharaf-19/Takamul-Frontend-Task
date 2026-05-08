export interface TeamMember {
  id: number;
  name: string;
  nameAr: string;
  role: string;
  roleAr: string;
  photo: string;
  socialLinks: {
    phone?: string;
    whatsapp?: string;
    email?: string;
  };
}
