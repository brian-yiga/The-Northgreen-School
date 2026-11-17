import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronDown,
  Calendar,
  CheckCircle2,
  MapPin,
  ArrowRight,
  Clock,
} from 'lucide-react';
import { ADMISSIONS_DATA } from '../data/mockTngsData';
import PageHero from '../components/layout/PageHero';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  EDITORIAL_EASE,
} from '../components/motion/MotionPrimitives';

// Import local image
import admissionsBg from '../assets/images/pages-hero-bg-images/admissions-page.webp';

export default function AdmissionsPage({ onOpenInquiry }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-white">
      {/* Page Hero with Right-Aligned Faint Background & Gradient */}
      <PageHero
        eyebrow="Admissions • 2026–2027"
        title="Begin your family’s journey at TNGS."
        description="We make joining The North Green School warm, transparent, and personal—from your very first campus visit to your child’s first day in class."
        bgImage={admissionsBg}
      >
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 bg-white text-tngs-green hover:bg-tngs-mint font-semibold text-sm px-6 py-3 rounded-full shadow transition-colors"
          >
            Start an Inquiry <ArrowRight size={16} />
          </button>
        </div>
      </PageHero>

      {/* Step-by-Step Admissions Process (#process) */}
      ...

      {/* Step-by-Step Admissions Process (#process) */}
      <section id="process" className="scroll-mt-28 py-12 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
            How to Apply
          </span>
          <h2 className="mt-1.5 font-serif text-2xl sm:text-4xl font-bold text-tngs-green">
            Admissions Process
          </h2>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ADMISSIONS_DATA.steps.map((item) => (
            <StaggerItem
              key={item.step}
              className="bg-tngs-sand rounded-3xl p-6 border border-stone-200/80 flex flex-col justify-between"
            >
              <div>
                <span className="inline-block font-serif text-2xl font-bold text-tngs-green bg-tngs-mint/70 px-3.5 py-1 rounded-xl">
                  {item.step}
                </span>
                <h3 className="mt-4 font-serif text-lg font-bold text-tngs-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Book a Campus Tour (#visit) */}
      <section id="visit" className="scroll-mt-28 py-12 sm:py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="bg-tngs-mint/35 border border-tngs-green/15 rounded-3xl p-6 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tngs-green">
              <MapPin size={14} /> Experience TNGS in Person
            </span>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-tngs-charcoal">
              Visit Our Green Campus
            </h2>
            <p className="mt-2 text-sm sm:text-base text-stone-700 leading-relaxed">
              Personal family tours are held Monday through Friday between 9:00 AM and 2:30 PM, as well as during our Saturday Open Houses.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 bg-tngs-green hover:bg-tngs-lightGreen text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md transition-colors"
          >
            <Calendar size={16} />
            Book a Campus Tour
          </button>
        </RevealOnScroll>
      </section>

      {/* Tuition & Fees / Animated FAQ Accordions (#tuition) & Key Dates (#dates) */}
      <section className="py-12 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left: Tuition & Admissions FAQs (#tuition) */}
        <div id="tuition" className="scroll-mt-28 lg:col-span-7">
          <RevealOnScroll className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
              Fees & Practical Details
            </span>
            <h2 className="mt-1.5 font-serif text-2xl sm:text-3xl font-bold text-tngs-green">
              Tuition & Admissions FAQs
            </h2>
          </RevealOnScroll>

          <div className="space-y-3">
            {ADMISSIONS_DATA.tuitionFaqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-stone-200 bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left font-semibold text-sm sm:text-base text-tngs-charcoal hover:bg-tngs-sand/50 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-tngs-green transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: EDITORIAL_EASE }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Key Dates & Term Calendar (#dates) */}
        <div id="dates" className="scroll-mt-28 lg:col-span-5">
          <RevealOnScroll className="bg-tngs-sand rounded-3xl p-6 sm:p-8 border border-stone-200/80">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
              <Clock size={14} /> Academic Milestones
            </span>
            <h2 className="mt-1.5 font-serif text-2xl font-bold text-tngs-green">
              Key Dates & Calendar
            </h2>

            <ul className="mt-6 space-y-4">
              {ADMISSIONS_DATA.keyDates.map((item) => (
                <li
                  key={item.date}
                  className="bg-white rounded-2xl p-4 border border-stone-200/70 flex items-start gap-3"
                >
                  <CheckCircle2 size={18} className="text-tngs-green shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-tngs-lightGreen">
                      {item.date}
                    </span>
                    <p className="mt-0.5 text-sm font-semibold text-tngs-charcoal">
                      {item.event}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}