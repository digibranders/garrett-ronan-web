import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = pageMetadata({
  title: 'Hotel, Restaurant and Venue Projects',
  description:
    'Selected GKR Hospitality projects and the brands we have supported, from multi-city restaurant expansion to hotel openings and members-only club launches.',
  path: '/work',
  ogDescription:
    'Selected projects and the brands we have supported.',
});

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: 'Our Work', path: '/work' }])} />
      {children}
    </>
  );
}
