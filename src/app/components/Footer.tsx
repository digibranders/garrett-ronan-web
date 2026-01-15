import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/images/logos/gkr-logo.png';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#181818] pt-32 pb-12 px-6 md:px-12 border-t border-white/5 font-sans">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
          {/* Inquiries */}
          <div className="md:col-span-5">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">Inquiries</span>
            <a href="mailto:garrett@GKRHospitality.com" className="text-4xl md:text-6xl font-serif text-white hover:text-[#c5a059] transition-colors leading-none block mb-2">
              Start a<br/>Conversation
            </a>
          </div>
          
          {/* Office */}
          <div className="md:col-span-3 md:col-start-7">
             <h4 className="text-white font-serif text-xl mb-6">Office</h4>
             <address className="text-stone-500 text-sm leading-relaxed not-italic">
               42 Brighton View Rd<br/>
               Fairfield, CT, 06824<br/>
               USA
             </address>
             <div className="mt-8">
               <a href="mailto:garrett@GKRHospitality.com" className="text-stone-500 hover:text-[#c5a059] text-sm transition-colors">
                 garrett@GKRHospitality.com
               </a>
             </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
             <h4 className="text-white font-serif text-xl mb-6">Connect</h4>
             <div className="flex flex-col gap-4">
               <a href="https://www.linkedin.com/in/garrettronan/" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">LinkedIn</a>
               <a href="https://x.com/gkronan" target="_blank" rel="noopener noreferrer" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">X</a>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <img src={logoImage.src} alt="GKR" className="h-8 brightness-0 invert opacity-30" />
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <span>© 2025 GKR Consulting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
