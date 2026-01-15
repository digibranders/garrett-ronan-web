'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Logo Import
import logoImage from '@/assets/images/gkr-logo.png';

// Employed By Logos
import beverlyHiltonLogo from '@/assets/images/beverly-hilton.png';
import starrRestaurantsLogo from '@/assets/images/starr-restaurants.png';
import equinoxHotelsLogo from '@/assets/images/equinox-hotels.png';
import rokaLogo from '@/assets/images/roka.png';
import zumaLogo from '@/assets/images/zuma.png';
import etaruLogo from '@/assets/images/etaru.png';
import inkoNitoLogo from '@/assets/images/inko-nito.png';
import oblixLogo from '@/assets/images/oblix.png';
import movenpickLogo from '@/assets/images/movenpick.png';
import adareManorLogo from '@/assets/images/adare-manor.png';
import swallowHotelsLogo from '@/assets/images/swallow-hotels.png';
import principalHotelsLogo from '@/assets/images/principal-hotels.png';
import waldorfAstoriaLogo from '@/assets/images/waldorf-astoria.png';
import bostonHarborHotelLogo from '@/assets/images/boston-harbor-hotel.png';
import etcVenuesLogo from '@/assets/images/etc-venues.png';
import conveneLogo from '@/assets/images/convene.png';

// Consulted With Logos
import bakanLogo from '@/assets/images/bakan.png';
import support305Logo from '@/assets/images/support-305.png';
import zumaConsultedLogo from '@/assets/images/zuma-consulted.png';
import bxpLogo from '@/assets/images/bxp.png';
import rudinLogo from '@/assets/images/rudin.png';
import blaceLogo from '@/assets/images/blace.png';
import residentLogo from '@/assets/images/meet-resident.png';
import affectLogo from '@/assets/images/affect-group.png';
import sageLogo from '@/assets/images/sage-hospitality.png';
import buccamentLogo from '@/assets/images/buccament.png';

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
  // { name: 'FBC', logo: null },
  // { name: 'Caribbean', logo: null }
  { name: 'Buccament', logo: buccamentLogo }
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
    bgImage: "https://images.unsplash.com/photo-1759472659432-3232e42d04d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGRlc2lnbiUyMGNvbmNlcHR8ZW58MXx8fHwxNzY4Mjk2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Capital & Growth Investment",
    description: "We provide strategic advice  and guidance on growth and investment, capital sourcing, M&A’s and investor-ready business plans.",
    bgImage: "https://images.unsplash.com/photo-1758519289559-f4d0ead39634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludmVzdG1lbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODI4Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Design, Development & Construction",
    description: "We provide skilled “Owners Rep” oversight through each phase of design and construction to deliver successful Projects.",
    bgImage: "https://images.unsplash.com/photo-1685382807533-9bd52421457c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBsdXh1cnl8ZW58MXx8fHwxNzY4Mjk2NjExfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Operations",
    description: "We help deliver end-to-end operations excellence and efficiency from pre and post opening to ongoing operational management.",
    bgImage: "https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMG9wZXJhdGlvbnMlMjBjaGVmfGVufDF8fHx8MTc2ODI4NDk0MHww&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Legal",
    description: "We help you manage the legal foundations that protect your deals, teams, and long-term operations.",
    bgImage: "https://images.unsplash.com/photo-1564846824194-346b7871b855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnRzJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY4Mjk2NjEwfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Financial",
    description: "We provide end-to-end insightful financial guidance, including budgeting, forecasting, audits, cost control, efficiency and profitability.",
    bgImage: "https://images.unsplash.com/photo-1762427354051-a9bdb181ae3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhY2NvdW50aW5nJTIwYW5hbHlzaXN8ZW58MXx8fHwxNzY4MTk1NTkxfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    title: "Additional Support",
    description: "We provide targeted support wherever your business needs experienced hospitality operator oversight.",
    bgImage: "https://images.unsplash.com/photo-1766808985890-e564439e39a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN0YWZmJTIwdHJhaW5pbmclMjB0ZWFtfGVufDF8fHx8MTc2ODI4NDk0MXww&ixlib=rb-4.1.0&q=80&w=1080"
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
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [currentWorkStep, setCurrentWorkStep] = useState(0);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  // Hero slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">
      


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
                // Optimize loading: First image gets priority
                loading={index === 0 ? "eager" : "lazy"}
                // Add sizes for responsive loading
                sizes="100vw"
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

            <Link href="/contact">
              <Button className="bg-[#c5a059] text-[#181818] hover:opacity-90 px-10 py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full">
                <span className="hidden md:inline">Schedule Your Complimentary Diagnostic Call</span>
                <span className="md:hidden">Schedule Free Call</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section - Enhanced with Background Images - NOW LIGHT */}
      <section id="philosophy" className="py-20 md:py-32 bg-[#FFF7F2]">
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
                className={`group relative overflow-hidden bg-white border border-[#181818]/10 hover:border-[#c5a059] transition-all duration-500 hover:shadow-xl ${
                  index === SERVICES_DATA.length - 1 ? 'lg:col-start-2' : ''
                }`}
              >
                {/* Image at the top */}
                <div className="aspect-[4/3] overflow-hidden relative">
                  <Image 
                    src={service.bgImage}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <Image 
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
                className="flex gap-24 items-center will-change-transform"
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
                      <Image 
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
                      <Image 
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
                className="flex gap-24 items-center will-change-transform"
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
                      <Image 
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
                      <Image 
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
                    <Image src={step.image} alt={step.title} className="w-full h-full object-cover" />
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
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.company}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
              <Link href="/contact">
                <Button className="bg-[#181818] text-white hover:bg-white hover:text-[#181818] px-8 py-6 text-sm uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full whitespace-normal h-auto text-center leading-normal">
                  <span className="hidden md:inline">Schedule Your Complimentary<br />Diagnostic Call</span>
                  <span className="md:hidden">Schedule Free Call</span>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>


    </div>
  );
}