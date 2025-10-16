import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Solanki | Frontend Team Leader",
  description: "Frontend Team Leader at NITSAN TECHNOLOGY with 6+ years of experience in TYPO3, React.js, TypeScript, and modern web development.",
  keywords: ["Arun Solanki", "Frontend Developer", "TYPO3", "React", "TypeScript", "Team Leader", "NITSAN TECHNOLOGY"],
  authors: [{ name: "Arun Solanki" }],
  openGraph: {
    title: "Arun Solanki | Frontend Team Leader",
    description: "Frontend Team Leader at NITSAN TECHNOLOGY with 6+ years of experience in TYPO3, React.js, TypeScript, and modern web development.",
    type: "website",
  },
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