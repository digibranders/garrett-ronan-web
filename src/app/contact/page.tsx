'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Phone, ChevronDown, AlertCircle, Check } from 'lucide-react';
import { sendContactEmail } from '@/app/actions/send-email';
import { toast } from 'sonner';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.role) newErrors.role = 'Please select your role';
    if (!formData.projectType) newErrors.projectType = 'Please select a project type';
    if (!formData.message.trim()) newErrors.message = 'Please tell us about your situation';

    if (formData.role === 'Other' && !formData.roleDescription.trim()) {
      newErrors.roleDescription = 'Please describe your role';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        const result = await sendContactEmail(formData);
        if (result.success) {
          setIsSuccess(true);
          toast.success('Thank you for reaching out! We will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            projectType: '',
            role: '',
            roleDescription: '',
            message: ''
          });
          // Reset success state after 3 seconds
          setTimeout(() => setIsSuccess(false), 2500);
        } else {
          toast.error(result.error || 'Something went wrong. Please try again.');
        }
      } catch (error) {
        toast.error('An unexpected error occurred. Please try again.');
        console.error('Submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Focus the first error
      const firstErrorKey = Object.keys(errors)[0];
      const firstErrorElement = document.getElementById(firstErrorKey);
      if (firstErrorElement) {
        firstErrorElement.focus();
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
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
              <span className="text-[#8a6d3b] text-[0.875rem] font-bold tracking-[0.4em] uppercase block mb-6">Start a Conversation</span>
              <h1 className="text-4xl md:text-7xl font-serif font-light text-white leading-tight tracking-tight mb-6">
                Let's Talk
              </h1>
              <p className="text-stone-400 text-sm max-w-md mx-auto">
                No pressure. No sales pitch. Just clarity.
              </p>
            </motion.div>

            {/* Contact Info Header - Above Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 md:gap-0 px-4"
            >
              <a href="mailto:Connect@GKRHospitality.com" className="text-[#d4b06b] text-[0.875rem]  tracking-[0.2em] hover:text-white transition-colors font-bold">
                connect@GKRHospitality.com
              </a>
              <a href="tel:+19174605793" className="text-[#d4b06b] text-[0.875rem] uppercase tracking-[0.2em] hover:text-white transition-colors font-bold">
                +1-917-460-5793
              </a>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#FFF7F2] border border-[#c5a059]/20 rounded-sm p-8 md:p-12 shadow-xl"
            >
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Name <span className="text-[#C62828]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full bg-transparent border-b ${errors.name ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none placeholder:text-stone-400`}
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p id="name-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Email <span className="text-[#C62828]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full bg-transparent border-b ${errors.email ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none placeholder:text-stone-400`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Company / Property
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-[#181818]/20 focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none placeholder:text-stone-400"
                    placeholder="Your organization"
                  />
                </div>

                {/* Role */}
                <div>
                  <label htmlFor="role" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Are you a <span className="text-[#C62828]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      aria-invalid={!!errors.role}
                      aria-describedby={errors.role ? 'role-error' : undefined}
                      className={`w-full bg-transparent border-b ${errors.role ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 appearance-none outline-none cursor-pointer`}
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
                  {errors.role && (
                    <p id="role-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.role}
                    </p>
                  )}
                </div>

                {/* Other Description - Conditional */}
                {formData.role === 'Other' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="overflow-hidden"
                  >
                    <label htmlFor="roleDescription" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                      Please describe <span className="text-[#C62828]">*</span>
                    </label>
                    <input
                      type="text"
                      id="roleDescription"
                      name="roleDescription"
                      value={formData.roleDescription}
                      onChange={handleChange}
                      aria-invalid={!!errors.roleDescription}
                      aria-describedby={errors.roleDescription ? 'roleDescription-error' : undefined}
                      className={`w-full bg-transparent border-b ${errors.roleDescription ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none placeholder:text-stone-400`}
                      placeholder="Tell us about your role"
                    />
                    {errors.roleDescription && (
                      <p id="roleDescription-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.roleDescription}
                      </p>
                    )}
                  </motion.div>
                )}

                {/* Project Type */}
                <div>
                  <label htmlFor="projectType" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Project / Business Type <span className="text-[#C62828]">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      aria-invalid={!!errors.projectType}
                      aria-describedby={errors.projectType ? 'projectType-error' : undefined}
                      className={`w-full bg-transparent border-b ${errors.projectType ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 appearance-none outline-none cursor-pointer`}
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
                  {errors.projectType && (
                    <p id="projectType-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.projectType}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-stone-700 text-xs uppercase tracking-wider mb-3">
                    Tell us about your situation <span className="text-[#C62828]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    rows={4}
                    className={`w-full bg-transparent border-b ${errors.message ? 'border-[#C62828]' : 'border-[#181818]/20'} focus:border-[#c5a059] text-[#181818] py-4 transition-colors outline-none resize-none placeholder:text-stone-400`}
                    placeholder="What challenges are you facing? What stage is your project at?"
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[#C62828] text-xs mt-2 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`cursor-pointer w-full flex items-center justify-center gap-3 py-6 text-xs uppercase tracking-[0.3em] font-bold transition-all duration-500 rounded-full ${isSuccess
                    ? 'bg-green-600 text-white'
                    : isSubmitting
                      ? 'bg-[#8a6d3b] opacity-50 cursor-not-allowed text-[#181818]'
                      : 'bg-[#8a6d3b] text-[#181818] hover:bg-[#181818] hover:text-white'
                    }`}
                >
                  <AnimatePresence mode="wait">
                    {isSuccess ? (
                      <motion.div
                        key="success"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-5 h-5" />
                        <span>Message Sent</span>
                      </motion.div>
                    ) : (
                      <motion.span
                        key="normal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.span>
                    )}
                  </AnimatePresence>
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
            <span className="text-[#8a6d3b] text-[0.875rem] font-bold tracking-[0.4em] uppercase block mb-6">FAQ</span>
            <h2 className="text-5xl md:text-7xl font-serif text-[#181818] leading-tight">
              Frequently Asked<br />
              <span className="italic text-[#8a6d3b]">Questions</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl">
            {FAQ_DATA.map((faq: FAQItem, index: number) => (
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
                  className="cursor-pointer w-full py-8 flex items-start justify-between gap-8 text-left group hover:bg-[#181818]/5 px-6 -mx-6 transition-colors duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#c5a059] rounded-md"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <div className="flex items-start gap-6 flex-1">
                    <span className="text-[#8a6d3b] text-sm font-serif mt-1 flex-shrink-0">0{index + 1}</span>
                    <h3 className="text-[#181818] text-xl md:text-2xl font-serif group-hover:text-[#8a6d3b] transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8a6d3b] flex-shrink-0 mt-2 transition-transform duration-300 ${openFAQ === index ? 'rotate-180' : ''}`}
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
                  id={`faq-answer-${index}`}
                  role="region"
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
