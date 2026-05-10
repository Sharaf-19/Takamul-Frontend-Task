# IO-TECH Frontend

Frontend assessment delivery built with Next.js 14 App Router, TypeScript, Tailwind CSS, `next-intl`, Redux Toolkit, and a Strapi-backed content layer.

## Summary

The current codebase includes:

- Locale-prefixed English and Arabic routes under `src/app/[locale]`
- RTL/LTR layout switching with locale-aware fonts
- Navbar with services dropdown, mobile menu, language switcher, and search modal
- Hero, team, and client/testimonial sections
- Search page with category filtering and pagination
- Dynamic service detail pages by slug
- Dark and light theme toggle
- Formik and Yup-based contact and subscription forms
- Strapi-oriented API helpers with ISR revalidation

## Live Setup

- Frontend URL: `https://takamul-frontend-task.vercel.app/en`

## Route Status

| Route | Status | Notes |
| --- | --- | --- |
| `/[locale]` | Implemented | Homepage with hero, team, and client/testimonial sections |
| `/[locale]/team` | Implemented | Team listing backed by Strapi data |
| `/[locale]/search` | Implemented | Categorized search for services and team members |
| `/[locale]/services/[slug]` | Implemented | Dynamic localized service detail pages with metadata |
| `/[locale]/about` | Implemented | Still uses local mock content |
| `/[locale]/contact` | Implemented | Validation is wired; submit flow is still mocked |
| `/[locale]/services` | Partial | Index page exists but is still basic |
| `/[locale]/blogs` | Placeholder | Static placeholder page |

## Architecture

- `src/app/[locale]`: locale-scoped pages and layouts
- `src/components`: reusable UI, layout, section, form, and search components
- `src/lib/api`: typed Strapi fetch helpers
- `src/lib/mock`: fallback and placeholder data
- `src/store`: Redux Toolkit store and UI slice
- `messages`: translation dictionaries for `en` and `ar`

## Data Layer

Strapi integration currently covers:

- Navigation
- Footer
- Hero content
- Team members
- Testimonials / client content
- Services
- Search queries across services and team members

Core fetch behavior lives in `src/lib/api/strapi.ts` and uses `fetch(..., { next: { revalidate: 60 } })`.

## Known Gaps

- `SubscribeForm` currently validates and shows UX states on the frontend, but the final subscriber POST integration is still marked as pending.
- `ContactForm` submit behavior is still mocked.
- Some sections still depend on local mock data during CMS transition.
- Both `next.config.ts` and `next.config.mjs` exist and should be consolidated.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Local Development

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/en`
- `http://localhost:3000/ar`
