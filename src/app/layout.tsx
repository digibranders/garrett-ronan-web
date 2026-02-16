import type { Metadata } from 'next';
import "@/styles/index.css";
import Navbar from '@/components/common/Navbar';
import ScrollToTop from '@/components/common/ScrollToTop';

import Footer from '@/components/common/Footer';

export const metadata: Metadata = {
  title: "GKR Hospitality",
  description: "Simply Practical Yet Creative Solutions for Hospitality",
  metadataBase: new URL('https://gkrhospitality.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'GKR Hospitality',
    description: 'Simply Practical Yet Creative Solutions for Hospitality',
    url: 'https://gkrhospitality.com',
    siteName: 'GKR Hospitality',
    images: [
      {
        url: '/GKR_Thumbnail.jpg',
        width: 1200,
        height: 630,
        alt: 'GKR Hospitality Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
    // type: 'website', // Removed duplicate key
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GKR Hospitality',
    description: 'Simply Practical Yet Creative Solutions for Hospitality',
    images: ['/GKR_Thumbnail.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png' },
    ],
    other: [
      { rel: 'android-chrome-192x192', url: '/android-chrome-192x192.png' },
      { rel: 'android-chrome-512x512', url: '/android-chrome-512x512.png' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#141414] text-white selection:bg-[#c5a059] selection:text-white overflow-x-hidden w-full" suppressHydrationWarning>
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-[#c5a059] text-[#181818] px-6 py-3 font-bold rounded-sm shadow-lg border-2 border-white/20 outline-none"
        >
          Skip to Content
        </a>

        {/* <MovingRibbon /> */}
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
