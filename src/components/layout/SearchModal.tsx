'use client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { closeSearch } from '@/store/uiSlice';
import { X, Search } from 'lucide-react';

interface Props {
  locale: string;
  placeholder: string;
}

export default function SearchModal({ locale, placeholder }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') dispatch(closeSearch());
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (!query) return;
    dispatch(closeSearch());
    router.push(`/${locale}/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <div
      className='fixed inset-0 bg-black/70 z-[100] flex items-start justify-center pt-24'
      onClick={() => dispatch(closeSearch())}>
      <div
        className='bg-brown-dark w-full max-w-xl mx-4 rounded-sm p-4'
        onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit} className='flex items-center gap-3'>
          <Search size={18} className='text-white/60 shrink-0' />
          <input
            ref={inputRef}
            type='text'
            placeholder={placeholder}
            className='flex-1 bg-transparent text-white placeholder-white/40 text-[15px] outline-none'
          />
          <button
            type='button'
            onClick={() => dispatch(closeSearch())}
            aria-label='Close search'
            className='text-white/60 hover:text-white transition-colors'>
            <X size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
