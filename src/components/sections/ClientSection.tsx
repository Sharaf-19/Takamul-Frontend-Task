'use client';
// src/components/sections/ClientsSection.tsx

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clientsConfig } from '@/lib/mock/clients';

interface Props {
  locale: string;
}

export default function ClientsSection({ locale }: Props) {
  const [index, setIndex] = useState(0);
  const isAr = locale === 'ar';

  const { heading, headingAr, intro, introAr, testimonials } = clientsConfig;

  const prev = () => setIndex(i => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex(i => (i + 1) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <section className='bg-brown-dark py-16 md:py-24'>
      <div className='mx-auto max-w-container px-6'>
        {/* Heading — DM Sans, 700, 40px, lh 52px */}
        <h2
          className='text-white font-bold leading-[52px] tracking-normal mb-6
            text-[28px] sm:text-[40px]'
          style={{ fontFamily: 'DM Sans' }}>
          {isAr ? headingAr : heading}
        </h2>

        {/* Intro paragraph */}
        <p className='text-white/60 text-[13px] leading-[1.7] max-w-[500px] mb-10'>
          {isAr ? introAr : intro}
        </p>

        {/* Testimonial row */}
        <div className='flex flex-col sm:flex-row items-start gap-6 sm:gap-12'>
          {/* Photo — 374×374 */}
          <div className='relative shrink-0 w-[200px] h-[220px] sm:w-[374px] sm:h-[374px] overflow-hidden'>
            <Image
              src={testimonial.photo}
              alt={isAr ? testimonial.nameAr : testimonial.name}
              fill
              className='object-cover'
              sizes='(max-width: 640px) 200px, 374px'
            />
          </div>

          {/* Right column — quote top-aligned, name/role bottom-aligned with image */}
          <div className='flex flex-col justify-between w-full sm:h-[374px]'>
            {/* Quote — DM Sans, 400, 24px, lh 40px, opacity 60%, 728×200 */}
            <p
              className='text-white/60 font-normal tracking-normal
                max-w-[728px] max-h-[200px] overflow-hidden
                text-[16px] leading-[26px] sm:text-[24px] sm:leading-[40px]'
              style={{ fontFamily: 'DM Sans' }}>
              {isAr ? testimonial.quoteAr : testimonial.quote}
            </p>

            {/* Name + Role */}
            <div>
              {/* Name — Poppins, 600, 24px, lh 45px */}
              <p
                className='text-white font-semibold tracking-normal
                  text-[18px] leading-[30px] sm:text-[24px] sm:leading-[45px]'
                style={{ fontFamily: 'Poppins' }}>
                {isAr ? testimonial.nameAr : testimonial.name}
              </p>
              {/* Role — Poppins, 14px, lh 24px */}
              <p
                className='text-white/50 tracking-normal
                  text-[12px] leading-[20px] sm:text-[14px] sm:leading-[24px]'
                style={{ fontFamily: 'Poppins' }}>
                {isAr ? testimonial.roleAr : testimonial.role}
              </p>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
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
