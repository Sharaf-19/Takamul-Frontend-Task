// src/components/layout/Footer.tsx

import Link from 'next/link';
import { getFooterConfig } from '@/lib/api/navigation';
import { footerConfig as fallbackConfig } from '@/lib/mock/footer';
import SubscribeForm from '@/components/forms/SubscribeForm';

// Custom X (Twitter) icon
function TwitterIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 7.878 7.878 0 0 0-.506.004c-.992.034-1.503.595-1.503 1.65v2.317h2.588l-.411 3.667h-2.177v7.98C19.396 22.825 24 18.082 24 12.222 24 5.47 18.627 0 12 0S0 5.47 0 12.222c0 5.86 4.604 10.603 10.101 10.469z' />
    </svg>
  );
}

function GooglePlusIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M12.545 10.239v3.821h5.445c-.712 2.315-2.647 3.972-5.445 3.972a6.033 6.033 0 1 1 0-12.064c1.498 0 2.866.549 3.921 1.453l2.814-2.814A9.969 9.969 0 0 0 12.545 2C7.021 2 2.543 6.477 2.543 12s4.478 10 10.002 10c8.396 0 10.249-7.85 9.426-11.748l-9.426-.013z' />
    </svg>
  );
}

interface Props {
  locale: string;
}

export default async function Footer({ locale }: Props) {
  const isAr = locale === 'ar';

  // Fetch from Strapi, fall back to mock if Strapi is unavailable
  const cmsConfig = await getFooterConfig(locale).catch(() => null);

  const navLinks = cmsConfig?.navLinks ?? fallbackConfig.navLinks;
  const socialLinks = cmsConfig?.socialLinks ?? fallbackConfig.socialLinks;
  const copyrightText =
    cmsConfig?.copyrightText ??
    (isAr ? fallbackConfig.copyrightTextAr : fallbackConfig.copyrightText);
  const contactsLabel =
    cmsConfig?.contactsLabel ??
    (isAr ? fallbackConfig.contactsLabelAr : fallbackConfig.contactsLabel);
  const contactsUrl = cmsConfig?.contactsUrl ?? fallbackConfig.contactsUrl;

  const subscribePlaceholder = isAr ? 'البريد الإلكتروني' : 'Email';
  const subscribeButton = isAr ? 'اشتراك' : 'Subscribe';

  return (
    <footer className='bg-brown-dark'>
      <div className='font-dm-sans mx-auto max-w-container px-6 py-8'>
        {/* Top row: Subscribe form + Contacts + Social */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-end gap-4 md:gap-8 mb-6'>
          <SubscribeForm placeholder={subscribePlaceholder} buttonLabel={subscribeButton} />

          <div className='flex items-center gap-5 shrink-0'>
            <Link
              href={`/${locale}${contactsUrl}`}
              className='text-white text-[13px] hover:text-white/70 transition-colors duration-200'>
              {contactsLabel}
            </Link>

            {socialLinks.map((link: { platform: string; url: string; ariaLabel: string }) => (
              <a
                key={link.platform}
                href={link.url}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={link.ariaLabel}
                className='text-white hover:text-white/70 transition-colors duration-200'>
                {link.platform === 'twitter' && <TwitterIcon />}
                {link.platform === 'facebook' && <FacebookIcon />}
                {link.platform === 'google-plus' && <GooglePlusIcon />}
              </a>
            ))}
          </div>
        </div>

        <hr className='border-white/20 mb-6' />

        {/* Bottom row: nav links + copyright */}
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
          <nav aria-label='Footer navigation' className='flex flex-wrap gap-x-6 gap-y-2'>
            {navLinks.map((link: { label: string; labelAr?: string; url: string }) => (
              <Link
                key={link.url}
                href={`/${locale}${link.url}`}
                className='text-white text-[13px] hover:text-white/70 transition-colors duration-200'>
                {isAr && link.labelAr ? link.labelAr : link.label}
              </Link>
            ))}
          </nav>

          <p className='text-white/60 text-[12px] shrink-0'>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
}
