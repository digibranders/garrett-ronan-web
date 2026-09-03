'use client';

import React from 'react';
import { useScroll, useTransform } from 'motion/react';

// Sections
import HeroSection from '@/components/home/HeroSection';
import PhilosophySection from '@/components/home/PhilosophySection';
import StatsSection from '@/components/home/StatsSection';
import CTASection from '@/components/home/CTASection';

// Data
import {
  HERO_IMAGES,
  SERVICES_DATA,
} from '@/data/homeData';

// Images
import testimonialLobby from '@/assets/images/testimonials/testimonial-lobby.jpg';

export default function HomeContent() {
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

      {/* CTA Section */}
      <CTASection />

    </div>
  );
}
