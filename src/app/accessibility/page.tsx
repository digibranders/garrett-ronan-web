import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement | GKR Hospitality',
  description: 'GKR Hospitality is committed to ensuring digital accessibility for people with disabilities.',
};

export default function AccessibilityPage() {
  return (
    <div className="bg-[#181818] text-[#FFF7F2] min-h-screen pt-32 pb-20 px-6 md:px-12 selection:bg-[#c5a059] selection:text-white">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-serif text-white mb-12">
          Accessibility <span className="text-[#c5a059] italic">Statement</span>
        </h1>

        <div className="space-y-8 text-stone-300 leading-relaxed font-light text-lg">
          <p>
            <strong>GKR Hospitality</strong> is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Conformance Status</h2>
          <p>
            The <a href="https://www.w3.org/WAI/standards-guidelines/wcag/" target="_blank" rel="noopener noreferrer" className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm">Web Content Accessibility Guidelines (WCAG)</a> defines requirements for designers and developers to improve accessibility for people with disabilities. It defines three levels of conformance: Level A, Level AA, and Level AAA.
          </p>
          <p>
            GKR Hospitality is partially conformant with <strong>WCAG 2.1 level AA</strong>. Partially conformant means that some parts of the content do not fully conform to the accessibility standard, though we are actively working to remediate all identified issues.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Feedback</h2>
          <p>
            We welcome your feedback on the accessibility of GKR Hospitality. Please let us know if you encounter accessibility barriers on our site:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>
              <strong>Email:</strong> <a href="mailto:Connect@GKRHospitality.com" className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm">Connect@GKRHospitality.com</a>
            </li>
            <li>
              <strong>Phone:</strong> <a href="tel:+19174605793" className="text-[#c5a059] hover:underline focus:outline-none focus:ring-2 focus:ring-[#c5a059] rounded-sm">+1 (917) 460-5793</a>
            </li>
          </ul>
          <p className="mt-6">
            We try to respond to feedback within 2 business days.
          </p>

          <h2 className="text-2xl text-white font-serif mt-12 mb-4">Technical Specifications</h2>
          <p>
            Accessibility of GKR Hospitality relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>HTML</li>
            <li>WAI-ARIA</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
          <p className="mt-4">
            These technologies are relied upon for conformance with the accessibility standards used.
          </p>
        </div>
      </div>
    </div>
  );
}
