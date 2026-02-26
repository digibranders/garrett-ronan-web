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
            <span className="text-[#d4b06b] text-[0.75rem] tracking-[0.4em] uppercase font-bold block mb-8">Inquiries</span>
            <a href="mailto:garrett@GKRHospitality.com" className="text-4xl md:text-6xl font-serif text-white hover:text-[#d4b06b] transition-colors leading-none block mb-2">
              Start a<br />Conversation
            </a>
          </div>

          {/* Office */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white font-serif text-xl mb-6">Office</h4>
            <address className="text-stone-300 text-[0.75rem] leading-relaxed not-italic">
              450 Park Avenue South, (Floor 1)<br />
              New York, NY 10016<br />
              USA
            </address>
            <div className="mt-8">
              <a href="mailto:Connect@GKRHospitality.com" className="text-stone-300 hover:text-[#d4b06b] text-[0.75rem] transition-colors">
                connect@GKRHospitality.com
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h4 className="text-white font-serif text-xl mb-6">Connect</h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/garrettronan/" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-[#d4b06b] text-[0.75rem] uppercase tracking-widest transition-colors" aria-label="Visit our LinkedIn profile">LinkedIn</a>
              <a href="https://x.com/gkronan" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-[#d4b06b] text-[0.75rem] uppercase tracking-widest transition-colors" aria-label="Follow us on X">X</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <Image src={logoImage} alt="GKR" className="h-8 w-auto brightness-0 invert" />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[0.75rem] uppercase tracking-[0.2em] text-stone-400 font-bold text-center md:text-right">
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>© 2025 GKR Consulting</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
