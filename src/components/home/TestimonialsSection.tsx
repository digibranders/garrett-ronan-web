'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  quote: string;
  highlight?: string;
  author: string;
  company: string;
  image: StaticImageData;
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
      filter: 'blur(0px)',
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

        <div className="max-w-7xl mx-auto relative h-[700px] flex items-center justify-center">

          {/* Circular Navigation Buttons - Aligned with Navbar */}
          <div className="absolute inset-0 z-50 pointer-events-none flex items-center">
            <div className="container mx-auto px-6 md:px-12 flex justify-between w-full">
              <button
                onClick={prevTestimonial}
                className="w-14 h-14 rounded-none border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500 pointer-events-auto group"
              >
                <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-1" />
              </button>
              <button
                onClick={nextTestimonial}
                className="w-14 h-14 rounded-none border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#c5a059] hover:border-[#c5a059] transition-all duration-500 pointer-events-auto group"
              >
                <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

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
                  className="absolute w-[95%] md:w-[850px] bg-white/[0.03] border border-white/5 rounded-none p-8 md:p-16 lg:px-20 lg:py-20 shadow-2xl backdrop-blur-md flex flex-col items-center justify-center"
                >
                  {/* Large Background Quote Icon */}
                  <div className="absolute top-12 left-12 text-white/[0.03] pointer-events-none">
                    <Quote size={120} fill="currentColor" strokeWidth={0} />
                  </div>

                  <div className="relative z-10 text-center flex flex-col items-center select-none">
                    <p className="text-lg md:text-2xl lg:text-2xl text-white font-serif font-light leading-[1.6] mb-12 max-w-2xl px-4">
                      {renderQuote(testimonial.quote, testimonial.highlight)}
                    </p>

                    <div className="flex flex-col items-center">
                      {/* Avatar inside card for context */}
                      <div className="w-16 h-16 rounded-none overflow-hidden border-2 border-[#c5a059] mb-6 shadow-xl">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <h4 className="text-white font-medium text-lg tracking-[0.1em] uppercase">{testimonial.author}</h4>
                      <div className="w-6 h-[1px] bg-white/20 my-4"></div>
                      <p className="text-stone-500 text-[10px] uppercase tracking-[0.3em] font-bold">{testimonial.company}</p>
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
