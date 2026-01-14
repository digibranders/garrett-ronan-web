import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { Menu, ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

// Logo Import
import logoImage from '@/assets/54b647c778f17f42e409842f22c6c7a9bd32e88b.png';

// Employed By Logos
import beverlyHiltonLogo from '@/assets/294a79a166a37946a6ea3f65fcb6154e4ea18028.png';
import starrRestaurantsLogo from '@/assets/641ac9708c4149143d1ee9d0c05779519bdf6790.png';
import equinoxHotelsLogo from '@/assets/d272f3b95abfb46e75ba80c0f0ae9f82589f172a.png';
import rokaLogo from '@/assets/e270abfd1450180af1f3b9da34ef8066405ec080.png';
import zumaLogo from '@/assets/3dab84e89b131499b255416898a1793fadab22a3.png';
import etaruLogo from '@/assets/5065532a65a814bece1ca2162d1c6a3c26b3fdb2.png';
import inkoNitoLogo from '@/assets/41bb6a1ec14b924aad438e60a52022ad1d4b9ccd.png';
import oblixLogo from '@/assets/a79162e968bb077fe25dd9d7fb06474776067b9f.png';
import movenpickLogo from '@/assets/3a7fe7dc9a162df2f1f26108da6b0f2a390fe7ca.png';
import adareManorLogo from '@/assets/3c7504f73c05b1f65141e7fc376d8459b35b2aab.png';
import swallowHotelsLogo from '@/assets/78b43e0bdb85efac10447a6fe6fbe5e2cf887c4d.png';
import principalHotelsLogo from '@/assets/253eeafdb1386b070cd8541ff7c6d251e71de5a0.png';
import waldorfAstoriaLogo from '@/assets/d482d5881b5afd3ac085f4f901390579289bc95f.png';
import bostonHarborHotelLogo from '@/assets/e454a4a492e3906480f22abc560f9b44864fc108.png';
import etcVenuesLogo from '@/assets/72dbee8b56ba19274398d03ca9cab8c4db3886d0.png';
import conveneLogo from '@/assets/9330e58e67562e618270ede081f18fdbf6c444f7.png';

// Consulted With Logos
import bakanLogo from '@/assets/92b31a05b60c6e62f400ff10221441334ec3f327.png';
import support305Logo from '@/assets/a6ef1ce4dcb93298217bf771c5272414be3ead3a.png';
import zumaConsultedLogo from '@/assets/f544f1126084e0a08e5049d5d2910a9329d5d702.png';
import bxpLogo from '@/assets/114297a31d60e23d001ec1f92711d71c6023a6de.png';
import rudinLogo from '@/assets/f4a7cb4ec85330f2ce228b47a00cdc0f130d3cc7.png';
import blaceLogo from '@/assets/d252ac5998701099104c56c3f44254efbde0820b.png';
import residentLogo from '@/assets/b7505be62114bd74130d9a72831b3c5ce8fa464f.png';
import affectLogo from '@/assets/f771fb5c6bb67581dbf98bc2f69218f9384f2182.png';
import sageLogo from '@/assets/006460939252a7050e1760ef2baf7c43b6f16a1f.png';

// Employed By Companies - Logo or Text
const EMPLOYED_BY_COMPANIES = [
  { name: 'Mövenpick', logo: movenpickLogo },
  { name: 'Adare Manor', logo: adareManorLogo },
  { name: 'Swallow Hotels', logo: swallowHotelsLogo },
  { name: 'Principal Hotels', logo: principalHotelsLogo },
  { name: 'Waldorf Astoria', logo: waldorfAstoriaLogo },
  { name: 'Boston Harbor Hotel', logo: bostonHarborHotelLogo },
  { name: 'The Beverly Hilton', logo: beverlyHiltonLogo },
  { name: 'ROKA', logo: rokaLogo },
  { name: 'Zuma', logo: zumaLogo },
  { name: 'ETARU', logo: etaruLogo },
  { name: 'INKO NITO', logo: inkoNitoLogo },
  { name: 'oblix', logo: oblixLogo },
  { name: 'Starr Restaurants', logo: starrRestaurantsLogo },
  { name: 'Equinox Hotels', logo: equinoxHotelsLogo },
  { name: 'etc.venues', logo: etcVenuesLogo },
  { name: 'Convene', logo: conveneLogo }
];

// Consulted With Companies - Logo or Text
const CONSULTED_WITH_COMPANIES = [
  { name: 'BXP', logo: bxpLogo },
  { name: 'Rudin Group', logo: rudinLogo },
  { name: 'Zuma', logo: zumaConsultedLogo },
  { name: 'MDC', logo: null },
  { name: 'Affect Group', logo: affectLogo },
  { name: 'Sage Hospitality', logo: sageLogo },
  { name: 'BLACE', logo: blaceLogo },
  { name: 'Meet Resident', logo: residentLogo },
  { name: 'Bakan', logo: bakanLogo },
  { name: 'Support 305', logo: support305Logo },
  { name: 'FBC', logo: null },
  { name: 'Caribbean', logo: null }
];

// Hero Slideshow Images - NYC, LA, Caribbean
const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1762732793012-8bdab3af00b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOZXclMjBZb3JrJTIwQ2l0eSUyMGx1eHVyeSUyMGhvdGVsJTIwc2t5bGluZXxlbnwxfHx8fDE3NjgyODQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1767376476050-744ec779252d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMb3MlMjBBbmdlbGVzJTIwbHV4dXJ5JTIwaG90ZWwlMjBzdW5zZXR8ZW58MXx8fHwxNzY4Mjg0OTM5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1629906645393-3678ed4f4040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBsdXh1cnklMjByZXNvcnQlMjBiZWFjaHxlbnwxfHx8fDE3NjgyODQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
];

// Services with background images
const SERVICES_DATA = [
  {
    title: "Concept Creation",
    description: "We help guide your hospitality concepts from ideation through to delivering market ready, creative results.",
    bgImage: "https://images.unsplash.com/photo-1759472659432-3232e42d04d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGRlc2lnbiUyMGNvbmNlcHR8ZW58MXx8fHwxNzY4Mjk2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Capital & Growth Investment",
    description: "We provide strategic advice  and guidance on growth and investment, capital sourcing, M&A’s and investor-ready business plans.",
    bgImage: "https://images.unsplash.com/photo-1758519289559-f4d0ead39634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludmVzdG1lbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODI4Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Design, Development & Construction",
    description: "We provide skilled “Owners Rep” oversight through each phase of design and construction to deliver successful Projects.",
    bgImage: "https://images.unsplash.com/photo-1685382807533-9bd52421457c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzY4Mjk2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Operations",
    description: "We help deliver end-to-end operations excellence and efficiency from pre and post opening to ongoing operational management.",
    bgImage: "https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMG9wZXJhdGlvbnMlMjBjaGVmfGVufDF8fHx8MTc2ODI4NDk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Legal",
    description: "We help you manage the legal foundations that protect your deals, teams, and long-term operations.",
    bgImage: "https://images.unsplash.com/photo-1564846824194-346b7871b855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnRzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY4Mjk2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Financial",
    description: "We provide end-to-end insightful financial guidance, including budgeting, forecasting, audits, cost control, efficiency and profitability.",
    bgImage: "https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhY2NvdW50aW5nJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzY4MTk1NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    title: "Additional Support",
    description: "We provide targeted support wherever your business needs experienced hospitality operator oversight.",
    bgImage: "https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwdHJhaW5pbmclMjB0ZWFtfGVufDF8fHx8MTc2ODI4NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

// How We Work with images
const HOW_WE_WORK = [
  {
    number: "01",
    title: "Diagnostic",
    description: "We spend days on-site, observing everything. Operations, financials, team dynamics, guest experience. We talk to your staff, review your numbers, and watch service in real-time.",
    image: "https://images.unsplash.com/photo-1764173039056-3cc602fef942?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdWx0YW50JTIwbWVldGluZyUyMGJ1c2luZXNzJTIwc3RyYXRlZ3l8ZW58MXx8fHwxNzY4Mjg0OTQzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "02",
    title: "Clear Diagnosis",
    description: "We identify the root problems (not symptoms), quantify the impact, and show you exactly what's broken and why. No consultant-speak. No 50-page reports. Just clarity.",
    image: "https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODI4NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "03",
    title: "Practical Plan",
    description: "We build a focused roadmap with specific actions, clear timelines, and realistic outcomes. You'll know what we're doing, when, and what results to expect.",
    image: "https://images.unsplash.com/photo-1758519289022-5f9dea0d8cdc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2lhbCUyMHBsYW5uaW5nfGVufDF8fHx8MTc2ODI4NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "04",
    title: "Hands-On Implementation",
    description: "We work on-site with your team, building systems, training staff, and fixing problems as they surface. We stay until the operation runs without us.",
    image: "https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwdHJhaW5pbmclMjB0ZWFtfGVufDF8fHx8MTc2ODI4NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    number: "05",
    title: "Sustainable Results",
    description: "When we leave, your team knows how to maintain what we've built. The systems stick. The performance lasts.",
    image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBzZXJ2aWNlfGVufDF8fHx8MTc2ODI4NDk0NHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

// Portfolio projects
const PORTFOLIO_PROJECTS = [
  {
    title: "Boutique Hotel",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1765122670586-b5f22d95c17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwZW50cmFuY2V8ZW58MXx8fHwxNzY4Mjg0OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Fine Dining Restaurant",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1765021098429-0f556e068d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2ODIwMDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Luxury Lounge",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1666455231536-e5cf8b48db7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXIlMjBjb2NrdGFpbCUyMGxvdW5nZXxlbnwxfHx8fDE3NjgyODQ5NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Rooftop Dining",
    location: "Los Angeles, CA",
    image: "https://images.unsplash.com/photo-1597943991719-b9997edbde84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb2Z0b3AlMjBkaW5pbmclMjBvdXRkb29yfGVufDF8fHx8MTc2ODI4NDk0M3ww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Caribbean Resort",
    location: "Caribbean Islands",
    image: "https://images.unsplash.com/photo-1629906645393-3678ed4f4040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDYXJpYmJlYW4lMjBsdXh1cnklMjByZXNvcnQlMjBiZWFjaHxlbnwxfHx8fDE3NjgyODQ5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Restaurant Group",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1766812782166-e243111f703d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZ3JvdXAlMjBkaW5pbmd8ZW58MXx8fHwxNzY4Mjg0OTQ0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

// Testimonials with property images
const TESTIMONIALS = [
  {
    quote: "We were three months from opening and nowhere near ready. Garrett came in and built the entire operational framework—hiring, training, systems, everything. We opened on time with a team that actually knew what they were doing.",
    author: "Managing Partner",
    company: "Boutique Hotel Group",
    image: "https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MjQyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "Our margins were disappearing and we couldn't figure out why. Within 30 days, they identified $200K in annual leakage and gave us a plan to fix it. Six months later, we're profitable again.",
    author: "Owner",
    company: "Restaurant Group",
    image: "https://images.unsplash.com/photo-1765021098429-0f556e068d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc2ODIwMDk2Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "Most consultants tell you what's wrong and leave. These guys stayed until it was fixed. That made all the difference.",
    author: "Hotel GM",
    company: "Northeast Market",
    image: "https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2slMjBzZXJ2aWNlfGVufDF8fHx8MTc2ODI4NDk0NHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

// Counter component for animated stats
function AnimatedCounter({ end, duration = 2, suffix = "" }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentWorkStep, setCurrentWorkStep] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Hero slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle scroll for navbar
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#181818]/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-lg' : 'bg-[#181818]/60 backdrop-blur-md py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Link to="/"><img src={logoImage} alt="GKR" className={`object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'} brightness-0 invert`} /></Link>
          </div>
          
          <div className="hidden md:flex items-center gap-16">
            {[
              { label: 'Philosophy', href: '#philosophy' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' }
            ].map((item, i) => (
              item.href.startsWith('#') ? (
                <a key={item.label} href={item.href} className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-[#c5a059] transition-colors relative group">
                  <span className="text-[#c5a059] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{i+1}</span>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-[#c5a059] transition-colors relative group">
                  <span className="text-[#c5a059] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{i+1}</span>
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <Link to="/contact">
            <Button className="hidden md:flex bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#181818] rounded-full px-8 py-6 tracking-[0.2em] text-[10px] font-bold transition-all duration-500">
              CONTACT US
            </Button>
          </Link>
          
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-8 space-y-6">
            {[
              { label: 'Philosophy', href: '#philosophy' },
              { label: 'Expertise', href: '#expertise' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ].map((item, i) => (
              item.href.startsWith('#') ? (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.3em] font-medium text-white hover:text-[#c5a059] transition-colors py-2"
                >
                  <span className="text-[#c5a059] mr-3">0{i+1}</span>
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label} 
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.3em] font-medium text-white hover:text-[#c5a059] transition-colors py-2"
                >
                  <span className="text-[#c5a059] mr-3">0{i+1}</span>
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section with Slideshow */}
      <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          <motion.div style={{ scale }} className="w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/40 via-[#181818]/30 to-[#181818] z-10"></div>
            {HERO_IMAGES.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Hero ${index + 1}`}
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentHeroImage === index ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              />
            ))}
          </motion.div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-20 mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light text-white leading-[1.1] tracking-tight mb-12 max-w-6xl">
              Simply Practical Yet Creative  <span className="text-[#c5a059] italic">Solutions</span>
            </h1>

            <Link to="/contact">
              <Button className="bg-[#c5a059] text-[#181818] hover:opacity-90 px-10 py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full">
                <span className="hidden md:inline">Schedule Your Complimentary Diagnostic Call</span>
                <span className="md:hidden">Schedule Free Call</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Enhanced with Background Images - NOW LIGHT */}
      <section id="philosophy" className="py-32 md:py-48 bg-[#FFF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">What We Do</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-[#181818] mb-8 max-w-4xl">
              We take a creative, yet simply practical, hands-on consultative approach to ensure your properties and projects don't just run, they <span className="italic text-[#c5a059]">thrive</span>.
            </h2>
            <p className="text-[#181818] text-lg leading-relaxed mb-8">
                We will support you at every stage of your project and life cycle of your asset development including but not limited to….
              </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden bg-white border border-[#181818]/10 hover:border-[#c5a059] transition-all duration-500 hover:shadow-xl"
              >
                {/* Image at the top */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent opacity-60"></div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-serif text-white group-hover:text-[#c5a059] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
                
                {/* Content below image */}
                <div className="p-8">
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-24 md:py-32 bg-[#1e2a3a] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div 
            className="w-full h-full"
            style={{ 
              backgroundImage: `url(https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MjQyNzI1fDA&ixlib=rb-4.1.0&q=80&w=1080)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-serif text-[#c5a059] mb-4">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-serif text-[#c5a059] mb-4">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Properties Transformed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-serif text-[#c5a059] mb-4">
                100<span className="text-3xl">%</span>
              </div>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Delivery</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-serif text-[#c5a059] mb-4">
                0<span className="text-3xl">%</span>
              </div>
              <p className="text-stone-400 text-sm uppercase tracking-wider">Fluff</p>
            </motion.div>
          </div>

          {/* Markets */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16 pt-16 border-t border-white/10"
          >
            <p className="text-stone-400 text-sm uppercase tracking-wider mb-4">Key Markets & Experience</p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <span className="text-2xl md:text-3xl font-serif text-white">New York</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Los Angeles</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Miami</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Las Vegas</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Charleston</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Dublin</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">London</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Projects Section */}
      <section className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#080a0f]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">Our Work</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white">
              Proven Excellence<br/>
              <span className="italic text-[#c5a059]">Across Markets</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_PROJECTS.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-sm aspect-[4/5] cursor-pointer"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#c5a059] text-[10px] uppercase tracking-[0.3em] mb-2">{project.location}</p>
                  <h3 className="text-2xl font-serif text-white">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20 max-w-4xl mx-auto"
          >
            <div className="flex gap-6 md:gap-8 items-start md:items-center">
              <div className="w-[1px] h-32 md:h-36 bg-[#c5a059] flex-shrink-0"></div>
              <p className="text-2xl md:text-3xl font-serif text-stone-300 italic leading-relaxed">
                GKR Hospitality is here to support. We offer the depth and breadth of experience in consulting and advisory services needed for every phase of your project and Asset ownership
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Clients Partner With Us */}
      <section id="expertise" className="py-32 md:py-48 bg-[#FFF7F2] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-8 font-bold">Trusted By Industry Leaders</span>
            <h2 className="text-5xl md:text-8xl font-serif text-[#181818] mb-8 leading-tight">
              Brands We've<br/>
              <span className="italic text-[#c5a059]">Transformed</span>
            </h2>
          </motion.div>

          {/* Employed By Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-serif text-[#181818] mb-2">Employed By</h3>
              <div className="w-16 h-px bg-[#c5a059] mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden -mt-8">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF7F2] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF7F2] to-transparent z-10"></div>
              
              <motion.div
                className="flex gap-24 items-center"
                animate={{
                  x: [-2400, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 45,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {EMPLOYED_BY_COMPANIES.map((company, idx) => (
                  <div 
                    key={`employed-1-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center group"
                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${
                          ['ROKA', 'Zuma', 'ETARU', 'oblix', 'INKO NITO'].includes(company.name)
                            ? 'max-h-8 max-w-[100px]'
                            : company.name === 'etc.venues'
                            ? 'max-h-48 max-w-[400px]'
                            : ['Waldorf Astoria', 'Boston Harbor Hotel'].includes(company.name)
                            ? 'max-h-16 max-w-[200px]'
                            : 'max-h-14 max-w-[180px]'
                        }`}
                      />
                    ) : (
                      <span className="text-[#181818] group-hover:text-[#c5a059] text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                    )}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {EMPLOYED_BY_COMPANIES.map((company, idx) => (
                  <div 
                    key={`employed-2-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center group"
                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${
                          ['ROKA', 'Zuma', 'ETARU', 'oblix', 'INKO NITO'].includes(company.name)
                            ? 'max-h-8 max-w-[100px]'
                            : company.name === 'etc.venues'
                            ? 'max-h-48 max-w-[400px]'
                            : ['Waldorf Astoria', 'Boston Harbor Hotel'].includes(company.name)
                            ? 'max-h-16 max-w-[200px]'
                            : 'max-h-14 max-w-[180px]'
                        }`}
                      />
                    ) : (
                      <span className="text-[#181818] group-hover:text-[#c5a059] text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Consulted With Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-serif text-[#181818] mb-2">Consulted With</h3>
              <div className="w-16 h-px bg-[#c5a059] mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden mt-4">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFF7F2] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFF7F2] to-transparent z-10"></div>
              
              <motion.div
                className="flex gap-24 items-center"
                animate={{
                  x: [-2400, 0],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 45,
                    ease: "linear",
                  },
                }}
              >
                {/* First set */}
                {CONSULTED_WITH_COMPANIES.map((company, idx) => (
                  <div 
                    key={`consulted-1-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center group"
                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${
                          company.name === 'BXP'
                            ? 'max-h-12 max-w-[120px]'
                            : company.name === 'Rudin Group'
                            ? 'max-h-6 max-w-[90px]'
                            : company.name === 'Zuma'
                            ? 'max-h-8 max-w-[100px]'
                            : company.name === 'Affect Group'
                            ? 'max-h-7 max-w-[90px]'
                            : company.name === 'Sage Hospitality'
                            ? 'max-h-8 max-w-[110px]'
                            : company.name === 'BLACE'
                            ? 'max-h-10 max-w-[100px]'
                            : company.name === 'Meet Resident'
                            ? 'max-h-10 max-w-[160px]'
                            : company.name === 'Bakan'
                            ? 'max-h-10 max-w-[120px]'
                            : company.name === 'Support 305'
                            ? 'max-h-11 max-w-[140px]'
                            : 'max-h-12 max-w-[140px]'
                        }`}
                      />
                    ) : (
                      <span className="text-[#181818] group-hover:text-[#c5a059] text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                    )}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {CONSULTED_WITH_COMPANIES.map((company, idx) => (
                  <div 
                    key={`consulted-2-${idx}`} 
                    className="flex-shrink-0 flex items-center justify-center group"
                  >
                    {company.logo ? (
                      <img 
                        src={company.logo} 
                        alt={company.name} 
                        className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${
                          company.name === 'BXP'
                            ? 'max-h-12 max-w-[120px]'
                            : company.name === 'Rudin Group'
                            ? 'max-h-6 max-w-[90px]'
                            : company.name === 'Zuma'
                            ? 'max-h-8 max-w-[100px]'
                            : company.name === 'Affect Group'
                            ? 'max-h-7 max-w-[90px]'
                            : company.name === 'Sage Hospitality'
                            ? 'max-h-8 max-w-[110px]'
                            : company.name === 'BLACE'
                            ? 'max-h-10 max-w-[100px]'
                            : company.name === 'Meet Resident'
                            ? 'max-h-10 max-w-[160px]'
                            : company.name === 'Bakan'
                            ? 'max-h-10 max-w-[120px]'
                            : company.name === 'Support 305'
                            ? 'max-h-11 max-w-[140px]'
                            : 'max-h-12 max-w-[140px]'
                        }`}
                      />
                    ) : (
                      <span className="text-[#181818] group-hover:text-[#c5a059] text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                    )}
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section - Enhanced with Split Screen */}
      <section className="py-32 md:py-48 bg-[#181818]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">How We Work</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white max-w-4xl">
              A Clear, Proven <span className="italic text-[#c5a059]">Process</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Steps */}
            <div className="space-y-0">
              {HOW_WE_WORK.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onMouseEnter={() => setCurrentWorkStep(index)}
                  className={`border-b border-white/10 last:border-0 py-8 cursor-pointer group transition-all duration-300 ${
                    currentWorkStep === index ? 'bg-white/5' : ''
                  }`}
                >
                  <div className="flex gap-6 items-start px-6">
                    <span className={`text-4xl font-serif transition-colors duration-300 ${
                      currentWorkStep === index ? 'text-[#c5a059]' : 'text-[#c5a059]/50'
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <h3 className={`text-2xl md:text-3xl font-serif mb-4 transition-colors duration-300 ${
                        currentWorkStep === index ? 'text-[#c5a059]' : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                      <p className="text-stone-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Images */}
            <div className="relative hidden lg:block">
              <div className="sticky top-32 w-full aspect-[4/5] overflow-hidden rounded-sm">
                {HOW_WE_WORK.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: currentWorkStep === index ? 1 : 0,
                      scale: currentWorkStep === index ? 1 : 1.1
                    }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0"
                  >
                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-60"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Clients Say - Enhanced with Images */}
      <section className="py-32 md:py-48 bg-[#080a0f]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">What Our Clients Say</span>
            <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white">
              Real Results,<br/>
              <span className="italic text-[#c5a059]">Real Impact</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white/5 border border-white/10 rounded-sm overflow-hidden group hover:bg-white/10 hover:border-[#c5a059]/30 transition-all duration-300"
              >
                {/* Property Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#181818] to-transparent"></div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-stone-300 text-lg font-serif italic leading-relaxed mb-8">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-white/10 pt-6">
                    <p className="text-white font-bold text-sm mb-1">{testimonial.author}</p>
                    <p className="text-stone-500 text-xs uppercase tracking-wider">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Talk About Your Situation - CTA */}
      <section className="py-32 md:py-48 bg-[#c5a059] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-7xl font-serif text-[#181818] mb-8 leading-tight">
                Let's Talk About<br/>
                <span className="italic text-white">Your Situation</span>
              </h2>
              <p className="text-[#181818] text-lg leading-relaxed mb-8">
                We offer an initial complimentary discovery call and where practical an in person meeting where we'll:
              </p>
              <ul className="space-y-4 mb-12">
                {[
                  "Learn about you and your business",
                  "Understand your specific needs and challenges",
                  "Develop and agree on a proposed approach",
                  "Determine if we're the right fit",
                  "Outline next steps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#181818]">
                    <Check className="w-5 h-5 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-[#181818] text-xl font-serif italic mb-2">
                No pressure. No sales pitch. Just clarity.
              </p>
              <p className="text-[#181818]/80 text-sm">
                If we're not the right fit, we'll tell you honestly and point you in the right direction.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <Link to="/contact">
                <Button className="bg-[#181818] text-white hover:bg-white hover:text-[#181818] px-8 py-6 text-sm uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full">
                  <span className="hidden md:inline">Schedule Your Complimentary Diagnostic Call</span>
                  <span className="md:hidden">Schedule Free Call</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-[#181818] pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-5">
              <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">Inquiries</span>
              <a href="mailto:garrett@GKRHospitality.com" className="text-4xl md:text-6xl font-serif text-white hover:text-[#c5a059] transition-colors leading-none block mb-2">
                Start a<br/>Conversation
              </a>
            </div>
            
            <div className="md:col-span-3 md:col-start-7">
               <h4 className="text-white font-serif text-xl mb-6">Office</h4>
               <address className="text-stone-500 text-sm leading-relaxed not-italic">
                 42 Brighton View Rd<br/>
                 Fairfield, CT, 06824<br/>
                 USA
               </address>
               <div className="mt-8">
                 <a href="mailto:garrett@GKRHospitality.com" className="text-stone-500 hover:text-[#c5a059] text-sm transition-colors">
                   garrett@GKRHospitality.com
                 </a>
               </div>
            </div>

            <div className="md:col-span-3">
               <h4 className="text-white font-serif text-xl mb-6">Connect</h4>
               <div className="flex flex-col gap-4">
                 <a href="https://www.linkedin.com/in/garrettronan/" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">LinkedIn</a>
                 <a href="https://x.com/gkronan" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">X</a>
                 {/* <a href="#" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">Behance</a> */}
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
               <img src={logoImage} alt="GKR" className="h-8 brightness-0 invert opacity-30" />
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <span>© 2026 GKR Consulting</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}