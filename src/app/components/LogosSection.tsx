'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image, { StaticImageData } from 'next/image';

// Employed By Logos
import beverlyHiltonLogo from '@/assets/images/logos/beverly-hilton.png';
import starrRestaurantsLogo from '@/assets/images/logos/starr-restaurants.png';
import equinoxHotelsLogo from '@/assets/images/logos/equinox-hotels.png';
import rokaLogo from '@/assets/images/logos/roka.png';
import zumaLogo from '@/assets/images/logos/zuma.png';
import etaruLogo from '@/assets/images/logos/etaru.png';
import inkoNitoLogo from '@/assets/images/logos/inko-nito.png';
import oblixLogo from '@/assets/images/logos/oblix.png';
import movenpickLogo from '@/assets/images/logos/movenpick.png';
import adareManorLogo from '@/assets/images/logos/adare-manor.png';
import swallowHotelsLogo from '@/assets/images/logos/swallow-hotels.png';
import principalHotelsLogo from '@/assets/images/logos/principal-hotels.png';
import waldorfAstoriaLogo from '@/assets/images/logos/waldorf-astoria.png';
import bostonHarborHotelLogo from '@/assets/images/logos/boston-harbor-hotel.png';
import etcVenuesLogo from '@/assets/images/logos/etc-venues.png';
import conveneLogo from '@/assets/images/logos/convene.png';

// Consulted With Logos
import bakanLogo from '@/assets/images/logos/bakan.png';
import support305Logo from '@/assets/images/logos/support-305.png';
import zumaConsultedLogo from '@/assets/images/logos/zuma-consulted.png';
import bxpLogo from '@/assets/images/logos/bxp.png';
import rudinLogo from '@/assets/images/logos/rudin.png';
import blaceLogo from '@/assets/images/logos/blace.png';
import residentLogo from '@/assets/images/logos/meet-resident.png';
import affectLogo from '@/assets/images/logos/affect-group.png';
import sageLogo from '@/assets/images/logos/sage-hospitality.png';
import buccamentLogo from '@/assets/images/logos/buccament.png';
import fairfieldLogo from '@/assets/images/logos/fairfield.png';
import montaukLogo from '@/assets/images/logos/montauk.png';

interface Company {
  name: string;
  logo: StaticImageData | null;
  dimensions?: string; // Optional custom dimensions
}

// Default dimensions for logos if not specified
const DEFAULT_DIMENSIONS = 'max-h-8 max-w-[100px] md:max-h-12 md:max-w-[140px]';

// Cleaned up & Consolidated Data
const EMPLOYED_BY_COMPANIES: Company[] = [
  { name: 'Mövenpick', logo: movenpickLogo },
  { name: 'Adare Manor', logo: adareManorLogo },
  { name: 'Swallow Hotels', logo: swallowHotelsLogo },
  { name: 'Principal Hotels', logo: principalHotelsLogo },
  { name: 'Waldorf Astoria', logo: waldorfAstoriaLogo, dimensions: 'max-h-10 max-w-[120px] md:max-h-14 md:max-w-[160px]' },
  { name: 'Boston Harbor Hotel', logo: bostonHarborHotelLogo, dimensions: 'max-h-10 max-w-[120px] md:max-h-14 md:max-w-[160px]' },
  { name: 'The Beverly Hilton', logo: beverlyHiltonLogo },
  { name: 'ROKA', logo: rokaLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'Zuma', logo: zumaLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'ETARU', logo: etaruLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'INKO NITO', logo: inkoNitoLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'oblix', logo: oblixLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'Starr Restaurants', logo: starrRestaurantsLogo },
  { name: 'Equinox Hotels', logo: equinoxHotelsLogo },
  { name: 'etc.venues', logo: etcVenuesLogo, dimensions: 'max-h-12 max-w-[140px] md:max-h-20 md:max-w-[200px]' }, // Adjusted to prevent layout shift
  { name: 'Convene', logo: conveneLogo }
];

const CONSULTED_WITH_COMPANIES: Company[] = [
  { name: 'BXP', logo: bxpLogo, dimensions: 'max-h-8 max-w-[90px] md:max-h-12 md:max-w-[120px]' },
  { name: 'Rudin Group', logo: rudinLogo, dimensions: 'max-h-4 max-w-[70px] md:max-h-6 md:max-w-[90px]' },
  { name: 'Zuma', logo: zumaConsultedLogo, dimensions: 'max-h-6 max-w-[70px] md:max-h-8 md:max-w-[100px]' },
  { name: 'Affect Group', logo: affectLogo, dimensions: 'max-h-5 max-w-[65px] md:max-h-7 md:max-w-[90px]' },
  { name: 'Sage Hospitality', logo: sageLogo, dimensions: 'max-h-6 max-w-[80px] md:max-h-8 md:max-w-[110px]' },
  { name: 'BLACE', logo: blaceLogo, dimensions: 'max-h-7 max-w-[70px] md:max-h-10 md:max-w-[100px]' },
  { name: 'Meet Resident', logo: residentLogo, dimensions: 'max-h-7 max-w-[120px] md:max-h-10 md:max-w-[160px]' },
  { name: 'Bakan', logo: bakanLogo, dimensions: 'max-h-7 max-w-[90px] md:max-h-10 md:max-w-[120px]' },
  { name: 'Support 305', logo: support305Logo, dimensions: 'max-h-8 max-w-[100px] md:max-h-11 md:max-w-[140px]' },
  { name: 'Fairfield', logo: fairfieldLogo },
  { name: 'Montauk', logo: montaukLogo },
  { name: 'Buccament', logo: buccamentLogo }
];

export default function LogosSection() {
  // Using 3 sets ensuring enough buffer for smooth infinite loop on all screen sizes
  const employedMarquee = [...EMPLOYED_BY_COMPANIES, ...EMPLOYED_BY_COMPANIES, ...EMPLOYED_BY_COMPANIES];
  const consultedMarquee = [...CONSULTED_WITH_COMPANIES, ...CONSULTED_WITH_COMPANIES, ...CONSULTED_WITH_COMPANIES];

  return (
    <section id="expertise" className="py-20 md:py-48 bg-[#FFF7F2] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="block text-[#c5a059] text-[10px] tracking-[0.4em] uppercase mb-6 md:mb-8 font-bold">Trusted By Industry Leaders</span>
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif text-[#181818] mb-8 leading-tight">
              Brands We've<br/>
              <span className="italic text-[#c5a059]">Supported</span>
            </h2>
          </motion.div>

          {/* Employed By Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-serif text-[#181818] mb-2">Employed By</h3>
              <div className="w-16 h-px bg-[#c5a059] mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden w-full mt-2">
              {/* Gradient overlays for fade effect - visible on all devices */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FFF7F2] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FFF7F2] to-transparent z-10"></div>
              
              <div className="flex">
                <motion.div
                  className="flex items-center gap-8 md:gap-16 flex-nowrap will-change-transform"
                  animate={{
                    x: ["-33.33%", "0%"], 
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 40, // Consistent slow speed
                      ease: "linear",
                    },
                  }}
                >
                  {employedMarquee.map((company, idx) => (
                    <div 
                      key={`employed-${idx}`} 
                      className="flex-shrink-0 flex items-center justify-center group"
                    >
                      {company.logo ? (
                        <Image 
                          src={company.logo} 
                          alt={company.name} 
                          className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${company.dimensions || DEFAULT_DIMENSIONS}`}
                        />
                      ) : (
                        <span className="text-[#181818] group-hover:text-[#c5a059] text-base md:text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Consulted With Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-serif text-[#181818] mb-2">Consulted With</h3>
              <div className="w-16 h-px bg-[#c5a059] mx-auto"></div>
            </div>
            
            <div className="relative overflow-hidden w-full mt-2">
              {/* Gradient overlays for fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#FFF7F2] to-transparent z-10"></div>
              <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#FFF7F2] to-transparent z-10"></div>
              
               <div className="flex">
                <motion.div
                  className="flex items-center gap-8 md:gap-16 flex-nowrap will-change-transform"
                  animate={{
                    x: ["-33.33%", "0%"],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 30, // Adjusted to 30s (12 items) to match speed of Employed (16 items @ 40s)
                      ease: "linear",
                    },
                  }}
                >
                  {consultedMarquee.map((company, idx) => (
                    <div 
                      key={`consulted-${idx}`} 
                      className="flex-shrink-0 flex items-center justify-center group"
                    >
                       {company.logo ? (
                        <Image 
                          src={company.logo} 
                          alt={company.name} 
                          className={`object-contain grayscale brightness-[0.3] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300 ${company.dimensions || DEFAULT_DIMENSIONS}`}
                        />
                      ) : (
                        <span className="text-[#181818] group-hover:text-[#c5a059] text-base md:text-lg font-medium tracking-wide whitespace-nowrap transition-colors duration-300">{company.name}</span>
                      )}
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
}
