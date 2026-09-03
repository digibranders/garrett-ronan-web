import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Client Results and Testimonials',
  description:
    'What operators, owners and investors say about working with GKR Hospitality, alongside the hotel, restaurant and venue brands we have supported.',
  path: '/reviews',
  ogDescription:
    'What operators, owners and investors say about working with us.',
});

export default function ReviewsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Reviews', path: '/reviews' }])} />
      {children}
    </>
  );
}
