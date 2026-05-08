// src/app/[locale]/services/[slug]/loading.tsx

export default function ServiceLoading() {
  return (
    <main>
      {/* Hero skeleton */}
      <div className='w-full h-[260px] bg-brown-dark/40 animate-pulse' />

      <div className='mx-auto max-w-container px-6 py-10'>
        {/* Back link skeleton */}
        <div className='h-4 w-16 bg-gray-200 rounded animate-pulse mb-8' />

        {/* Title skeleton */}
        <div className='h-8 w-72 bg-gray-200 rounded animate-pulse mb-4' />

        {/* Excerpt skeletons */}
        <div className='space-y-2 mb-8 max-w-[720px]'>
          <div className='h-4 w-full bg-gray-100 rounded animate-pulse' />
          <div className='h-4 w-full bg-gray-100 rounded animate-pulse' />
          <div className='h-4 w-3/4 bg-gray-100 rounded animate-pulse' />
        </div>

        {/* Body section skeletons */}
        {[1, 2, 3].map(i => (
          <div key={i} className='mb-8 max-w-[720px]'>
            <div className='h-5 w-48 bg-gray-200 rounded animate-pulse mb-3' />
            <div className='space-y-2'>
              <div className='h-4 w-full bg-gray-100 rounded animate-pulse' />
              <div className='h-4 w-5/6 bg-gray-100 rounded animate-pulse' />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
