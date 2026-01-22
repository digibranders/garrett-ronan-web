'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function CTASection() {
  return (
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
  );
}
