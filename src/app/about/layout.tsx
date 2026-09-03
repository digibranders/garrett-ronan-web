import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, founderSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Garrett Ronan, Hospitality Operator',
  description:
    'Meet Garrett Ronan, founder of GKR Hospitality. More than 30 years operating hotels, restaurants and venues, including roles at BLACE, etc.venues, Starr Restaurants, Azumi and Waldorf Astoria.',
  path: '/about',
  ogDescription:
    'More than 30 years operating hotels, restaurants and venues across the US, UK and Ireland.',
  ogType: 'profile',
});

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={founderSchema()} />
      <JsonLd data={breadcrumbSchema([{ name: 'About Us', path: '/about' }])} />
      {children}
    </>
  );
}
