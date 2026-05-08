// src/components/sections/HeroShort.tsx

import Image from 'next/image';

interface Props {
  title: string;
  backgroundImage?: string;
}

export default function HeroShort({ title, backgroundImage = '/images/hero-bg-1.jpg' }: Props) {
  return (
    <section className='relative w-full h-[260px] overflow-hidden'>
      {/* Background image */}
      <Image
        src={backgroundImage}
        alt={title}
        fill
        priority
        className='object-cover'
        sizes='100vw'
      />

      {/* Brown gradient overlay — same as homepage hero */}
      <div
        className='absolute inset-0'
        style={{
          background: 'linear-gradient(to right, rgba(75,38,21,0.68) 0%, rgba(75,38,21,0.28) 100%)',
        }}
      />

      {/* Page title — bottom left */}
      <div className='relative z-10 mx-auto max-w-container px-6 h-full flex items-end pb-8'>
        <h1 className='text-white text-[28px] md:text-[36px] font-bold leading-tight'>{title}</h1>
      </div>
    </section>
  );
}
