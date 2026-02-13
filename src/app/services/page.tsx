'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/images/logos/gkr-logo.png';

// Service Images
import serviceConcept from '@/assets/images/services/service-concept.jpeg';
import serviceInvestment from '@/assets/images/services/service-investment.png';
import serviceConstruction from '@/assets/images/services/service-construction.png';
import serviceOperations from '@/assets/images/services/service-operations.png';
import serviceLegal from '@/assets/images/services/service-legal.jpg';
import serviceAccounting from '@/assets/images/services/service-accounting.png';
import serviceTraining from '@/assets/images/services/service-training.png';
import garettDiscussImage from '@/assets/images/services/garett-discuss.png';

const SERVICES_DATA = [
  {
    id: "concept-creation",
    number: "01",
    title: "Concept Creation",
    tagline: "Turning ideas into viable, market-ready creative concepts.",
    description: [
      "Ideation and early-stage concept development",
      "Concept inception and positioning",
      "Structured brainstorming and refinement",
      "Market research and competitive analysis",
      "Market and site identification and sourcing"
    ],
    image: serviceConcept
  },
  {
    id: "capital-growth-investment",
    number: "02",
    title: "Capital & Growth Investment",
    tagline: "Supporting smart growth with the right capital strategy.",
    description: [
      "Growth capital and investment sourcing",
      "Mergers and acquisitions support",
      "Business planning and investor-ready models"
    ],
    image: serviceInvestment
  },
  {
    id: "design-development-construction",
    number: "03",
    title: "Design, Development & Construction",
    tagline: "Design that looks right and works operationally.",
    description: [
      "Conceptual design briefing aligned to client and tenant needs",
      "Schematic design coordination with design and consultant teams",
      "Value engineering reviews to protect budgets and functionality",
      "Contract review and risk assessment",
      "Design development and style narrative definition",
      "RFP and bidding process management",
      "Construction documentation and approvals",
      "End-to-end project management",
      "Change order review and cost control",
      "Coordination of lighting, AV, FF&E, and specialty elements"
    ],
    image: serviceConstruction
  },
  {
    id: "operations",
    number: "04",
    title: "Operations",
    tagline: "Building operations that perform successfully under real conditions.",
    description: [
      "Pre-opening planning and operational standards creation",
      "Launch and opening support",
      "Post-opening stabilization",
      "Day-to-day operational leadership and advisory",
      "SOP creation, review, and implementation",
      "Full operational audits, including secret shops",
      "Sales and marketing strategy and execution",
      "Revenue management and performance optimization",
      "HR, recruitment, and team development",
      "Labor relations, collective bargaining, and union negotiations",
      "Logistics and procurement",
      "F&B menu planning, design, costing, and performance analysis"
    ],
    image: serviceOperations
  },
  {
    id: "legal",
    number: "05",
    title: "Legal",
    tagline: "Practical legal oversight for hospitality operations.",
    description: [
      "Lease review and negotiations",
      "Licensing and permitting",
      "Contract review and negotiations",
      "Employment and labor support"
    ],
    image: serviceLegal
  },
  {
    id: "financial",
    number: "06",
    title: "Financial",
    tagline: "Clear financial control and accountability.",
    description: [
      "Project and operational budgeting and forecasting",
      "Full and partial financial audits",
      "Cost analysis and control systems",
      "Profitability and performance analysis",
      "M&A financial support",
      "Sale and exit preparation",
      "Business dissolution support"
    ],
    image: serviceAccounting
  },
  {
    id: "additional-support",
    number: "07",
    title: "Additional Support",
    tagline: "Specialized support tailored to each unique project or operational needs.",
    description: [
      "Every Hospitality Business and Project has unique attributes ~ We are here to support whatever you may need."
    ],
    image: serviceTraining
  }
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextService = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % SERVICES_DATA.length);
  }, []);

  const prevService = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + SERVICES_DATA.length) % SERVICES_DATA.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevService();
      if (e.key === 'ArrowRight') nextService();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextService, prevService]);

  const leftIndex = (activeIndex - 1 + SERVICES_DATA.length) % SERVICES_DATA.length;
  const rightIndex = (activeIndex + 1) % SERVICES_DATA.length;

  const cardVariants: Variants = {
    active: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      filter: 'none',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
    },
    left: {
      x: '-105%',
      scale: 0.9,
      opacity: 0.5,
      zIndex: 10,
      filter: 'none',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
    },
    right: {
      x: '105%',
      scale: 0.9,
      opacity: 0.5,
      zIndex: 10,
      filter: 'none',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] }
    },
    hidden: {
      scale: 0.5,
      opacity: 0,
      zIndex: 0,
      filter: 'blur(20px)',
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 bg-[#FFF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">What We Offer</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-[#181818] leading-[0.9] tracking-tight mb-8">
              Comprehensive<br />
              <span className="italic text-[#c5a059]">Hospitality Solutions</span>
            </h1>
            <p className="text-stone-600 text-xl max-w-3xl leading-relaxed">
              From concept to operations, we provide integrated support across every phase of your hospitality journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-24 md:py-48 bg-[#080a0f] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-7xl mx-auto relative h-[800px] flex items-center justify-center">

            {/* Navigation Arrows */}
            <div className="absolute inset-0 z-50 pointer-events-none hidden md:flex items-center">
              <div className="container mx-auto flex justify-between w-full">
                <button
                  onClick={prevService}
                  className="w-14 h-14 border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500 pointer-events-auto group"
                >
                  <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
                </button>
                <button
                  onClick={nextService}
                  className="w-14 h-14 border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500 pointer-events-auto group"
                >
                  <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            <div className="relative w-full h-full flex items-center justify-center md:[perspective:2000px]">
              {SERVICES_DATA.map((service, index) => {
                let position = "hidden";
                if (index === activeIndex) position = "active";
                else if (index === leftIndex) position = "left";
                else if (index === rightIndex) position = "right";

                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    animate={position}
                    initial="hidden"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.1}
                    onDragEnd={(_, info) => {
                      if (info.offset.x < -50) nextService();
                      if (info.offset.x > 50) prevService();
                    }}
                    style={{
                      touchAction: 'pan-y',
                      WebkitFontSmoothing: 'antialiased',
                      MozOsxFontSmoothing: 'auto',
                      textRendering: 'geometricPrecision',
                      backfaceVisibility: 'visible',
                    }}
                    className="absolute w-[90%] md:w-[420px] bg-[#121212] md:bg-[#121212]/95 border border-white/5 p-0 md:shadow-2xl overflow-hidden flex flex-col h-[900px] md:h-[800px] cursor-grab active:cursor-grabbing"
                  >
                    {/* Image/Title Section */}
                    <div className="w-full relative h-[250px] md:h-[300px] flex-shrink-0">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        {/* <span className="text-[#c5a059] text-[10px] uppercase tracking-[0.4em] font-bold block mb-3">Service {service.number}</span> */}
                        <h3 className="text-white text-2xl md:text-3xl font-serif uppercase tracking-wider leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description Section */}
                    <div className="w-full p-4 md:p-8 flex flex-col flex-grow relative">
                      <ul className="space-y-2 list-disc pl-4 text-left w-full">
                        {service.description.map((item, i) => (
                          <li key={i} className="text-stone-300 text-xs md:text-sm leading-relaxed font-light pl-1">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-24 bg-[#c5a059] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column: Image */}
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[3/4] w-auto h-[490px] overflow-hidden rounded-sm">
                <Image src={garettDiscussImage} alt="Ready to Build" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            {/* Right Column: Content */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-5xl md:text-7xl font-serif text-[#181818] mb-8 leading-tight">
                  Ready to Build Something<br />
                  <span className="italic text-white">Exceptional?</span>
                </h2>
                <p className="text-[#181818] text-lg mb-12 max-w-2xl mx-auto lg:mx-0">
                  Let's discuss how we can support your hospitality vision
                </p>
                <Link href="/contact" className="inline-block">
                  <Button className="bg-[#181818] text-white hover:bg-white hover:text-[#181818] px-4 py-4 md:px-12 md:py-7 text-[9px] md:text-sm uppercase tracking-[0.15em] md:tracking-[0.3em] font-bold transition-all duration-500 rounded-full h-auto whitespace-nowrap leading-relaxed w-auto max-w-none">
                    Schedule Your Complimentary Discovery Call
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
