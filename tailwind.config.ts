import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'brown-dark': 'rgb(var(--color-brown-dark) / <alpha-value>)',
        'brown-mid': 'rgb(var(--color-brown-mid) / <alpha-value>)',
        'off-white': 'rgb(var(--color-off-white) / <alpha-value>)',
        'text-primary': 'rgb(var(--color-text-primary) / <alpha-value>)',
        'text-muted': 'rgb(var(--color-text-muted) / <alpha-value>)',
        'gold-accent': 'rgb(var(--color-gold-accent) / <alpha-value>)',
        'page-bg': 'rgb(var(--color-page-bg) / <alpha-value>)',
        'surface-bg': 'rgb(var(--color-surface-bg) / <alpha-value>)',
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
