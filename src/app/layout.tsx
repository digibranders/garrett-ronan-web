import type { Metadata } from 'next';
import "@/styles/index.css";
import Navbar from '@/components/common/Navbar';
import MovingRibbon from '@/components/common/MovingRibbon';
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
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GKR Hospitality Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GKR Hospitality',
    description: 'Simply Practical Yet Creative Solutions for Hospitality',
    images: ['/og-image.png'],
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
        <MovingRibbon />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
