'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Sections
import LogosSection from '@/components/common/LogosSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';

// Data
import {
    PORTFOLIO_PROJECTS,
    TESTIMONIALS
} from '@/data/homeData';

export default function WorkPage() {
    return (
        <main className="bg-[#181818] pt-32 pb-20">
            {/* Intro Section */}
            <section className="container mx-auto px-6 md:px-12 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold mb-6 block">Our Legacy</span>
                    <h1 className="text-5xl md:text-8xl font-serif text-white leading-tight mb-8">
                        Experience <br />
                        <span className="italic text-[#c5a059]">Refined</span>
                    </h1>
                    <p className="text-stone-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                        A showcase of our most transformative projects, the prestigious partners who trust us, and the real-world impact we've delivered across the hospitality landscape.
                    </p>
                </motion.div>
            </section>

            {/* Portfolio Section */}
            <div id="our-work">
                <PortfolioSection projects={PORTFOLIO_PROJECTS} />
            </div>

            {/* Logos Section */}
            <div id="trusted-by" className="bg-[#0f1115]">
                <LogosSection />
            </div>

            {/* Testimonials Section */}
            <div id="testimonials">
                <TestimonialsSection testimonials={TESTIMONIALS} />
            </div>
        </main>
    );
}
