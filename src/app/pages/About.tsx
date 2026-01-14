import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Check } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';

// Logo Import
import logoImage from '@/assets/54b647c778f17f42e409842f22c6c7a9bd32e88b.png';
// Garrett Ronan image
import garrettImage from '@/assets/8b22683487875a05efdeee606ad84a804e5a1a39.png';
// Garrett signature
import signatureImage from '@/assets/20c675535d82a89752da6e76ff1752bde1939d77.png';

const ABOUT_IMAGES = {
  founder: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbnxlbnwxfHx8fDE3NjgxODkwMzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  hotel: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2ODI0NTIzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  restaurant: "https://images.unsplash.com/photo-1685040235380-a42a129ade4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY4MjE0MTM5fDA&ixlib=rb-4.1.0&q=80&w=1080"
};

const EXPERIENCE_TIMELINE = [
  { role: "COO", company: "BLACE", description: "Tech-enabled event marketplace, NYC & LA" },
  { role: "US COO", company: "etc.venues", description: "Launched NYC market, opened 3 venues, guided merger with Convene" },
  { role: "VP Operations & Development", company: "Starr Restaurants", description: "Oversaw F&B and events for Equinox Hotel, Hudson Yards" },
  { role: "VP Operations & Development", company: "Azumi/Zuma", description: "Directed multi-city U.S. expansion across 6 major markets" },
  { role: "Senior Leadership", company: "Premium Hospitality", description: "Waldorf Astoria, The Beverly Hilton, Boston Harbor Hotel, Principal Hotels UK, Adare Manor, Mövenpick" },
];

const SERVICES_LIST = [
  "Finance, capital, and accounting",
  "Legal coordination support",
  "Design, development, and construction management",
  "Vendor and supply chain planning",
  "Real estate, market analysis, and site sourcing",
  "Deal support and negotiations",
  "HR and labor support (recruiting, training, compliance, unions, wage-and-hour, tips and gratuities, benefits)",
  "Operations, sales, and marketing",
  "Travel and tour planning",
  "Fractional COO and C-suite support",
  "Startup and pre-opening support",
  "M&A support"
];

export default function About() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${scrolled ? 'bg-[#181818]/95 backdrop-blur-xl py-4 border-b border-white/10 shadow-lg' : 'bg-[#181818]/60 backdrop-blur-md py-8'}`}>
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-4">
             <Link to="/"><img src={logoImage} alt="GKR" className={`object-contain transition-all duration-500 ${scrolled ? 'h-10' : 'h-14'} brightness-0 invert`} /></Link>
          </div>
          
          <div className="hidden md:flex items-center gap-16">
            {[
              { label: 'Philosophy', href: '/#philosophy' },
              { label: 'Expertise', href: '/#expertise' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' }
            ].map((item, i) => (
              item.href.startsWith('/#') ? (
                <a key={item.label} href={item.href} className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-[#c5a059] transition-colors relative group">
                  <span className="text-[#c5a059] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{i+1}</span>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} className="text-[10px] uppercase tracking-[0.3em] font-medium hover:text-[#c5a059] transition-colors relative group">
                  <span className="text-[#c5a059] mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">0{i+1}</span>
                  {item.label}
                </Link>
              )
            ))}
          </div>

          <Link to="/contact">
            <Button className="hidden md:flex bg-transparent border border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-[#181818] rounded-full px-8 py-6 tracking-[0.2em] text-[10px] font-bold transition-all duration-500">
              CONTACT US
            </Button>
          </Link>
          
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: mobileMenuOpen ? 1 : 0,
            height: mobileMenuOpen ? 'auto' : 0
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-8 space-y-6">
            {[
              { label: 'Philosophy', href: '/#philosophy' },
              { label: 'Expertise', href: '/#expertise' },
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' }
            ].map((item, i) => (
              item.href.startsWith('/#') ? (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.3em] font-medium text-white hover:text-[#c5a059] transition-colors py-2"
                >
                  <span className="text-[#c5a059] mr-3">0{i+1}</span>
                  {item.label}
                </a>
              ) : (
                <Link 
                  key={item.label} 
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-sm uppercase tracking-[0.3em] font-medium text-white hover:text-[#c5a059] transition-colors py-2"
                >
                  <span className="text-[#c5a059] mr-3">0{i+1}</span>
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-48 pb-8 md:pb-32">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">About Us</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-white leading-[1.1] mb-12 max-w-6xl">
              Real Operators,<br/>
              <span className="italic text-[#c5a059]">GKR Hospitality</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-8 md:py-24 bg-[#181818]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <motion.div 
              className="lg:col-span-5"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="aspect-[3/4] overflow-hidden rounded-sm mb-8">
                  <img src={garrettImage} alt="Garrett Ronan" className="w-full h-full object-cover" />
                </div>
                <div className="border-l-2 border-[#c5a059] pl-6">
                  <p className="text-[#c5a059] text-xs uppercase tracking-[0.3em] mb-2">Founder</p>
                  <img src={signatureImage} alt="Garrett Ronan signature" className="h-16 mb-4" />
                  <p className="text-stone-400 text-sm">30+ years of operational leadership in premium hospitality</p>
                </div>
              </div>
            </motion.div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-2xl md:text-3xl font-serif text-stone-300 leading-relaxed mb-8">
                  GKR Hospitality Consulting was founded by Garrett Ronan after 30 years of running hotels, restaurants, and hospitality venues—often in situations where failure wasn't an option.
                </p>

                <div className="space-y-6 text-stone-400 leading-relaxed">
                  <p>
                    We've been the operator responsible for opening Zuma across six U.S. cities. The COO who had to stabilize a tech-enabled venue marketplace across NYC and LA. The VP of Operations who launched etc.venues in New York and guided it through a merger. The leader who made sure Equinox Hotel's F&B operation matched the brand's premium positioning from day one.
                  </p>

                  <p className="text-white text-lg font-serif italic border-l-2 border-[#c5a059] pl-6 py-2">
                    We started this firm because we got tired of watching consultants write reports that never get implemented.
                  </p>

                  <p>
                    Hospitality doesn't need more theory. It needs operators who've done the work—who know what it feels like when your opening is 90 days away and you're not ready, when your team can't execute, when you're busy but losing money.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 md:py-32 bg-[#080a0f]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-16">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">30+ Years</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-6">The Experience That<br/>Built This Firm</h2>
          </div>

          <div className="space-y-1">
            {EXPERIENCE_TIMELINE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border-l-2 border-white/10 hover:border-[#c5a059] transition-all duration-300 pl-8 py-6"
              >
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 md:gap-8">
                  <div className="flex-1">
                    <h4 className="text-xl md:text-2xl font-serif text-white group-hover:text-[#c5a059] transition-colors">
                      {exp.role}
                    </h4>
                    <p className="text-[#c5a059] text-sm uppercase tracking-wider mt-1">{exp.company}</p>
                  </div>
                  <p className="text-stone-400 text-sm md:text-base md:max-w-md">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-16 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Education & Background</h4>
              <p className="text-stone-400 leading-relaxed">
                Graduate of Shannon College of Hotel Management. Career started in Switzerland and UK before moving to New York in 1998.
              </p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-4">Industry Involvement</h4>
              <p className="text-stone-400 leading-relaxed">
                Active member of HSMAI. Board member, NYC Hospitality Alliance—supporting advocacy and policy work for the industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - NOW LIGHT */}
      <section className="py-24 md:py-32 bg-[#FFF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-20">
            <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-4">Our Approach</span>
            <h2 className="text-4xl md:text-6xl font-serif text-[#181818]">What Makes Us Different</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Full Life-Cycle Support */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border border-[#181818]/10 p-8 hover:border-[#c5a059] hover:bg-white transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-4">
                  <span className="text-[#c5a059] text-xl font-serif">01</span>
                </div>
                <h3 className="text-2xl font-serif text-[#181818] mb-4">Full Life-Cycle Support</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                We can support you from early concept and business planning through feasibility, site sourcing, build-out, opening, and performance improvement. This keeps decisions aligned and reduces costly handoffs.
              </p>
            </motion.div>

            {/* Cross-Functional Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="border border-[#181818]/10 p-8 hover:border-[#c5a059] hover:bg-white transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-4">
                  <span className="text-[#c5a059] text-xl font-serif">02</span>
                </div>
                <h3 className="text-2xl font-serif text-[#181818] mb-4">Cross-Functional Expertise in One Place</h3>
              </div>
              <p className="text-stone-600 leading-relaxed mb-6">
                We bring coordinated support across the areas that most often slow projects down or impact margins:
              </p>
              <div className="space-y-2">
                {SERVICES_LIST.slice(0, 6).map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                    <span className="text-stone-600 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Flexible Engagement Model */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="border border-[#181818]/10 p-8 hover:border-[#c5a059] hover:bg-white transition-all duration-500"
            >
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full border-2 border-[#c5a059] flex items-center justify-center mb-4">
                  <span className="text-[#c5a059] text-xl font-serif">03</span>
                </div>
                <h3 className="text-2xl font-serif text-[#181818] mb-4">Flexible Engagement Model</h3>
              </div>
              <p className="text-stone-600 leading-relaxed">
                Choose à la carte support or an end-to-end engagement based on your stage, priorities, and internal capacity.
              </p>
            </motion.div>
          </div>

          {/* Complete Services List */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 pt-16 border-t border-[#181818]/10"
          >
            <h3 className="text-2xl font-serif text-[#181818] mb-8">Complete Service Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICES_LIST.slice(6).map((service, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#c5a059] flex-shrink-0 mt-0.5" />
                  <span className="text-stone-600 text-sm">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 md:py-48 bg-[#c5a059] relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-serif text-[#181818] mb-8 leading-tight">
              Ready to Build Something<br/>
              <span className="italic text-white">Exceptional?</span>
            </h2>
            <p className="text-[#181818] text-lg mb-12 max-w-2xl mx-auto">
              Let's discuss how we can support your hospitality vision
            </p>
            <Link to="/contact">
              <Button className="bg-[#181818] text-white hover:bg-white hover:text-[#181818] px-12 py-7 text-sm uppercase tracking-[0.3em] font-bold transition-all duration-500">
                <span className="hidden md:inline">Schedule Your Free Diagnostic Call</span>
                <span className="md:hidden">Schedule Free Call</span>
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#181818] pt-32 pb-12 px-6 md:px-12 border-t border-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-32">
            <div className="md:col-span-5">
              <span className="text-[#c5a059] text-[10px] tracking-[0.4em] uppercase font-bold block mb-8">Inquiries</span>
              <a href="mailto:garrett@GKRHospitality.com" className="text-4xl md:text-6xl font-serif text-white hover:text-[#c5a059] transition-colors leading-none block mb-2">
                Start a<br/>Conversation
              </a>
            </div>
            
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

            <div className="md:col-span-3">
               <h4 className="text-white font-serif text-xl mb-6">Connect</h4>
               <div className="flex flex-col gap-4">
                 <a href="https://www.linkedin.com/in/garrettronan/" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">LinkedIn</a>
                 <a href="https://x.com/gkronan" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">X</a>
                 {/* <a href="#" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">Behance</a> */}
               </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-end pt-8 border-t border-white/5">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
               <img src={logoImage} alt="GKR" className="h-8 brightness-0 invert opacity-30" />
            </div>
            <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-stone-600 font-bold">
               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
               <span>© 2026 GKR Consulting</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}