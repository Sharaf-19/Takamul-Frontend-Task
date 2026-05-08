'use client';
// src/components/sections/TeamCarousel.tsx

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Phone, Mail } from 'lucide-react';
import { TeamMember } from '@/types/team';

// WhatsApp icon — lucide doesn't include it
function WhatsAppIcon() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='currentColor'
      aria-hidden='true'>
      <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z' />
    </svg>
  );
}

interface Props {
  members: TeamMember[];
  locale: string;
}

const VISIBLE_DESKTOP = 3;

export default function TeamCarousel({ members, locale }: Props) {
  const [index, setIndex] = useState(0);

  const isAr = locale === 'ar';

  const maxIndex = Math.max(0, members.length - VISIBLE_DESKTOP);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <div className='relative flex items-center gap-4'>
      {/* Prev arrow */}
      <button
        onClick={prev}
        disabled={!canPrev}
        aria-label='Previous team members'
        className='shrink-0 w-10 h-10 rounded-full bg-text-primary text-white flex items-center justify-center transition-opacity duration-200 hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed'>
        {isAr ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
      </button>

      {/* Carousel viewport */}
      <div className='flex-1 overflow-hidden'>
        <div
          className='flex gap-6 transition-transform duration-300 ease-in-out'
          style={{
            transform: `translateX(${isAr ? '' : '-'}${index * (100 / VISIBLE_DESKTOP)}%)`,
          }}>
          {members.map(member => (
            <div
              key={member.id}
              className='shrink-0 w-full md:w-[calc(33.333%-16px)] flex flex-col items-center gap-2'>
              {/* Photo */}
              <div className='relative w-full aspect-square max-w-[200px] overflow-hidden rounded-md'>
                <Image
                  src={member.photo}
                  alt={isAr ? member.nameAr : member.name}
                  fill
                  className='object-cover' // <-- FIXED: Changed from object-fill to object-cover
                  style={{ filter: 'saturate(0.7)' }}
                  sizes='(max-width: 768px) 80vw, 200px'
                />
              </div>

              {/* Name */}
              <p className='text-text-primary text-[14px] font-semibold mt-1'>
                {isAr ? member.nameAr : member.name}
              </p>

              {/* Role */}
              <p className='text-text-muted text-[12px] uppercase tracking-wide'>
                {isAr ? member.roleAr : member.role}
              </p>

              {/* Social icons */}
              <div className='flex items-center gap-2 mt-1'>
                {member.socialLinks.whatsapp && (
                  <a
                    href={member.socialLinks.whatsapp}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label={`WhatsApp ${isAr ? member.nameAr : member.name}`}
                    className='text-text-muted hover:text-text-primary transition-colors duration-200'>
                    <WhatsAppIcon />
                  </a>
                )}
                {member.socialLinks.phone && (
                  <a
                    href={member.socialLinks.phone}
                    aria-label={`Call ${isAr ? member.nameAr : member.name}`}
                    className='text-text-muted hover:text-text-primary transition-colors duration-200'>
                    <Phone size={14} />
                  </a>
                )}
                {member.socialLinks.email && (
                  <a
                    href={member.socialLinks.email}
                    aria-label={`Email ${isAr ? member.nameAr : member.name}`}
                    className='text-text-muted hover:text-text-primary transition-colors duration-200'>
                    <Mail size={14} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Next arrow */}
      <button
        onClick={next}
        disabled={!canNext}
        aria-label='Next team members'
        className='shrink-0 w-10 h-10 rounded-full bg-text-primary text-white flex items-center justify-center transition-opacity duration-200 hover:opacity-80 disabled:opacity-20 disabled:cursor-not-allowed'>
        {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
      </button>
    </div>
  );
}
