'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

interface Project {
  title: string;
  image: StaticImageData | string;
}

interface PortfolioSectionProps {
  projects: Project[];
}

export default function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
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
            Proven Excellence<br />
            <span className="italic text-[#c5a059]">Across All Hospitality Ventures</span>
          </h2>
          <p className="text-stone-400 text-base md:text-lg mt-6 whitespace-nowrap">
            <span className="font-serif italic">"Experience is simply the name we give our mistakes"</span> ~ Let us help correct yor experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
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
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
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
  );
}
