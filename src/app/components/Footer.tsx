import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/images/logos/gkr-logo.png';

export default function Footer() {
  return (
    <footer className="bg-[#181818] py-20 border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
             <Link href="/"><Image src={logoImage} alt="GKR" className="h-10 mb-8 brightness-0 invert opacity-80" /></Link>
            <p className="text-stone-500 text-sm leading-relaxed mb-8">
              Elevating hospitality through operational excellence, strategic vision, and data-driven results.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Company</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><Link href="/about" className="hover:text-[#c5a059] transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-[#c5a059] transition-colors">Our Services</Link></li>
              <li><Link href="/#portfolio" className="hover:text-[#c5a059] transition-colors">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-[#c5a059] transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Services</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><Link href="/services" className="hover:text-[#c5a059] transition-colors">Operational Management</Link></li>
              <li><Link href="/services" className="hover:text-[#c5a059] transition-colors">Concept Development</Link></li>
              <li><Link href="/services" className="hover:text-[#c5a059] transition-colors">Financial Advisory</Link></li>
              <li><Link href="/services" className="hover:text-[#c5a059] transition-colors">Staff Training</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-bold mb-8">Connect</h4>
            <ul className="space-y-4 text-sm text-stone-500">
              <li><a href="mailto:info@gkrhospitality.com" className="hover:text-[#c5a059] transition-colors">info@gkrhospitality.com</a></li>
              <li><Link href="/contact" className="hover:text-[#c5a059] transition-colors">Schedule a Call</Link></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-[#c5a059] transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5">
          <div className="flex items-center gap-4 mb-4 md:mb-0">
             <Image src={logoImage} alt="GKR" className="h-8 brightness-0 invert opacity-30" />
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <span className="opacity-50">© 2024 GKR Hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
