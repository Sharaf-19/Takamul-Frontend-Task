'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroSlide } from '@/types/navigation';

interface Props {
  slides: HeroSlide[];
  locale: string;
}

export default function HeroSection({ slides, locale }: Props) {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const goTo = useCallback(
    (index: number) => {
      if (transitioning) return;
      setTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setTransitioning(false);
      }, 300);
    },
    [transitioning],
  );

  const slide = slides[current];
  const isVideo = slide.type === 'video' && !!slide.videoUrl;
  const headline = locale === 'ar' ? slide.headlineAr : slide.headline;
  const subheadline = locale === 'ar' ? slide.subheadlineAr : slide.subheadline;
  const ctaLabel = locale === 'ar' ? slide.ctaLabelAr : slide.ctaLabel;

  const advance = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  // Auto-play — only for image slides
  useEffect(() => {
    if (isVideo) return;

    const timer = setInterval(() => {
      advance();
    }, 5000);
    return () => clearInterval(timer);
  }, [current, isVideo, advance]);

  // Video: advance when it finishes
  const handleVideoEnded = useCallback(() => {
    advance();
  }, [advance]);

  return (
    <section className='relative w-full min-h-screen overflow-hidden'>
      {/* Background */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 ${
          transitioning ? 'opacity-0' : 'opacity-100'
        }`}>
        {isVideo ? (
          <video
            ref={videoRef}
            key={slide.videoUrl}
            src={slide.videoUrl}
            autoPlay
            muted
            loop={false}
            playsInline
            onEnded={handleVideoEnded}
            className='absolute inset-0 w-full h-full object-cover'
          />
        ) : (
          <Image
            key={slide.backgroundImage}
            src={slide.backgroundImage}
            alt={headline}
            fill
            priority
            className='object-cover'
            sizes='100vw'
          />
        )}

        {/* Gradient overlay */}
        <div
          className='absolute inset-0'
          style={{
            background: isVideo
              ? 'linear-gradient(to right, rgba(75,38,21,0.85) 0%, rgba(75,38,21,0.45) 100%)'
              : 'linear-gradient(to right, rgba(75,38,21,0.68) 0%, rgba(75,38,21,0.28) 100%)',
          }}
        />
      </div>

      {/* Slide content */}
      <div className='font-dm-sans relative z-10 mx-auto max-w-container px-6 h-screen flex flex-col justify-end pb-24'>
        <div
          className={`max-w-lg transition-opacity duration-500 ${
            transitioning ? 'opacity-0' : 'opacity-100'
          }`}>
          <h1 className='text-white text-4xl md:text-[48px] font-bold leading-tight mb-4'>
            {headline}
          </h1>
          <p className='text-white text-[16px] leading-[1.6] max-w-[480px] mb-8 opacity-90'>
            {subheadline}
          </p>
          <Link
            href={`/${locale}${slide.ctaUrl}`}
            className='inline-flex items-center border border-white text-white text-[14px] px-6 py-3 rounded-sm hover:bg-white hover:text-brown-dark transition-colors duration-200'>
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* Person image — bottom-right, desktop only */}
      {slide.personImage && (
        <div className='absolute bottom-0 end-16 z-10 hidden lg:block'>
          <Image
            src={slide.personImage}
            alt='Featured person'
            width={500}
            height={520}
            className='object-contain'
            priority
          />
        </div>
      )}

      {/* Vertical slide dots */}
      <div className='absolute start-6 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3'>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-2 h-2 rounded-full border border-white transition-all duration-200 ${
              index === current ? 'bg-white' : 'bg-transparent'
            }`}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label='Previous slide'
        className='absolute start-6 bottom-24 z-10 text-white/70 hover:text-white transition-colors duration-200 text-2xl'>
        ‹
      </button>
    </section>
  );
}
