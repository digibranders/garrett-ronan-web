'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  highlight?: string;
  name: string;
  author: string;
  logo: StaticImageData;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevTestimonial();
      if (e.key === 'ArrowRight') nextTestimonial();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextTestimonial, prevTestimonial]);

  const renderQuote = (quote: string, highlight?: string) => {
    if (!highlight) return `"${quote}"`;

    const parts = quote.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <>
        "
        {parts.map((part, i) =>
          part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-[#c5a059] font-medium">{part}</span>
          ) : (
            part
          )
        )}
        "
      </>
    );
  };

  // Indices for left and right cards
  const leftIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
  const rightIndex = (activeIndex + 1) % testimonials.length;

  const cardVariants: Variants = {
    active: {
      x: 0,
      scale: 1,
      opacity: 1,
      zIndex: 30,
      filter: 'none',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const }
    },
    left: {
      x: '-55%',
      scale: 0.8,
      opacity: 0.2,
      zIndex: 10,
      filter: 'blur(12px)',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const }
    },
    right: {
      x: '55%',
      scale: 0.8,
      opacity: 0.2,
      zIndex: 10,
      filter: 'blur(12px)',
      transition: { duration: 0.6, ease: [0.32, 0.72, 0, 1] as const }
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
    <section className="py-32 md:py-48 bg-[#080a0f] overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 text-center"
        >
          <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 font-bold">What Our Clients Say</span>
          <h2 className="text-5xl md:text-7xl font-serif leading-tight text-white mb-2">
            Real Results,<br />
            <span className="italic text-[#c5a059]">Real Impact</span>
          </h2>
        </motion.div>

        {/* Circular Navigation Buttons - Aligned with Navbar */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[60] pointer-events-none hidden md:flex items-center justify-between px-6 md:px-12 w-full max-w-[1400px] mx-auto left-0 right-0">
          <button
            onClick={prevTestimonial}
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-300 pointer-events-auto group z-[60]"
          >
            <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
          </button>
          <button
            onClick={nextTestimonial}
            className="w-14 h-14 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-300 pointer-events-auto group z-[60]"
          >
            <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="max-w-7xl mx-auto relative h-[800px] flex items-center justify-center">

          <div className="relative w-full h-full flex items-center justify-center">
            {testimonials.map((testimonial, index) => {
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
                    if (info.offset.x < -50) nextTestimonial();
                    if (info.offset.x > 50) prevTestimonial();
                  }}
                  style={{
                    touchAction: 'pan-y',
                    WebkitFontSmoothing: 'antialiased',
                    MozOsxFontSmoothing: 'auto',
                    textRendering: 'geometricPrecision',
                    backfaceVisibility: 'visible',
                  }}
                  className="absolute w-[95%] md:w-[850px] h-[900px] md:h-[800px] bg-white/[0.03] border border-white/5 rounded-none p-6 md:p-10 lg:px-16 md:shadow-2xl flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
                >
                  {/* Large Background Quote Icon */}
                  <div className="absolute top-12 left-12 text-white/[0.03] pointer-events-none">
                    <Quote size={120} fill="currentColor" strokeWidth={0} />
                  </div>

                  <div className="relative z-10 text-center flex flex-col items-center select-none w-full max-w-4xl mx-auto px-4">
                    {/* Logo at the top */}
                    <div className="mb-6 md:mb-10 relative h-16 md:h-20 w-40 md:w-56 mx-auto">
                      <Image
                        src={testimonial.logo}
                        alt="Company Logo"
                        fill
                        className="object-contain"
                      />
                    </div>

                    <p className="text-base md:text-xl lg:text-2xl text-white font-serif font-light leading-[1.6] mb-8 md:mb-10 max-w-3xl mx-auto">
                      {renderQuote(testimonial.quote, testimonial.highlight)}
                    </p>

                    <div className="flex flex-col items-center">
                      <h3 className="text-[#c5a059] font-serif text-xl md:text-2xl mb-2">{testimonial.name}</h3>
                      <h4 className="text-white/60 font-light text-xs md:text-sm tracking-[0.2em] uppercase">{testimonial.author}</h4>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Subtle Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
        </div>
      </div>
    </section>
  );
}
