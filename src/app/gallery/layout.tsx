import type { Metadata } from 'next';
import JsonLd from '@/components/seo/JsonLd';
import { pageMetadata } from '@/lib/seo';
import { breadcrumbSchema, imageGallerySchema } from '@/lib/schema';
import { GALLERY_ITEMS } from '@/data/galleryData';

export const metadata: Metadata = pageMetadata({
  title: 'Project Gallery',
  description:
    'A visual record of hotels, restaurants, private members clubs and event spaces GKR Hospitality has helped open and operate.',
  path: '/gallery',
  ogDescription:
    'Hotels, restaurants, private clubs and event spaces we have helped open.',
});

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={imageGallerySchema(GALLERY_ITEMS)} />
      <JsonLd data={breadcrumbSchema([{ name: 'Gallery', path: '/gallery' }])} />
      {children}
    </>
  );
}
