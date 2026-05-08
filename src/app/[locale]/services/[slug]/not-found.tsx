// src/app/[locale]/services/[slug]/not-found.tsx

import Link from 'next/link';

export default function ServiceNotFound() {
  return (
    <main className='min-h-screen bg-off-white flex items-center justify-center px-6'>
      <div className='text-center max-w-md'>
        <h1 className='text-text-primary text-[28px] font-bold mb-3'>Service Not Found</h1>
        <p className='text-text-muted text-[14px] leading-[1.7] mb-8'>
          The service you are looking for does not exist or may have been moved.
        </p>
        <Link
          href='/services'
          className='inline-flex items-center border border-brown-dark text-brown-dark text-[14px] px-6 py-3 rounded-sm hover:bg-brown-dark hover:text-white transition-colors duration-200'>
          View All Services
        </Link>
      </div>
    </main>
  );
}
