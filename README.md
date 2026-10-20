# Chacha G Graphics

The Chacha G Graphics portfolio and service website, built with React and
JavaScript. A small Node.js server renders the homepage and serves the site's
assets. esbuild compiles the JSX and browser code; the project does not use
TypeScript, Vite, or a framework runtime.

## Requirements

- Node.js `>=22.13.0`
- npm

## Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`. The development server rebuilds the browser bundle
when it starts; restart it after editing the React components.

## Checks

- `npm run build` compiles the server-rendering and browser bundles.
- `npm test` builds the site and checks rendered homepage content and resources.
- `npm run lint` runs ESLint.

## Project Structure

- `app/page.js` contains the homepage layout and section markup.
- `app/homepage-content.js` contains editable homepage content.
- `app/` also contains the interactive React components and global styles.
- `public/assets/` contains the site's images, models, videos, and brand assets.
- `server.js` serves the server-rendered page and static resources.
- `build.js` creates the JSX server-rendering and browser bundles with esbuild.
