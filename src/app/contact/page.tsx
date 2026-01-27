'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '@/assets/gkr-logo.png';

const FAQ_DATA = [
  {
    question: "How quickly can you start?",
    answer: "For operational consulting and revenue work, typically 2-4 weeks. For concept-to-opening projects, the earlier you involve us, the better—ideally 12+ months before opening."
  },
  {
    question: "Do you work remotely or on-site?",
    answer: "Where appropriate we work on-site with you and your team. Hospitality operations can't be fixed from spreadsheets. So we're there, on property, to support you when needed to ensure the successful implementation and completion of your project."
  },
  {
    question: "How long are typical engagements?",
    answer: "Operations and revenue based audits: 3-6 months. Concept-to-opening: 6-12 months depending on project stage and needs. Many clients retain us for ongoing advisory support after the initial engagement. Each project and its timing will be tailored to the actual requirements."
  },
  {
    question: "What does it cost?",
    answer: "We firstly will spend time to understand the needs, core objectives, opportunities and challenges you are facing. Then depending on project scope, property size, and complexity, we will provide an a la carte approach to estimate a specific pricing for your project."
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, we are happy to work under a mutual NDA for all client engagements."
  },
  {
    question: "Are you available for speaking engagements or advisory board roles?",
    answer: "Yes. Please contact us to discuss needs."
  }
];

export default function Contact() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    role: '',
    roleDescription: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-[#181818] text-[#FFF7F2] font-sans selection:bg-[#c5a059] selection:text-white overflow-x-hidden">



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

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="+1 (555) 000-0000"
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

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Are you a
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 appearance-none outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select Role</option>
                      <option value="Developer">Developer</option>
                      <option value="Investor">Investor</option>
                      <option value="Owner">Owner</option>
                      <option value="Exec Manager/ Operator">Exec Manager/ Operator</option>
                      <option value="Other">Other</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
                </div>

                {/* Other Description - Conditional */}
                {formData.role === 'Other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <label htmlFor="roleDescription" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                      Please describe
                    </label>
                    <input
                      type="text"
                      id="roleDescription"
                      name="roleDescription"
                      value={formData.roleDescription}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 transition-colors outline-none placeholder:text-stone-400"
                      placeholder="Tell us about your role"
                    />
                  </motion.div>
                )}

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-stone-600 text-xs uppercase tracking-wider mb-3">
                    Project / Business Type
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-3 appearance-none outline-none cursor-pointer"
                    >
                      <option value="" disabled>Select Type</option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Restaurant">Restaurant</option>
                      <option value="Bar">Bar</option>
                      <option value="Nightlife">Nightlife</option>
                      <option value="Meeting Event Venue">Meeting Event Venue</option>
                      <option value="Private Club">Private Club</option>
                      <option value="Mixed-Use Residential Properties">Mixed-Use Residential Properties</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400 pointer-events-none" />
                  </div>
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
                  className="cursor-pointer w-full bg-[#c5a059] text-[#181818] hover:bg-[#181818] hover:text-white py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full"
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
              Frequently Asked<br />
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
                  className="cursor-pointer w-full py-8 flex items-start justify-between gap-8 text-left group hover:bg-[#181818]/5 px-6 -mx-6 transition-colors duration-300"
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
    </div>
  );
}
