import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';
import { CONTACT, pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description:
    'How GKR Hospitality collects, uses and protects personal information submitted through this website, including contact form data, analytics and your rights over your data.',
  path: '/privacy-policy',
});

const LAST_UPDATED = '3 September 2026';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#181818] text-[#FFF7F2] min-h-screen pt-32 pb-20 px-6 md:px-12 selection:bg-[#c5a059] selection:text-white">
      <JsonLd data={breadcrumbSchema([{ name: 'Privacy Policy', path: '/privacy-policy' }])} />

      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
          Privacy <span className="text-[#c5a059] italic">Policy</span>
        </h1>
        <p className="text-stone-400 text-sm uppercase tracking-[0.2em] mb-12">
          Last updated {LAST_UPDATED}
        </p>

        <div className="space-y-8 text-stone-300 leading-relaxed font-light text-lg">
          <p>
            This policy explains what personal information <strong>GKR Hospitality</strong> collects
            through this website, why we collect it, who we share it with, and what rights you have
            over it. It covers this website only. It does not cover information you give us directly
            during a client engagement, which is governed by your engagement agreement.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Information we collect</h2>
          <p>
            <strong>Contact form submissions.</strong> When you submit the form on our contact page
            we collect your name, email address, and the details of your enquiry: project type, your
            role, and your message. Providing a phone number and company name is optional. We use
            this solely to respond to your enquiry and to assess whether we are a fit for your
            project.
          </p>
          <p>
            <strong>Usage data.</strong> Like most websites, ours records standard technical
            information when you visit: pages viewed, approximate location derived from IP address,
            referring website, browser and device type. This is aggregated and is not used to
            identify you personally.
          </p>
          <p>
            We do not collect payment information through this website, and we do not knowingly
            collect information from anyone under 16.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Third parties we rely on</h2>
          <p>
            We use a small number of service providers to run this site. Each processes data on our
            instructions:
          </p>
          <ul className="list-disc pl-6 space-y-3 mt-4">
            <li>
              <strong>Brevo</strong> delivers the contact form to our inbox and sends you a
              confirmation. Your form submission is transmitted and stored through their platform.
            </li>
            <li>
              <strong>Cloudflare Turnstile</strong> verifies that form submissions come from a
              person rather than an automated script. It is a privacy-preserving alternative to a
              CAPTCHA and does not track you across sites.
            </li>
            <li>
              <strong>Google Tag Manager and Google Analytics</strong> record aggregated usage data
              so we can understand which pages are useful.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website and processes standard server request logs.
            </li>
            <li>
              <strong>Sentry</strong> captures technical error reports when something on the site
              breaks, so we can fix it.
            </li>
          </ul>
          <p>
            We do not sell your personal information, and we do not share it with third parties for
            their own marketing.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">How long we keep it</h2>
          <p>
            We retain contact enquiries for as long as needed to respond and, where a conversation
            leads somewhere, for the life of the business relationship plus the period our legal and
            tax obligations require. Enquiries that do not lead to an engagement are deleted within
            24 months. Aggregated analytics data is retained on the standard schedule set by our
            analytics provider.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Your rights</h2>
          <p>
            Depending on where you live, you may have the right to request a copy of the personal
            information we hold about you, to have it corrected or deleted, to object to or restrict
            how we use it, and to receive it in a portable format. Residents of the European
            Economic Area and the United Kingdom hold these rights under the GDPR. California
            residents hold comparable rights under the CCPA, including the right not to be
            discriminated against for exercising them.
          </p>
          <p>
            To exercise any of these rights, email us at the address below. We will respond within
            30 days.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Cookies</h2>
          <p>
            This site uses cookies set by Google Tag Manager for analytics, and a short-lived
            Cloudflare Turnstile cookie during form verification. You can block or delete cookies in
            your browser settings. Blocking analytics cookies does not affect your ability to use
            the site or submit the contact form.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Changes to this policy</h2>
          <p>
            If we change how we handle personal information we will update this page and revise the
            date at the top. Material changes will be noted here rather than made quietly.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Contact us</h2>
          <p>
            For any question about this policy or about your personal information:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm"
              >
                {CONTACT.email}
              </a>
            </li>
            <li>
              <strong>Phone:</strong>{' '}
              <a
                href={`tel:${CONTACT.phone.replace(/[^+\d]/g, '')}`}
                className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm"
              >
                {CONTACT.phone}
              </a>
            </li>
            <li>
              <strong>Post:</strong> {CONTACT.streetAddress}, {CONTACT.addressLocality},{' '}
              {CONTACT.addressRegion} {CONTACT.postalCode}, USA
            </li>
          </ul>

          <p className="pt-8">
            See also our{' '}
            <Link
              href="/accessibility"
              className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm"
            >
              accessibility statement
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
