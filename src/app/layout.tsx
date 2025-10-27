import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://arun-solanki.vercel.app'),
  title: "Arun Solanki | Frontend Team Leader",
  description: "Frontend Team Leader at NITSAN TECHNOLOGY with 6+ years of experience in TYPO3, React.js, TypeScript, and modern web development.",
  keywords: ["Arun Solanki", "Frontend Developer", "TYPO3", "React", "TypeScript", "Team Leader", "NITSAN TECHNOLOGY"],
  authors: [{ name: "Arun Solanki" }],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "512x512", type: "image/png" }
    ]
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Arun Solanki | Frontend Team Leader",
    description: "Frontend Team Leader at NITSAN TECHNOLOGY with 6+ years of experience in TYPO3, React.js, TypeScript, and modern web development.",
    type: "website",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "Arun Solanki - Frontend Team Leader"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Solanki | Frontend Team Leader",
    description: "Frontend Team Leader at NITSAN TECHNOLOGY with 6+ years of experience in TYPO3, React.js, TypeScript, and modern web development.",
    images: ["/web-app-manifest-512x512.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}