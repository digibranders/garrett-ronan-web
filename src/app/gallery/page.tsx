'use client';

import { useState, useCallback, useEffect } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

// Mock Data
const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Modern Hotel Lobby',
    description: 'A luxurious and welcoming lobby design that sets the tone for the guest experience. Featuring warm lighting and contemporary furniture.',
    link: 'https://examples.com/project-1',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 2,
    title: 'Minimalist Bedroom',
    description: 'A serene bedroom retreat designed for relaxation, utilizing a neutral color palette and natural materials.',
    link: 'https://examples.com/project-2',
    images: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1616594039964-40891a91395b?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 3,
    title: 'Tropical Resort Pool',
    description: 'An infinity pool overlooking the ocean, designed to blend seamlessly with the surrounding tropical landscape.',
    link: 'https://examples.com/project-3',
    images: [
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1572331165267-854da2dc72af?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 4,
    title: 'Fine Dining Restaurant',
    description: 'An elegant dining space with custom lighting fixtures and bespoke furniture, creating an intimate atmosphere.',
    link: 'https://examples.com/project-4',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 5,
    title: 'Cozy Cafe Corner',
    description: 'A charming cafe interior maximizing small spaces with clever seating arrangements and vibrant decor.',
    link: 'https://examples.com/project-5',
    images: [
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 6,
    title: 'Urban Loft Kitchen',
    description: 'A modern industrial kitchen design featuring exposed brick, stainless steel appliances, and open shelving.',
    link: 'https://examples.com/project-6',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop'
    ]
  },
  {
    id: 7,
    title: 'Boutique Retail Space',
    description: 'A retail environment focused on product storytelling, with custom displays and directed lighting.',
    link: 'https://examples.com/project-7',
    images: [
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop'
    ]
  },
   {
    id: 8,
    title: 'Corporate Office Lounge',
    description: 'A collaborative workspace lounge designed to foster creativity and informal meetings.',
    link: 'https://examples.com/project-8',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1200&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1200&auto=format&fit=crop'
    ]
  },
];

export default function GalleryPage() {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const selectedItem = selectedItemIndex !== null ? GALLERY_ITEMS[selectedItemIndex] : null;

  // Reset image index when a new item is selected
  useEffect(() => {
    if (selectedItemIndex !== null) {
      setCurrentImageIndex(0);
    }
  }, [selectedItemIndex]);

  const handleNextImage = useCallback(() => {
    if (!selectedItem) return;
    setCurrentImageIndex((prev) => 
      (prev + 1) % selectedItem.images.length
    );
  }, [selectedItem]);

  const handlePreviousImage = useCallback(() => {
    if (!selectedItem) return;
    setCurrentImageIndex((prev) => 
      (prev - 1 + selectedItem.images.length) % selectedItem.images.length
    );
  }, [selectedItem]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedItemIndex === null) return;
      
      if (e.key === 'ArrowRight') {
        handleNextImage();
      } else if (e.key === 'ArrowLeft') {
        handlePreviousImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItemIndex, handleNextImage, handlePreviousImage]);

  return (
    <div className="min-h-screen bg-[#141414] text-white pt-32 pb-20 px-6 md:px-12">
      <div className="container mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-left mb-16"
        >
          <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Portfolio</span>
          <h1 className="text-6xl md:text-8xl font-serif font-light text-white leading-[0.9] tracking-tight mb-8">
            Selected<br/>
            <span className="italic text-[#c5a059]">Works</span>
          </h1>
          <p className="text-stone-400 text-xl max-w-3xl leading-relaxed">
            A curated selection of our finest hospitality projects, showcasing our commitment to design excellence and practical innovation.
          </p>
        </motion.div>

        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter="20px">
            {GALLERY_ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group cursor-pointer overflow-hidden"
                onClick={() => setSelectedItemIndex(index)}
              >
                <img
                  src={item.images[0]} // Display first image as cover
                  alt={item.title}
                  className="w-full h-auto object-cover transition-all duration-700 ease-in-out transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white tracking-[0.2em] uppercase text-sm border border-white/30 px-6 py-3 backdrop-blur-sm">View Case Study</span>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
        
        <DialogPrimitive.Root open={selectedItemIndex !== null} onOpenChange={(open) => !open && setSelectedItemIndex(null)}>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
            <DialogPrimitive.Content className="fixed inset-0 z-50 w-screen h-screen bg-[#181818] p-0 shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 overflow-y-auto md:overflow-hidden md:grid md:grid-cols-2 gap-0">
              
              {/* Close Button */}
              <DialogPrimitive.Close className="absolute right-6 top-6 z-50 ring-offset-background transition-all hover:scale-110 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground p-2 bg-black/20 hover:bg-black/40 text-white rounded-full">
                <X className="h-6 w-6" />
                <span className="sr-only">Close</span>
              </DialogPrimitive.Close>
              
              {/* Left Side: Image & Navigation */}
              <div className="sticky top-0 z-0 h-[40vh] md:static md:h-full w-full bg-black flex items-center justify-center overflow-hidden group/image shrink-0">
                {selectedItem && (
                  <>
                   <AnimatePresence mode="wait">
                    <motion.img
                        key={`${selectedItem.id}-${currentImageIndex}`}
                        src={selectedItem.images[currentImageIndex]}
                        alt={`${selectedItem.title} - Image ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full object-cover"
                      />
                   </AnimatePresence>

                    {/* Navigation Buttons for Desktop (Absolute Overlays) */}
                    {selectedItem.images.length > 1 && (
                      <>
                        <button 
                          onClick={(e) => { e.stopPropagation(); handlePreviousImage(); }}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/60 text-white hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
                          aria-label="Previous image"
                        >
                          <ChevronLeft size={32} strokeWidth={1} />
                        </button>
                        
                        <button 
                          onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/20 hover:bg-black/60 text-white hover:text-white rounded-full transition-all duration-300 backdrop-blur-sm hidden md:flex"
                          aria-label="Next image"
                        >
                          <ChevronRight size={32} strokeWidth={1} />
                        </button>
                        
                        {/* Image Counter Indicator */}
                        <div className="hidden md:block absolute bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/40 backdrop-blur-md rounded-full text-xs font-medium tracking-widest text-white/80">
                          {currentImageIndex + 1} / {selectedItem.images.length}
                        </div>
                      </>
                    )}
                  </>
                )}
              </div>

              {/* Right Side: Content */}
              <div className="relative z-10 bg-[#181818] flex flex-col justify-center p-8 md:p-12 space-y-6 md:h-full md:overflow-y-auto min-h-[60vh]">
                 {selectedItem && (
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                  >
                    <h2 className="text-3xl md:text-4xl font-light uppercase tracking-[0.15em] text-white">
                      {selectedItem.title}
                    </h2>
                    <div className="w-12 h-[1px] bg-[#c5a059] my-6"></div>
                    <p className="text-stone-400 leading-relaxed font-light text-sm md:text-base">
                      {selectedItem.description}
                    </p>
                    
                    <div className="pt-6 flex gap-4 items-center">
                      <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">
                         <Button className="bg-[#c5a059] text-[#181818] hover:bg-[#b08d4a] uppercase tracking-[0.2em] px-8 py-6 rounded-none font-bold text-xs flex items-center gap-2">
                           Learn More <ExternalLink size={16} />
                         </Button>
                      </a>
                    </div>
                  </motion.div>
                 )}
                 
                 {/* Mobile Navigation controls at bottom of content */}
                 {selectedItem && selectedItem.images.length > 1 && (
                   <div className="md:hidden flex justify-between w-full mt-8 pt-6 border-t border-white/10">
                      <Button 
                        onClick={handlePreviousImage}
                        variant="ghost" 
                        className="text-stone-400 hover:text-white hover:bg-white/5 uppercase tracking-widest text-xs flex gap-2"
                      >
                        <ChevronLeft size={16} /> Previous
                      </Button>
                      <span className="text-xs text-stone-500 self-center tracking-widest">
                        {currentImageIndex + 1} / {selectedItem.images.length}
                      </span>
                      <Button 
                        onClick={handleNextImage}
                        variant="ghost" 
                        className="text-stone-400 hover:text-white hover:bg-white/5 uppercase tracking-widest text-xs flex gap-2"
                      >
                        Next <ChevronRight size={16} /> 
                      </Button>
                   </div>
                 )}
              </div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      </div>
    </div>
  );
}
