// Hero Images
import heroCaribbean2 from '@/assets/images/hero/caribbean-2.jpg';
import heroLa1 from '@/assets/images/hero/la-1.jpg';
import heroLa2 from '@/assets/images/hero/la-2.jpg';
import heroNyc1 from '@/assets/images/hero/nyc-1.jpg';
import heroNyc2 from '@/assets/images/hero/nyc-2.jpg';
import heroNyc4 from '@/assets/images/hero/nyc-4.png';

// Service Images
import serviceConcept from '@/assets/images/services/service-concept.jpg';
import serviceInvestment from '@/assets/images/services/service-investment.jpg';
import serviceConstruction from '@/assets/images/services/service-construction.jpg';
import serviceOperations from '@/assets/images/services/service-operations.jpg';
import serviceLegal from '@/assets/images/services/service-legal.jpg';
import serviceAccounting from '@/assets/images/services/service-accounting.jpg';
import serviceTraining from '@/assets/images/services/service-training.jpg';

// Work Images
import workStrategy from '@/assets/images/work/work-strategy.jpg';
import workPlanning from '@/assets/images/work/work-planning.jpg';
import workDining from '@/assets/images/work/work-dining.jpg';

// Portfolio Images (served from public/images/gallery)
const adare_1 = '/images/gallery/adare-hotels/adare_1.png';
const bakan_1 = '/images/gallery/bakan-restaurant/BAKAN 2.png';
const blace_1 = '/images/gallery/blace-nightlife/Blace 4.jpg';
const beverly_1 = '/images/gallery/beverly-meeting-events/The Beverly Hills .png';
const fbc_1 = '/images/gallery/fbc-members-only-club/fbc_1.jpg';
const affect_group_1 = '/images/gallery/affect-group-residential-amenities/Affect Group.png';

// Testimonial Images
import testimonialLobby from '@/assets/images/testimonials/testimonial-lobby.jpg';
import testimonialReception from '@/assets/images/testimonials/testimonial-reception.jpg';

// Hero Slideshow Images - NYC, LA, Caribbean
export const HERO_IMAGES = [
  heroNyc4,
  heroLa1,
  heroNyc1,
  heroLa2,
  heroCaribbean2,
  heroNyc2
];

// Services with background images
export const SERVICES_DATA = [
  {
    title: "Concept Creation",
    description: "We help guide your hospitality concepts from ideation through to delivering market ready, creative outcomes.",
    bgImage: serviceConcept,
    anchor: "concept-creation"
  },
  {
    title: "Capital & Growth Investment",
    description: "We provide strategic advice  and guidance on growth and investment, capital sourcing, M&A’s and create investor-ready business plans.",
    bgImage: serviceInvestment,
    anchor: "capital-growth-investment"
  },
  {
    title: "Design, Development & Construction",
    description: "We provide skilled “Owners Rep” oversight through each phase of design and construction to deliver your projects successfully.",
    bgImage: serviceConstruction,
    anchor: "design-development-construction"
  },
  {
    title: "Operations",
    description: "We help deliver end-to-end operations excellence and efficiency from pre and post opening to ongoing operational management.",
    bgImage: serviceOperations,
    anchor: "operations"
  },
  {
    title: "Legal",
    description: "We help you manage the legal foundations that protect your deals, teams, and long-term operations.",
    bgImage: serviceLegal,
    anchor: "legal"
  },
  {
    title: "Financial",
    description: "We provide end-to-end insightful financial guidance, on budgeting, forecasting, audits, cost control, efficiency and profitability.",
    bgImage: serviceAccounting,
    anchor: "financial"
  },
  {
    title: "Additional Support",
    description: "We provide targeted support wherever your business may need experienced hospitality operator guidance and oversight.",
    bgImage: serviceTraining,
    anchor: "additional-support"
  }
];

// How We Work with images
export const HOW_WE_WORK = [
  {
    number: "01",
    title: "Initial Briefing",
    description: "We take the necessary time understanding our client’s needs, starting with core objectives, opportunities and challenges. Then, working colaboratively with you  to agree best approach and actionable next steps.",
    image: workStrategy
  },
  {
    number: "02",
    title: "Audit and Clear Diagnosis",
    description: "We spend time on site and with you and your key team players to observe and audit your project or business appropriately.  We get under the hood to advise on potential risks and opportunities with the best direction forward.  Where there are challenges, we identify root causes, quantify the impact. We provide clear recommendations and real solutions.",
    image: workPlanning
  },
  {
    number: "03",
    title: "Practical Plan",
    description: "We build a focused roadmap with specific actions, clear timelines, and realistic outcomes. You'll know what we're doing, when, and what results to expect.",
    image: workPlanning // Using same image as was done in original code (duplicate URL)
  },
  {
    number: "04",
    title: "Project Management ~ Hands-On Implementation",
    description: "Where appropriate we work on-site with your team, helping build systems, managing, supporting and solving for the unexpected. We will help ensure proper implementation and successful completion for every project.",
    image: serviceTraining
  },
  {
    number: "05",
    title: "Real Results",
    description: "When we leave, you and your team know how to maintain what we collectively build.  Solutions that stick.  Performance that lasts. You and the project is set for success",
    image: testimonialReception
  }
];

// Portfolio projects
export const PORTFOLIO_PROJECTS = [
  {
    title: "Hotels & Resorts",
    image: adare_1
  },
  {
    title: "Restaurants & Bars",
    image: bakan_1
  },
  {
    title: "Nightlife & Entertainment",
    image: blace_1
  },
  {
    title: "Private & Member-Only Clubs",
    image: fbc_1
  },
  {
    title: "Meeting & Event Venues",
    image: beverly_1
  },
  {
    title: "Residential & CRE Amenities",
    image: affect_group_1
  },
];

// Testimonials with property images
export const TESTIMONIALS = [
  {
    quote: "We were three months from opening and nowhere near ready. Garrett came in and built the entire operational framework—hiring, training, systems, everything. We opened on time with a team that actually knew what they were doing.",
    author: "Managing Partner",
    company: "Boutique Hotel Group",
    image: testimonialLobby
  },
  {
    quote: "Our margins were disappearing and we couldn't figure out why. Within 30 days, they identified $200K in annual leakage and gave us a plan to fix it. Six months later, we're profitable again.",
    author: "Owner",
    company: "Restaurant Group",
    image: workDining
  },
  {
    quote: "Most consultants tell you what's wrong and leave. These guys stayed until it was fixed. That made all the difference.",
    author: "Hotel GM",
    company: "Northeast Market",
    image: testimonialReception
  }
];

// For background images in stats section or others
export { testimonialLobby };
