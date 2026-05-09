import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brown-dark': '#4B2615',
        'brown-mid': '#4B2615',
        'off-white': '#F5F3EF',
        'text-primary': '#4B2615',
        'text-muted': '#6B6560',
        'gold-accent': '#8B6914',
      },
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        inter: ['var(--font-inter)'],
        tajawal: ['var(--font-tajawal)'],
      },
      maxWidth: {
        container: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
