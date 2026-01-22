'use client';

import React, { useState, useEffect } from 'react';
import { motion, MotionValue } from 'motion/react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

interface HeroSectionProps {
  images: StaticImageData[];
  scale: MotionValue<number>;
}

export default function HeroSection({ images, scale }: HeroSectionProps) {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  // Hero slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center">
      {/* Background Image Slideshow */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ scale }} className="w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-[#181818]/40 via-[#181818]/30 to-[#181818] z-10"></div>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: currentHeroImage === index ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={image}
                alt={`Hero ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                sizes="100vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 mt-20">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-serif font-light text-white leading-[1.1] tracking-tight mb-12 max-w-6xl">
            Simply Practical Yet Creative  <span className="text-[#c5a059] italic">Solutions</span>
          </h1>

          <Link href="/contact">
            <Button className="bg-[#c5a059] text-[#181818] hover:opacity-90 px-10 py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full">
              <span className="hidden md:inline">Schedule Your Complimentary Discovery Call</span>
              <span className="md:hidden">Schedule Free Call</span>
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
