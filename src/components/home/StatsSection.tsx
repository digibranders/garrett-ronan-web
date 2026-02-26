'use client';

import React from 'react';
import { motion } from 'motion/react';
import { AnimatedCounter } from './AnimatedCounter';
import { StaticImageData } from 'next/image';

interface StatsSectionProps {
  backgroundImage: StaticImageData;
}

const stats = [
  { end: 30, suffix: "+", label: "Years Experience" },
  { end: 50, suffix: "+", label: "Properties Transformed" },
  { end: 100, suffix: "%", label: "Delivery", isStatic: true },
  { end: 0, suffix: "%", label: "Fluff", isStatic: true },
];

export default function StatsSection({ backgroundImage }: StatsSectionProps) {
  return (
    <section className="py-24 md:py-32 bg-[#1e2a3a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{ 
            backgroundImage: `url(${backgroundImage.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-7xl font-serif text-[#c5a059] mb-4">
                {stat.isStatic ? (
                  <>
                    {stat.end}
                    <span className="text-3xl">{stat.suffix}</span>
                  </>
                ) : (
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                )}
              </div>
              <p className="text-stone-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
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
            {["New York", "Los Angeles", "Miami", "Boston", "Las Vegas", "Charleston", "Dublin", "London", "Barbados"].map((market, index, array) => (
              <React.Fragment key={market}>
                <span className="text-2xl md:text-3xl font-serif text-white">{market}</span>
                {index < array.length - 1 && <span className="text-[#c5a059]">•</span>}
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
