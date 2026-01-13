import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Link } from 'react-router-dom';
import logoImage from 'figma:asset/54b647c778f17f42e409842f22c6c7a9bd32e88b.png';

const FAQ_DATA = [
  {
    question: "How quickly can you start?",
    answer: "For operational consulting and revenue work, typically 2-4 weeks. For concept-to-opening projects, the earlier you involve us, the better—ideally 12+ months before opening."
  },
  {
    question: "Do you work remotely or on-site?",
    answer: "Primarily on-site. Hospitality operations can't be fixed from spreadsheets. We're there, in your property, with your team."
  },
  {
    question: "What size properties do you work with?",
    answer: "Our sweet spot is boutique hotels (10-150 rooms), restaurant groups with 2-10 locations, and development projects with hospitality components. We occasionally work with larger properties if the fit is right."
  },
  {
    question: "How long are typical engagements?",
    answer: "Operations and revenue: 3-6 months. Concept-to-opening: 6-12 months depending on project stage. Some clients retain us for ongoing advisory after the initial engagement."
  },
  {
    question: "What does it cost?",
    answer: "$12,000-$50,000/month depending on project scope, property size, and complexity. We provide specific pricing after understanding your situation."
  },
  {
    question: "What results can we expect?",
    answer: "Operational clients typically see 30-50% reduction in staff turnover, measurable improvements in guest satisfaction, and operational cost savings of 2-5x our fee. Revenue clients typically see 5-12% margin improvement within 12 months. Opening clients launch on time with trained, confident teams."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we work under NDA for all client engagements."
  },
  {
    question: "Are you available for speaking engagements or advisory board roles?",
    answer: "Yes, on a selective basis. Contact us to discuss."
  }
];

export default function Contact() {
  const [scrolled, setScrolled] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      {/* Hero Section with Minimal Contact Form */}
      <section className="relative pt-32 md:pt-48 pb-32 md:pb-48 bg-[#181818]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-center mb-16"
            >
              <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">Start a Conversation</span>
              <h1 className="text-5xl md:text-7xl font-serif font-light text-white leading-tight tracking-tight mb-6">
                Let's Talk
              </h1>
              <p className="text-stone-400 text-sm max-w-md mx-auto">
                No pressure. No sales pitch. Just clarity.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-[#FFF7F2] border border-[#c5a059]/20 rounded-sm p-8 md:p-12 shadow-xl"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Company / Property
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="Your organization"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none resize-none placeholder:text-stone-400"
                    placeholder="What challenges are you facing? What stage is your project at?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#c5a059] text-[#181818] hover:bg-[#181818] hover:text-white py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* FAQ Section - NOW LIGHT */}
      <section className="py-24 md:py-32 border-t border-white/5 bg-[#FFF7F2]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-[#c5a059] text-[10px] font-bold tracking-[0.4em] uppercase block mb-6">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#181818] leading-tight">
              Frequently Asked<br/>
              <span className="italic text-[#c5a059]">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            {FAQ_DATA.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-[#181818]/10 last:border-0"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full py-8 flex items-start justify-between gap-8 text-left group hover:bg-[#181818]/5 px-6 -mx-6 transition-colors duration-300"
                >
                  <div className="flex items-start gap-6 flex-1">
                    <span className="text-[#c5a059] text-sm font-serif mt-1 flex-shrink-0">0{index + 1}</span>
                    <h3 className="text-[#181818] text-xl md:text-2xl font-serif group-hover:text-[#c5a059] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-[#c5a059] flex-shrink-0 mt-2 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: openFAQ === index ? 'auto' : 0,
                    opacity: openFAQ === index ? 1 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 pl-6 pr-6">
                    <div className="pl-12">
                      <p className="text-stone-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
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
                 <a href="#" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">LinkedIn</a>
                 <a href="#" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">Instagram</a>
                 <a href="#" className="text-stone-500 hover:text-[#c5a059] text-sm uppercase tracking-widest transition-colors">Behance</a>
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