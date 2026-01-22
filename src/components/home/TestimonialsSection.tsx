'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  image: StaticImageData;
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
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
          {testimonials.map((testimonial, index) => (
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
  );
}
