import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import logoImage from '@/assets/54b647c778f17f42e409842f22c6c7a9bd32e88b.png';

const SERVICES_DATA = [
  {
    number: "01",
    title: "Concept Creation",
    tagline: "Turning ideas into viable, market-ready concepts.",
    description: [
      "Ideation and early-stage concept development",
      "Concept inception and positioning",
      "Structured brainstorming and refinement",
      "Market research and competitive analysis",
      "Market and site identification and sourcing"
    ],
    image: "https://images.unsplash.com/photo-1759472659432-3232e42d04d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGNvbmNlcHQlMjBkZXNpZ258ZW58MXx8fHwxNzY4MjgyNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "02",
    title: "Capital & Growth Investment",
    tagline: "Supporting smart growth with the right capital strategy.",
    description: [
      "Growth capital and investment sourcing",
      "Mergers and acquisitions support",
      "Business planning and investor-ready models"
    ],
    image: "https://images.unsplash.com/photo-1758519289559-f4d0ead39634?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGludmVzdG1lbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc2ODI4Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "03",
    title: "Design, Development & Construction",
    tagline: "Design that looks right and works operationally.",
    description: [
      "Conceptual design briefing aligned to client and tenant needs",
      "Schematic design coordination with design and consultant teams",
      "Value engineering reviews to protect budgets and functionality",
      "Contract review and risk assessment",
      "Design development and style narrative definition",
      "RFP and bidding process management",
      "Construction documentation and approvals",
      "End-to-end project management",
      "Change order review and cost control",
      "Coordination of lighting, AV, FF&E, and specialty elements"
    ],
    image: "https://images.unsplash.com/photo-1632189436851-891de082e5d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBjb25zdHJ1Y3Rpb24lMjBkZXNpZ258ZW58MXx8fHwxNzY4MjgyNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "04",
    title: "Operations",
    tagline: "Building operations that perform under real conditions.",
    description: [
      "Pre-opening planning and operational standards creation",
      "Launch and opening support",
      "Post-opening stabilization",
      "Day-to-day operational leadership and advisory",
      "SOP creation, review, and implementation",
      "Full operational audits, including secret shops",
      "Sales and marketing strategy and execution",
      "Revenue management and performance optimization",
      "HR, recruitment, and team development",
      "Labor relations, collective bargaining, and union negotiations",
      "Logistics and procurement",
      "F&B menu planning, design, costing, and performance analysis"
    ],
    image: "https://images.unsplash.com/photo-1762113246607-4299ec3f3214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwa2l0Y2hlbiUyMG9wZXJhdGlvbnN8ZW58MXx8fHwxNzY4MjgyNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "05",
    title: "Legal",
    tagline: "Practical legal oversight for hospitality operations.",
    description: [
      "Lease review and negotiations",
      "Licensing and permitting",
      "Contract review and negotiations",
      "Employment and labor support"
    ],
    image: "https://images.unsplash.com/photo-1759429255330-51145b170dad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGNvbnRyYWN0JTIwZG9jdW1lbnRzfGVufDF8fHx8MTc2ODI4Mjc4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "06",
    title: "Financial",
    tagline: "Clear financial control and accountability.",
    description: [
      "Project and operational budgeting and forecasting",
      "Full and partial financial audits",
      "Cost analysis and control systems",
      "Profitability and performance analysis",
      "M&A financial support",
      "Sale and exit preparation",
      "Business dissolution support"
    ],
    image: "https://images.unsplash.com/photo-1744473119469-905016183836?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBhbmFseXNpcyUyMGNoYXJ0c3xlbnwxfHx8fDE3NjgyNzI1NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    number: "07",
    title: "Additional Support",
    tagline: "Specialized support tailored to unique project or operational needs.",
    description: [],
    image: "https://images.unsplash.com/photo-1583231686115-9460ba8e0562?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3NwaXRhbGl0eSUyMHNlcnZpY2V8ZW58MXx8fHwxNzY4MjgyNzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [expandedService, setExpandedService] = useState<number | null>(null);
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

      {/* Hero Section - NOW LIGHT */}
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 bg-[#FFF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">What We Offer</span>
            <h1 className="text-6xl md:text-8xl font-serif font-light text-[#181818] leading-[0.9] tracking-tight mb-8">
              Comprehensive<br/>
              <span className="italic text-[#c5a059]">Hospitality Solutions</span>
            </h1>
            <p className="text-stone-600 text-xl max-w-3xl leading-relaxed">
              From concept to operations, we provide integrated support across every phase of your hospitality journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-[#181818]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="space-y-0">
            {SERVICES_DATA.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border-b border-white/10 last:border-0"
              >
                <div 
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-16 md:py-20 cursor-pointer group"
                  onClick={() => setExpandedService(expandedService === index ? null : index)}
                >
                  {/* Image Column */}
                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] overflow-hidden rounded-sm relative">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-60"></div>
                      <div className="absolute bottom-8 left-8">
                        <span className="text-[#c5a059] text-7xl font-serif">{service.number}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    <div className="border-l-2 border-[#c5a059] pl-8">
                      <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 group-hover:text-[#c5a059] transition-colors duration-300">
                        {service.title}
                      </h2>
                      <p className="text-stone-400 text-lg md:text-xl mb-8 leading-relaxed">
                        {service.tagline}
                      </p>

                      {/* Expandable List */}
                      {service.description.length > 0 && (
                        <motion.div
                          initial={false}
                          animate={{ 
                            height: expandedService === index ? 'auto' : 0,
                            opacity: expandedService === index ? 1 : 0 
                          }}
                          transition={{ duration: 0.4 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 mb-6">
                            {service.description.map((item, i) => (
                              <li key={i} className="text-stone-500 text-sm flex items-start gap-3">
                                <span className="text-[#c5a059] mt-1 flex-shrink-0">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}

                      <button className="flex items-center gap-2 text-[#c5a059] text-xs uppercase tracking-[0.3em] font-bold group-hover:gap-4 transition-all duration-300">
                        {expandedService === index ? 'Show Less' : 'Learn More'}
                        <ArrowUpRight className={`w-4 h-4 transition-transform duration-300 ${expandedService === index ? 'rotate-180' : ''}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Discuss<br/>
              <span className="italic text-white">Your Project?</span>
            </h2>
            <p className="text-[#181818] text-lg mb-12 max-w-2xl mx-auto">
              Let's explore how our services can support your hospitality vision
            </p>
            <Link to="/contact">
              <Button className="bg-[#181818] text-white hover:bg-white hover:text-[#181818] px-12 py-7 text-sm uppercase tracking-[0.3em] font-bold transition-all duration-500">
                Start a Conversation
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
                 <a href="https://x.com/gkronan/" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">X</a>
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