// src/components/ui/EmptyState.tsx

interface Props {
  query: string;
  category: string;
  locale: string;
}

export default function EmptyState({ query, category, locale }: Props) {
  const isAr = locale === 'ar';

  const message = isAr
    ? `لا توجد نتائج لـ "${query}" في ${category}`
    : `No results for "${query}" in ${category}`;

  return (
    <div className='py-12 text-center'>
      <p className='text-text-muted text-[14px]'>{message}</p>
    </div>
  );
}
