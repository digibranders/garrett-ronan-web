'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'motion/react';
import { ArrowRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

// Logos Section is now in src/app/components/LogosSection.tsx
import LogosSection from '@/app/components/LogosSection';

// Hero Images
// Hero Images
// import heroCaribbean from '@/assets/images/hero/caribbean.png';
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
import workExecution from '@/assets/images/work/work-execution.jpg'; // used twice
import workDining from '@/assets/images/work/work-dining.jpg';
import workBar from '@/assets/images/work/work-bar.jpg';
import workRooftop from '@/assets/images/work/work-rooftop.jpg';
import testimonialGroup from '@/assets/images/testimonials/testimonial-group.jpg';

import adare_1 from '@/assets/images/gallery/adare-hotels/adare_1.png';
import bakan_1 from '@/assets/images/gallery/bakan-restaurant/BAKAN 2.png';
import blace_1 from '@/assets/images/gallery/blace-nightlife/Blace 4.jpg';
import beverly_1 from '@/assets/images/gallery/beverly-meeting-events/The Beverly Hills .png';
import fbc_1 from '@/assets/images/gallery/fbc-members-only-club/fbc_1.jpg';
import affect_group_1 from '@/assets/images/gallery/affect-group-residential-amenities/Affect Group.png';


// Testimonial Images
import testimonialLobby from '@/assets/images/testimonials/testimonial-lobby.jpg';
import testimonialReception from '@/assets/images/testimonials/testimonial-reception.jpg';



// Hero Slideshow Images - NYC, LA, Caribbean
const HERO_IMAGES = [
  heroNyc4,
  heroLa1,
  // heroCaribbean, 
  heroNyc1,
  heroLa2,
  heroCaribbean2,
  heroNyc2
];


// Services with background images
const SERVICES_DATA = [
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
// How We Work with images
const HOW_WE_WORK = [
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
const PORTFOLIO_PROJECTS = [
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
function AnimatedCounter({ end, duration = 2, suffix = "" }: Readonly<{ end: number; duration?: number; suffix?: string }>) {
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
  const [isMobile, setIsMobile] = useState(false);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
              We take a creative, yet practical, consultative approach to ensure your properties and projects don't just run, they <span className="italic text-[#c5a059]">thrive</span>.
            </h2>
            <p className="text-[#181818] text-lg leading-relaxed mb-8">
                We will support you at every stage of your project and the life cycle of your asset, including but not limited to….
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
                className={`${
                  index === SERVICES_DATA.length - 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <Link href={`/services#${service.anchor}`} className="group block relative overflow-hidden bg-white border border-[#181818]/10 hover:border-[#c5a059] transition-all duration-500 hover:shadow-xl h-full">
                  {/* Image at the top */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      src={service.bgImage}
                      alt={service.title}
                      placeholder="blur"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform"
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
                </Link>
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
              <span className="text-2xl md:text-3xl font-serif text-white">Boston</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Las Vegas</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Charleston</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">Dublin</span>
              <span className="text-[#c5a059]">•</span>
              <span className="text-2xl md:text-3xl font-serif text-white">London</span>
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
              <span className="italic text-[#c5a059]">Across All Hospitality Ventures</span>
            </h2>
            <p className="text-stone-400 text-base md:text-lg mt-6 whitespace-nowrap">
              <span className="font-serif italic">"Experience is simply the name we give our mistakes"</span> ~ Oscar Wilde
            </p>
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
                GKR Hospitality is here to support. We offer the depth and breadth of experience in consulting and advisory services needed for every phase of your project and asset ownership
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <LogosSection />

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
            <p className="text-stone-400 text-base md:text-lg mt-6">
              <span className="font-serif italic">"We do the difficult immediately. The impossible may take us a few moments longer."</span> ~ Waldorf Astoria
            </p>
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