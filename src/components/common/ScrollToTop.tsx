'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[100] p-3 bg-[#c5a059] text-[#181818] rounded-full cursor-pointer shadow-lg hover:bg-[#d4b06a] focus:outline-none focus-visible:outline-2 focus-visible:outline-[#c5a059] focus-visible:outline-offset-4 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} strokeWidth={2} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
