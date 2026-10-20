import { renderToString } from "react-dom/server";
import Home from "./page.js";

const title = "Signage, Safety Signs and Printing | Chacha G Graphics";
const description =
  "Sign boards, safety signage, office branding and printing services for offices, institutions and businesses in Odisha.";

export function renderHomePage() {
  const content = renderToString(<Home />);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#13171d">
    <meta name="description" content="${description}">
    <title>${title}</title>
    <link rel="icon" href="/assets/favicon/favicon.ico" sizes="any">
    <link rel="icon" href="/assets/favicon/favicon-32.png" sizes="32x32" type="image/png">
    <link rel="icon" href="/assets/favicon/favicon-16.png" sizes="16x16" type="image/png">
    <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png" sizes="180x180">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title}">
    <meta property="og:description" content="Sign boards, safety signage, office branding and printing services in Choudwar, Odisha.">
    <meta property="og:image" content="/og.png">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Chacha G Graphics — Signage, Branding and Print">
    <meta property="og:locale" content="en_IN">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${title}">
    <meta name="twitter:description" content="${description}">
    <meta name="twitter:image" content="/og.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preload" href="/assets/chacha-g-logo-white.svg" as="image" type="image/svg+xml">
    <link rel="preload" href="/assets/studio-campaign-v2/illuminated-signage-installation.webp" as="image" type="image/webp">
    <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/site.css">
  </head>
  <body>
    <div id="root">${content}</div>
    <script type="module" src="/site.js"></script>
  </body>
</html>`;
}
