'use client';
// src/components/sections/ClientSection.tsx

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ClientsConfig } from '@/types/client';

interface Props {
  locale: string;
  config: ClientsConfig;
}

export default function ClientsSection({ locale, config }: Props) {
  const [index, setIndex] = useState(0);
  const isAr = locale === 'ar';

  const { heading, headingAr, intro, introAr, testimonials } = config;

  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex(i => (i + 1) % testimonials.length);

  const testimonial = testimonials[index];

  if (!testimonial) return null;

  return (
    <section className='bg-brown-dark py-16 md:py-24'>
      <div className='mx-auto max-w-container px-6'>
        <h2
          className='font-dm-sans text-white font-bold leading-[52px] tracking-normal mb-6
            text-[28px] sm:text-[40px]'>
          {isAr ? headingAr : heading}
        </h2>

        <p className='font-dm-sans text-white/70 text-[18px] leading-tight max-w-[579px] mb-10 font-normal'>
          {isAr ? introAr : intro}
        </p>

        <div className='flex flex-col sm:flex-row items-start gap-6 sm:gap-12'>
          <div className='relative shrink-0 w-[200px] h-[220px] sm:w-[374px] sm:h-[374px] overflow-hidden'>
            <Image
              src={testimonial.photo}
              alt={isAr ? testimonial.nameAr : testimonial.name}
              fill
              className='object-cover'
              sizes='(max-width: 640px) 200px, 374px'
            />
          </div>

          <div className='flex flex-col justify-between w-full sm:h-[374px]'>
            <p
              className='font-dm-sans text-white/60 font-normal tracking-normal
                max-w-[728px] max-h-[200px] overflow-hidden
                text-[16px] leading-[26px] sm:text-[24px] sm:leading-[40px]'>
              {isAr ? testimonial.quoteAr : testimonial.quote}
            </p>

            <div>
              <p className='text-white font-semibold tracking-normal text-[18px] leading-[30px] sm:text-[24px] sm:leading-[45px]'>
                {isAr ? testimonial.nameAr : testimonial.name}
              </p>
              <p className='text-white/50 tracking-normal text-[12px] leading-[20px] sm:text-[14px] sm:leading-[24px]'>
                {isAr ? testimonial.roleAr : testimonial.role}
              </p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end gap-3 mt-10'>
          <button
            onClick={prev}
            aria-label='Previous testimonial'
            className='w-10 h-10 rounded-full border border-white/30 text-white
              flex items-center justify-center hover:border-white transition-colors duration-200'>
            {isAr ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
          <button
            onClick={next}
            aria-label='Next testimonial'
            className='w-10 h-10 rounded-full bg-white text-brown-dark
              flex items-center justify-center hover:bg-white/90 transition-colors duration-200'>
            {isAr ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
}
