// src/app/[locale]/contact/page.tsx

import HeroShort from '@/components/sections/HeroShort';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

interface Props {
  params: { locale: string };
}

export function generateMetadata({ params: { locale } }: Props) {
  return {
    title: locale === 'ar' ? 'اتصل بنا | IO-TECH' : 'Contact Us | IO-TECH',
    description: locale === 'ar' ? 'تواصل مع فريق IO-TECH' : 'Get in touch with the IO-TECH team',
  };
}

const contactInfo = {
  address: {
    en: 'King Fahd Road, Riyadh, Saudi Arabia',
    ar: 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
  },
  phone: { en: '+966 11 000 0000', ar: '+966 11 000 0000' },
  email: { en: 'info@io-tech.sa', ar: 'info@io-tech.sa' },
  hours: { en: 'Sun – Thu: 8:00 AM – 5:00 PM', ar: 'الأحد – الخميس: 8:00 ص – 5:00 م' },
};

export default function ContactPage({ params: { locale } }: Props) {
  const isAr = locale === 'ar';

  const pageTitle = isAr ? 'اتصل بنا' : 'Contact Us';
  const formHeading = isAr ? 'أرسل لنا رسالة' : 'Send Us a Message';
  const infoHeading = isAr ? 'معلومات التواصل' : 'Contact Information';

  return (
    <main>
      <HeroShort title={pageTitle} />

      <div className='bg-white'>
        <div className='mx-auto max-w-container px-6 py-14'>
          {/* Two-column layout: form left, info right */}
          <div className='grid grid-cols-1 md:grid-cols-[1fr_320px] gap-14'>
            {/* Left — contact form */}
            <div>
              <h2 className='text-text-primary text-[22px] font-bold mb-8'>{formHeading}</h2>
              <ContactForm locale={locale} />
            </div>

            {/* Right — contact details */}
            <div>
              <h2 className='text-text-primary text-[22px] font-bold mb-8'>{infoHeading}</h2>

              <div className='flex flex-col gap-6'>
                {/* Address */}
                <div className='flex items-start gap-4'>
                  <div className='w-9 h-9 rounded-sm bg-off-white flex items-center justify-center shrink-0 mt-0.5'>
                    <MapPin size={16} className='text-brown-dark' />
                  </div>
                  <div>
                    <p className='text-text-primary text-[13px] font-medium mb-0.5'>
                      {isAr ? 'العنوان' : 'Address'}
                    </p>
                    <p className='text-text-muted text-[13px] leading-[1.6]'>
                      {isAr ? contactInfo.address.ar : contactInfo.address.en}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className='flex items-start gap-4'>
                  <div className='w-9 h-9 rounded-sm bg-off-white flex items-center justify-center shrink-0 mt-0.5'>
                    <Phone size={16} className='text-brown-dark' />
                  </div>
                  <div>
                    <p className='text-text-primary text-[13px] font-medium mb-0.5'>
                      {isAr ? 'الهاتف' : 'Phone'}
                    </p>
                    <a
                      href={`tel:${contactInfo.phone.en.replace(/\s/g, '')}`}
                      className='text-text-muted text-[13px] hover:text-brown-dark transition-colors duration-200'>
                      {contactInfo.phone.en}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className='flex items-start gap-4'>
                  <div className='w-9 h-9 rounded-sm bg-off-white flex items-center justify-center shrink-0 mt-0.5'>
                    <Mail size={16} className='text-brown-dark' />
                  </div>
                  <div>
                    <p className='text-text-primary text-[13px] font-medium mb-0.5'>
                      {isAr ? 'البريد الإلكتروني' : 'Email'}
                    </p>
                    <a
                      href={`mailto:${contactInfo.email.en}`}
                      className='text-text-muted text-[13px] hover:text-brown-dark transition-colors duration-200'>
                      {contactInfo.email.en}
                    </a>
                  </div>
                </div>

                {/* Working hours */}
                <div className='flex items-start gap-4'>
                  <div className='w-9 h-9 rounded-sm bg-off-white flex items-center justify-center shrink-0 mt-0.5'>
                    <Clock size={16} className='text-brown-dark' />
                  </div>
                  <div>
                    <p className='text-text-primary text-[13px] font-medium mb-0.5'>
                      {isAr ? 'ساعات العمل' : 'Working Hours'}
                    </p>
                    <p className='text-text-muted text-[13px]'>
                      {isAr ? contactInfo.hours.ar : contactInfo.hours.en}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
