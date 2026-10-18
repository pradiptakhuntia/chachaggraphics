import type { Metadata } from "next";
import "./globals.css";

const title = "Signage, Safety Signs and Printing | Chacha G Graphics";
const description =
  "Sign boards, safety signage, office branding and printing services for offices, institutions and businesses in Odisha.";

export function generateMetadata(): Metadata {
  return {
    title,
    description,
    icons: {
      icon: [
        { url: "/assets/favicon/favicon.ico", sizes: "any" },
        {
          url: "/assets/favicon/favicon-32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/assets/favicon/favicon-16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: [{ url: "/assets/favicon/apple-touch-icon.png", sizes: "180x180" }],
    },
    openGraph: {
      type: "website",
      title,
      description:
        "Sign boards, safety signage, office branding and printing services in Choudwar, Odisha.",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: "Chacha G Graphics — Signage, Branding and Print",
        },
      ],
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#13171d" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="preload"
          href="/assets/chacha-g-logo-white.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/assets/studio-campaign-v2/illuminated-signage-installation.webp"
          as="image"
          type="image/webp"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&family=Space+Grotesk:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
