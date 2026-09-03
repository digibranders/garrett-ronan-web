export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Contact page FAQs. Rendered as an accordion and emitted as FAQPage
 * structured data, so both surfaces stay in sync from one source.
 */
export const FAQ_DATA: readonly FAQItem[] = [
  {
    question: "How quickly can you start?",
    answer: "For operational consulting and revenue work, typically 2-4 weeks. For concept-to-opening projects, the earlier you involve us, the better, ideally 12+ months before opening."
  },
  {
    question: "Do you work remotely or on-site?",
    answer: "Where appropriate we work on-site with you and your team. Hospitality operations can't be fixed from spreadsheets. So we're there, on property, to support you when needed to ensure the successful implementation and completion of your project."
  },
  {
    question: "How long are typical engagements?",
    answer: "Operations and revenue based audits: 3-6 months. Concept-to-opening: 6-12 months depending on project stage and needs. Many clients retain us for ongoing advisory support after the initial engagement. Each project and its timing will be tailored to the actual requirements."
  },
  {
    question: "What does it cost?",
    answer: "We firstly will spend time to understand the needs, core objectives, opportunities and challenges you are facing. Then depending on project scope, property size, and complexity, we will provide an a la carte approach to estimate a specific pricing for your project."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we are happy to work under a mutual NDA for all client engagements."
  },
  {
    question: "Are you available for speaking engagements or advisory board roles?",
    answer: "Yes. Please contact us to discuss needs."
  }
] as const;
