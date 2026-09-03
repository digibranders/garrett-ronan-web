import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, faqSchema } from '@/lib/schema';
import { FAQ_DATA } from '@/data/faqData';

export const metadata: Metadata = pageMetadata({
  title: 'Contact Us, New York',
  description:
    'Start a conversation about your hotel, restaurant or venue project. Based at 450 Park Avenue South, New York. Complimentary discovery call, no sales pitch.',
  path: '/contact',
  ogDescription:
    'Start a conversation about your hotel, restaurant or venue project.',
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_DATA)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Contact', path: '/contact' }])} />
      {children}
    </>
  );
}
