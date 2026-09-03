/**
 * Central SEO configuration.
 *
 * Every canonical URL, structured-data block and sitemap entry derives from the
 * values here so the site cannot drift into declaring one host in metadata and
 * serving another.
 */

/** Production origin. The apex domain permanently redirects here. */
export const SITE_URL = 'https://www.gkrhospitality.com';

export const SITE_NAME = 'GKR Hospitality';

export const SITE_DESCRIPTION =
  'Hospitality operations consultancy in New York. GKR Hospitality guides hotels, restaurants, private clubs and event venues from concept and capital through construction, opening and day-to-day operations.';

export const CONTACT = {
  email: 'Connect@GKRHospitality.com',
  phone: '+1-917-460-5793',
  streetAddress: '450 Park Avenue South, Floor 1',
  addressLocality: 'New York',
  addressRegion: 'NY',
  postalCode: '10016',
  addressCountry: 'US',
} as const;

export const SOCIAL_PROFILES = [
  'https://www.linkedin.com/in/garrettronan/',
  'https://x.com/gkronan',
] as const;

export const FOUNDER = {
  name: 'Garrett Ronan',
  jobTitle: 'Founder and Principal',
  description:
    'Hospitality operator with more than 30 years of US and international experience across hotels, restaurants, private members clubs and event venues.',
} as const;

/** Default social share image. Must stay a true 1200x630 asset. */
export const OG_IMAGE = {
  url: '/og-image.jpg',
  width: 1200,
  height: 630,
  alt: 'GKR Hospitality',
} as const;

/** Every indexable route, in the order it should appear in the sitemap. */
export const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/what-we-do', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/work', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/how-we-work', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/reviews', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/accessibility', priority: 0.2, changeFrequency: 'yearly' },
] as const satisfies readonly {
  path: string;
  priority: number;
  changeFrequency: 'monthly' | 'yearly';
}[];

/** Absolute URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  return path === '/' ? SITE_URL : `${SITE_URL}${path}`;
}

/**
 * Builds page metadata with a self-referencing canonical and a complete
 * Open Graph block.
 *
 * Next.js replaces the `openGraph` object wholesale when a page declares one,
 * rather than merging it field by field with the parent. Declaring `openGraph`
 * on a page therefore drops the images inherited from the root layout. This
 * helper rebuilds the full block every time so a page can never ship a share
 * card with no image.
 */
export function pageMetadata({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogType = 'website',
}: {
  title: string;
  description: string;
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogType?: 'website' | 'profile' | 'article';
}) {
  const socialTitle = ogTitle ?? `${title} | ${SITE_NAME}`;
  const socialDescription = ogDescription ?? description;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: ogType,
      images: [
        {
          url: OG_IMAGE.url,
          width: OG_IMAGE.width,
          height: OG_IMAGE.height,
          alt: OG_IMAGE.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: socialTitle,
      description: socialDescription,
      images: [OG_IMAGE.url],
    },
  };
}
