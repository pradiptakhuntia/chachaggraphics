# Chacha G Graphics

The Chacha G Graphics portfolio and service website, built with React, TypeScript,
and vinext. The homepage is server-rendered, with focused client components for
the scroll scene, client gallery, mobile navigation, and review carousel.

## Requirements

- Node.js `>=22.13.0`
- npm

## Development

```bash
npm ci
npm run dev
```

## Checks

- `npm run build` builds the site and worker output.
- `npm test` builds the site and verifies rendered homepage content.
- `npm run lint` runs ESLint.

## Project Structure

- `app/page.tsx` contains the homepage layout and section markup.
- `app/homepage-content.ts` contains editable homepage content and shared data types.
- `app/` also contains the interactive UI components and global styles.
- `public/assets/` contains the site's images, models, videos, and brand assets.
- `worker/index.ts` and `build/` contain the Cloudflare worker and Vite build integration.
