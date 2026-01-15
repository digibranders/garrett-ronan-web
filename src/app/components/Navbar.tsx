'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '@/assets/images/logos/gkr-logo.png';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NAV_ITEMS = [
    { label: 'Philosophy', href: '/#philosophy' },
    { label: 'Expertise', href: '/#expertise' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' }
  ];

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#181818]/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-lg' : 'bg-[#181818]/60 backdrop-blur-md py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Link href="/"><img src={logoImage.src} alt="GKR" className={`object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'} brightness-0 invert`} /></Link>
          </div>
          
          <div className="hidden md:flex items-center gap-16">
            <div className="flex gap-16">
              {NAV_ITEMS.map((item, i) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="text-[10px] uppercase tracking-[0.3em] font-medium text-stone-300 hover:text-[#c5a059] transition-colors relative group"
                >
                  <span className="text-[#c5a059] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -left-6">0{i+1}</span>
                  {item.label}
                </Link>
              ))}
            </div>
            
            <Link href="/contact">
              <Button 
                className="bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#181818] rounded-full px-8 py-6 tracking-[0.2em] text-[10px] font-bold transition-all duration-500"
              >
                CONTACT US
              </Button>
            </Link>
          </div>

          <button 
            className="md:hidden text-white hover:text-[#c5a059] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={28} strokeWidth={1} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#181818] flex flex-col justify-center items-center"
          >
            <button 
              className="absolute top-8 right-6 text-white hover:text-[#c5a059] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <div className="relative w-8 h-8 flex flex-col justify-center items-center gap-2">
                <span className="w-full h-[1px] bg-current rotate-45 absolute"></span>
                <span className="w-full h-[1px] bg-current -rotate-45 absolute"></span>
              </div>
            </button>
            
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col gap-8 text-center"
            >
              <Link 
                href="/" 
                className="text-xl font-light tracking-[0.2em] hover:text-[#c5a059] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[#c5a059] mr-3">00</span> Home
              </Link>
              {NAV_ITEMS.map((item, i) => (
                <Link 
                  key={item.label}
                  href={item.href} 
                  className="text-xl font-light tracking-[0.2em] hover:text-[#c5a059] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="text-[#c5a059] mr-3">0{i+1}</span> {item.label}
                </Link>
              ))}
              <Link 
                href="/contact" 
                className="text-xl font-light tracking-[0.2em] hover:text-[#c5a059] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="text-[#c5a059] mr-3">0{NAV_ITEMS.length + 1}</span> Contact
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
