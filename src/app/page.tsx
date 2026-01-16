'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Logo Import
import logoImage from '@/assets/images/logos/gkr-logo.png';

// Employed By Logos
import beverlyHiltonLogo from '@/assets/images/logos/beverly-hilton.png';
import starrRestaurantsLogo from '@/assets/images/logos/starr-restaurants.png';
import equinoxHotelsLogo from '@/assets/images/logos/equinox-hotels.png';
import rokaLogo from '@/assets/images/logos/roka.png';
import zumaLogo from '@/assets/images/logos/zuma.png';
import etaruLogo from '@/assets/images/logos/etaru.png';
import inkoNitoLogo from '@/assets/images/logos/inko-nito.png';
import oblixLogo from '@/assets/images/logos/oblix.png';
import movenpickLogo from '@/assets/images/logos/movenpick.png';
import adareManorLogo from '@/assets/images/logos/adare-manor.png';
import swallowHotelsLogo from '@/assets/images/logos/swallow-hotels.png';
import principalHotelsLogo from '@/assets/images/logos/principal-hotels.png';
import waldorfAstoriaLogo from '@/assets/images/logos/waldorf-astoria.png';
import bostonHarborHotelLogo from '@/assets/images/logos/boston-harbor-hotel.png';
import etcVenuesLogo from '@/assets/images/logos/etc-venues.png';
import conveneLogo from '@/assets/images/logos/convene.png';

// Consulted With Logos
import bakanLogo from '@/assets/images/logos/bakan.png';
import support305Logo from '@/assets/images/logos/support-305.png';
import zumaConsultedLogo from '@/assets/images/logos/zuma-consulted.png';
import bxpLogo from '@/assets/images/logos/bxp.png';
import rudinLogo from '@/assets/images/logos/rudin.png';
import blaceLogo from '@/assets/images/logos/blace.png';
import residentLogo from '@/assets/images/logos/meet-resident.png';
import affectLogo from '@/assets/images/logos/affect-group.png';
import sageLogo from '@/assets/images/logos/sage-hospitality.png';
import buccamentLogo from '@/assets/images/logos/buccament.png';

// Hero Images
import heroNyc from '@/assets/images/hero/hero-nyc.jpg';
import heroLa from '@/assets/images/hero/hero-la.jpg';
import heroCaribbean from '@/assets/images/hero/hero-caribbean.jpg';

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
import workExecution from '@/assets/images/work/work-execution.jpg'; // used twice
import workDining from '@/assets/images/work/work-dining.jpg';
import workBar from '@/assets/images/work/work-bar.jpg';
import workRooftop from '@/assets/images/work/work-rooftop.jpg';
import testimonialGroup from '@/assets/images/testimonials/testimonial-group.jpg';

// Testimonial Images
import testimonialLobby from '@/assets/images/testimonials/testimonial-lobby.jpg';
import testimonialReception from '@/assets/images/testimonials/testimonial-reception.jpg';

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
  heroNyc,
  heroLa,
  heroCaribbean
];

// Services with background images
const SERVICES_DATA = [
  {
    title: "Concept Creation",
    description: "We help guide your hospitality concepts from ideation through to delivering market ready, creative results.",
    bgImage: serviceConcept
  },
  {
    title: "Capital & Growth Investment",
    description: "We provide strategic advice  and guidance on growth and investment, capital sourcing, M&A’s and investor-ready business plans.",
    bgImage: serviceInvestment
  },
  {
    title: "Design, Development & Construction",
    description: "We provide skilled “Owners Rep” oversight through each phase of design and construction to deliver successful Projects.",
    bgImage: serviceConstruction
  },
  {
    title: "Operations",
    description: "We help deliver end-to-end operations excellence and efficiency from pre and post opening to ongoing operational management.",
    bgImage: serviceOperations
  },
  {
    title: "Legal",
    description: "We help you manage the legal foundations that protect your deals, teams, and long-term operations.",
    bgImage: serviceLegal
  },
  {
    title: "Financial",
    description: "We provide end-to-end insightful financial guidance, including budgeting, forecasting, audits, cost control, efficiency and profitability.",
    bgImage: serviceAccounting
  },
  {
    title: "Additional Support",
    description: "We provide targeted support wherever your business needs experienced hospitality operator oversight.",
    bgImage: serviceTraining
  }
];

// How We Work with images
// How We Work with images
const HOW_WE_WORK = [
  {
    number: "01",
    title: "Initial Briefing",
    description: "We take the necessary time understanding our client’s needs, starting with core objectives, opportunities and challenges. Then, working through to agree best approach and actionable next steps.",
    image: workStrategy
  },
  {
    number: "02",
    title: "Audit and Clear Diagnosis",
    description: "We spend time on site and with your key team players to observe and audit your project or business appropriately.  We get under the hood to advise on potential risks and opportunities with the best direction forward.  Where there are challenges, we identify root causes, quantify the impact. We provide clear recommendations and real solutions.",
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
    description: "When we leave, you and your team knows how to maintain what we collectively build. The solutions stick. The performance lasts. The project is set for success",
    image: testimonialReception
  }
];

// Portfolio projects
// Portfolio projects
const PORTFOLIO_PROJECTS = [
  {
    title: "Boutique Hotel",
    location: "Manhattan, NY",
    image: workExecution
  },
  {
    title: "Fine Dining Restaurant",
    location: "Los Angeles, CA",
    image: workDining
  },
  {
    title: "Luxury Lounge",
    location: "New York, NY",
    image: workBar
  },
  {
    title: "Rooftop Dining",
    location: "Los Angeles, CA",
    image: workRooftop
  },
  {
    title: "Caribbean Resort",
    location: "Caribbean Islands",
    image: heroCaribbean
  },
  {
    title: "Restaurant Group",
    location: "New York, NY",
    image: testimonialGroup
  }
];

// Testimonials with property images
// Testimonials with property images
const TESTIMONIALS = [
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
              <motion.div
                key={index}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: currentHeroImage === index ? 1 : 0 }}
                transition={{ duration: 1.5 }}
              >
                <Image
                  src={image}
                  alt={`Hero ${index + 1}`}
                  fill
                  className="object-cover"
                  // Optimize loading: First image gets priority
                  priority={index === 0}
                  sizes="100vw"
                />
              </motion.div>
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
                <span className="hidden md:inline">Schedule Your Complimentary Discovery Call</span>
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
              We take a creative, yet simply practical, consultative approach to ensure your properties and projects don't just run, they <span className="italic text-[#c5a059]">thrive</span>.
            </h2>
            <p className="text-[#181818] text-lg leading-relaxed mb-8">
                We will support you at every stage of your project and life cycle of your asset including but not limited to….
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
              backgroundImage: `url(${testimonialLobby.src})`,
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
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Boston</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Barbados</span>
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
              <span className="italic text-[#c5a059]">Across All Hospitality Assets</span>
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
                  <span className="hidden md:inline">Schedule Your Complimentary<br />Discovery Call</span>
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