'use client';

import React from 'react';
import { useScroll, useTransform } from 'motion/react';

// Sections
import LogosSection from '@/components/common/LogosSection';
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import StatsSection from '@/components/home/StatsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ProcessSection from '@/components/home/ProcessSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

// Data
import { 
  HERO_IMAGES, 
  SERVICES_DATA, 
  PORTFOLIO_PROJECTS, 
  HOW_WE_WORK, 
  TESTIMONIALS,
  testimonialLobby
} from '@/data/homeData';

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">
      
      {/* Hero Section */}
      <HeroSection images={HERO_IMAGES} scale={scale} />

      {/* Philosophy Section */}
      <PhilosophySection services={SERVICES_DATA} />

      {/* Animated Stats Section */}
      <StatsSection backgroundImage={testimonialLobby} />

      {/* Portfolio Projects Section */}
      <PortfolioSection projects={PORTFOLIO_PROJECTS} />

      {/* Logos Section */}
      <LogosSection />

      {/* Process Section */}
      <ProcessSection steps={HOW_WE_WORK} />

      {/* Testimonials Section */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}