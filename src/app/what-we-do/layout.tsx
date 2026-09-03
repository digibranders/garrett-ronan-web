import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, serviceCatalogSchema } from '@/lib/schema';
import { SERVICES_DATA } from '@/data/homeData';

export const metadata: Metadata = pageMetadata({
  title: 'Hospitality Consulting Services',
  description:
    'Concept creation, capital and growth investment, design and construction oversight, operations, legal and financial support for hotels, restaurants, private clubs and event venues.',
  path: '/what-we-do',
  ogDescription:
    'Seven service lines covering concept, capital, construction, operations, legal and finance.',
});

export default function WhatWeDoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={serviceCatalogSchema(SERVICES_DATA)} />
      <JsonLd data={breadcrumbSchema([{ name: 'What We Do', path: '/what-we-do' }])} />
      {children}
    </>
  );
}
