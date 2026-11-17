import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, BookOpen, Calendar, Sparkles } from 'lucide-react';
import { LEARNING_DATA } from '../data/mockTngsData';
import PageHero from '../components/layout/PageHero';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  EDITORIAL_EASE,
} from '../components/motion/MotionPrimitives';

// Import local image
import learningBg from '../assets/images/pages-hero-bg-images/learning-page.webp';

export default function LearningPage({ onOpenInquiry }) {
  const [activeStageId, setActiveStageId] = useState(LEARNING_DATA.stages[0].id);
  const { hash } = useLocation();

  useEffect(() => {
    const cleanHash = hash.replace('#', '');
    const matchedStage = LEARNING_DATA.stages.find((stage) => stage.id === cleanHash);
    if (matchedStage) {
      setActiveStageId(matchedStage.id);
    }
  }, [hash]);

  const activeStage =
    LEARNING_DATA.stages.find((stage) => stage.id === activeStageId) || LEARNING_DATA.stages[0];

  return (
    <div className="bg-white">
      {/* Page Hero with Right-Aligned Faint Background & Gradient */}
      <PageHero
        eyebrow="Learning at TNGS"
        title="Story of a North Green Learner."
        description="From joyful play in Cambridge Early Years to confident IGCSE scholarship in Secondary, our curriculum balances international academic standards with curiosity and character."
        bgImage={learningBg}
      />

      {/* Interactive Grade-Level Stage Switcher */}
      ...

      {/* Interactive Grade-Level Stage Switcher */}
      <section
        id="stages"
        className="scroll-mt-28 py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto"
      >
        {/* Anchor targets so #early-years, #lower-primary, #upper-primary scroll smoothly here */}
        {/* Anchor targets so #early-years, #primary, #secondary scroll smoothly here */}
        <span id="early-years" className="scroll-mt-32" />
        <span id="primary" className="scroll-mt-32" />
        <span id="secondary" className="scroll-mt-32" />

        <RevealOnScroll className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
            Academic Pathway
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-tngs-green">
            Explore Our Learning Stages
          </h2>
        </RevealOnScroll>

        {/* Mobile-First Scrollable Pill Tabs with Animated layoutId Pill */}
        <div className="flex gap-2 overflow-x-auto pb-3 mb-10 scrollbar-none">
          {LEARNING_DATA.stages.map((stage) => {
            const isSelected = stage.id === activeStageId;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageId(stage.id)}
                className={`relative shrink-0 px-5 py-3 rounded-full text-sm font-semibold transition-colors ${
                  isSelected ? 'text-white' : 'text-stone-600 bg-tngs-sand hover:text-tngs-green'
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeLearningStagePill"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-tngs-green rounded-full z-0"
                  />
                )}
                <span className="relative z-10">{stage.label}</span>
              </button>
            );
          })}
        </div>

        {/* Animated Stage Content Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EDITORIAL_EASE }}
            className="bg-tngs-sand/80 rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-200/80 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          >
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tngs-green bg-tngs-mint/70 px-3.5 py-1.5 rounded-full">
                <BookOpen size={14} />
                {activeStage.ages}
              </span>

              <h3 className="mt-4 font-serif text-2xl sm:text-3xl font-bold text-tngs-charcoal leading-snug">
                {activeStage.headline}
              </h3>

              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed">
                {activeStage.description}
              </p>

              <ul className="mt-6 space-y-3">
                {activeStage.highlights.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-stone-700">
                    <CheckCircle2 size={18} className="text-tngs-lightGreen shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center justify-center gap-2 bg-tngs-green hover:bg-tngs-lightGreen text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-sm transition-colors"
                >
                  <Calendar size={16} />
                  Inquire About {activeStage.label}
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-lg bg-stone-200">
                <img
                  src={activeStage.image}
                  alt={activeStage.label}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Co-Curriculars & Enrichment (#co-curriculars) */}
      {/* Co-Curriculars & Enrichment (#co-curriculars) */}
      <section
        id="co-curriculars"
        className="scroll-mt-28 py-12 sm:py-8 bg-tngs-mint/20 border-t border-stone-200/70 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll className="max-w-2xl mb-8">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
              <Sparkles size={14} /> Beyond the Classroom
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-tngs-green">
              Akii Co-Curricular Programmes
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Our signature clubs build resilience, strategy, and teamwork—both on campus and at specialized off-site training venues. Follow each programme on Instagram and TikTok for photos and match highlights.
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {LEARNING_DATA.coCurriculars.map((club) => (
              <StaggerItem
                key={club.id}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                  <img
                    src={club.image}
                    alt={club.title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="bg-tngs-green text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                      {club.category}
                    </span>
                    {club.featured && (
                      <span className="bg-tngs-mint text-tngs-green text-xs font-bold px-3 py-1 rounded-full shadow">
                        Flagship Aquatic Club
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-tngs-charcoal">
                      {club.title}
                    </h3>
                    <p className="mt-2.5 text-sm sm:text-base text-stone-600 leading-relaxed">
                      {club.description}
                    </p>
                    {club.highlight && (
                      <p className="mt-3 text-xs font-semibold text-tngs-lightGreen bg-tngs-mint/40 inline-block px-3 py-1.5 rounded-lg">
                        {club.highlight}
                      </p>
                    )}
                  </div>

                  {/* Social Links for Photos & Videos */}
                  {club.socials && (
                    <div className="mt-6 pt-4 border-t border-stone-100 flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                        Watch Clips & Photos:
                      </span>
                      <div className="flex items-center gap-2.5">
                        {club.socials.instagram && (
                          <a
                            href={club.socials.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-tngs-sand text-tngs-charcoal hover:bg-tngs-green hover:text-white transition-colors"
                          >
                            {/* Clean Instagram SVG */}
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            Instagram
                          </a>
                        )}
                        {club.socials.tiktok && (
                          <a
                            href={club.socials.tiktok}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-full bg-tngs-sand text-tngs-charcoal hover:bg-tngs-green hover:text-white transition-colors"
                          >
                            {/* Clean TikTok SVG */}
                            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                            </svg>
                            TikTok
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}