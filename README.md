# Bin Hindi Law Company Frontend

Frontend implementation for the Bin Hindi Law Company website, built with Next.js 14 App Router, TypeScript, Tailwind CSS, bilingual routing, and a partially integrated Strapi data layer.

## Overview

The project currently supports:

- Locale-prefixed routing with English and Arabic pages under `src/app/[locale]`
- RTL/LTR switching based on locale
- Shared layout with sticky navbar, mobile menu, language switcher, search modal, and footer
- Homepage sections for hero slides, team members, and client testimonials
- Team page backed by the same Strapi-driven team and testimonials data
- Search page with category filters, pagination, and Strapi-backed service/team search
- Dynamic service detail pages generated from service slugs
- Contact and subscribe forms with client-side validation
- Tailwind-based custom design system using the brown/off-white palette from the task UI direction

## Current Implementation Status

The codebase is in a mixed integration state.

Implemented and wired:

- `Navbar` fetches navigation items from Strapi
- `Footer` fetches footer config from Strapi and falls back to mock data if needed
- Homepage fetches hero slides, team members, and testimonials from Strapi
- Team page fetches team members and testimonials from Strapi
- Search page queries Strapi services and team members
- Service detail pages fetch service content from Strapi
- Locale handling is configured with `next-intl`
- Search modal state is managed through Redux Toolkit

Still placeholder or partially completed:

- About page still uses local mock content
- Contact form submit is mocked and not yet connected to a backend endpoint
- `/[locale]/blogs` is currently a placeholder page

## Changes and Updates Observed

Based on the current repository state, these are the main updates already done in the project:

1. The app has moved beyond a fully mock-driven setup and now includes a Strapi-oriented API layer in `src/lib/api`.
2. Homepage content has been refactored to fetch hero, team, and testimonial data through reusable Strapi helpers.
3. Navigation and footer content are now CMS-oriented instead of being fully hardcoded.
4. Dynamic service pages were added with `generateStaticParams()` support for localized service routes.
5. Search has been upgraded into a real feature with category filters, pagination, and server-side querying for services and team members.
6. The app includes bilingual routing, locale-aware metadata, and RTL handling for Arabic pages.
7. Redux Toolkit was added for UI state, currently used by the global search modal.
8. Formik and Yup were added for contact and subscribe form validation flows.
9. Several pages and utilities still show signs of transition from mock content to CMS data, so the implementation is not fully unified yet.

## Routes

All major pages are locale-prefixed and support `/en/...` and `/ar/...`.

| Route | Status | Notes |
| --- | --- | --- |
| `/[locale]` | Implemented | Homepage with hero, team, testimonials |
| `/[locale]/about` | Implemented | Uses mock about content |
| `/[locale]/team` | Implemented | Strapi-backed team/testimonials |
| `/[locale]/contact` | Implemented | Form submit currently mocked |
| `/[locale]/search?query=...` | Implemented | Strapi-backed search with pagination |
| `/[locale]/services/[slug]` | Implemented | Strapi-backed dynamic service detail |
| `/[locale]/services` | Placeholder | Static placeholder page |
| `/[locale]/blogs` | Placeholder | Static placeholder page |

## Project Structure

```text
src/
  app/
    [locale]/
      about/
      blogs/
      contact/
      search/
      services/
      team/
      layout.tsx
      page.tsx
    globals.css
    layout.tsx
    sitemap.ts
    robot.ts
  components/
    forms/
    layout/
    search/
    sections/
    ui/
  lib/
    api/
    mock/
  store/
  types/
  i18n.ts
  middleware.ts
messages/
  en.json
  ar.json
public/
  images/
```

## Dependencies and Packages

### Runtime Dependencies

| Package | Purpose |
| --- | --- |
| `next` | React framework and App Router runtime |
| `react` | UI runtime |
| `react-dom` | DOM renderer for React |
| `next-intl` | Locale routing and translation support |
| `@reduxjs/toolkit` | Global UI state management |
| `react-redux` | React bindings for Redux store access |
| `formik` | Form state handling |
| `yup` | Form validation schemas |
| `lucide-react` | Icon set used across navigation, forms, search, and sections |
|  the app uses native `fetch` in the Strapi helpers |

### Development Dependencies

| Package | Purpose |
| --- | --- |
| `typescript` | Static typing |
| `tailwindcss` | Utility-first styling |
| `postcss` | CSS processing for Tailwind |
| `eslint` | Linting |
| `eslint-config-next` | Next.js ESLint preset |
| `@types/node` | Node.js TypeScript types |
| `@types/react` | React TypeScript types |
| `@types/react-dom` | React DOM TypeScript types |

## Localization

- Supported locales: `en`, `ar`
- Middleware-based locale handling is configured in `src/middleware.ts`
- Request-level message loading is configured in `src/i18n.ts`
- Messages live in `messages/en.json` and `messages/ar.json`
- Arabic pages use RTL layout direction
- Fonts are locale-aware in `src/app/[locale]/layout.tsx`

## Data Layer

Strapi integration is currently handled through:

- `src/lib/api/strapi.ts`
- `src/lib/api/hero.ts`
- `src/lib/api/team.ts`
- `src/lib/api/testimonials.ts`
- `src/lib/api/services.ts`
- `src/lib/api/navigation.ts`

The fetch helper uses:

- `NEXT_PUBLIC_STRAPI_URL`
- `fetch(..., { next: { revalidate: 60 } })` for ISR-style cache revalidation

Some pages still fall back to local mock data in `src/lib/mock`.


The app can still render some areas without live CMS data, but the homepage, team page, search, services, and navigation/footer features expect Strapi endpoints to exist for full functionality.


## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Running Locally

```bash
npm install
npm run dev
```

Open:

- `http://localhost:3000/en`
- `http://localhost:3000/ar`

## Notes

- There are both `next.config.ts` and `next.config.mjs` files in the repo. Next can resolve `next.config.mjs` as the active config, so changes to image settings must be kept in sync until the project is consolidated to a single config file.
- Remote Strapi uploads used by `next/image` must be listed in `images.remotePatterns`. Missing the production Strapi host will cause `/_next/image` requests to return `400 Bad Request`, which breaks hero background images and other CMS-hosted raster media.
- The root `src/app/layout.tsx` still contains default Next.js starter metadata, while the localized layout contains the actual site metadata.
- Because Git history is currently blocked by a safe-directory ownership warning in this environment, this README reflects the current codebase state rather than a verified commit-by-commit change log.
