// src/components/ui/StrapiBlocksRenderer.tsx

import { StrapiBlock } from '@/types/strapi';

interface Props {
  blocks: StrapiBlock[];
  locale: string;
}

export default function StrapiBlocksRenderer({ blocks, locale }: Props) {
  const isAr = locale === 'ar';

  if (!blocks || !Array.isArray(blocks) || blocks.length === 0) return null;

  return (
    <div className='w-full max-w-[1000px] font-dm-sans'>
      {blocks.map((block, index) => {
        if (!block || !block.type) return null;

        if (block.type === 'heading') {
          return (
            <h2
              key={index}
              className='text-text-primary text-[18px] md:text-[20px] font-bold mb-4 mt-10 first:mt-0'>
              {block.children?.map(child => child.text).join('') ?? ''}
            </h2>
          );
        }

        if (block.type === 'paragraph') {
          const text = block.children?.map(child => child.text).join('') ?? '';
          if (!text.trim()) return null;
          return (
            <p key={index} className='text-text-muted text-[16px] leading-[1.7] mb-6'>
              {text}
            </p>
          );
        }

        if (block.type === 'list') {
          if (!block.children || block.children.length === 0) return null;
          return (
            <div
              key={index}
              className={`border-l-2 border-gray-300 mb-8 ${isAr ? 'pr-6' : 'pl-6'}`}>
              <ul className='space-y-4'>
                {block.children.map((item, itemIndex) => (
                  <li key={itemIndex} className='flex items-start gap-3'>
                    <span className='mt-1.5 text-[16px] text-text-primary ml-4 shrink-0'>■</span>
                    <span className='text-text-muted text-[16px] leading-[1.7]'>
                      {item.children?.map(child => child.text).join('') ?? ''}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}
