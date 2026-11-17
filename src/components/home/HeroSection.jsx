import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { HERO_DATA } from '../../data/mockTngsData';
import { EDITORIAL_EASE } from '../motion/MotionPrimitives';

export default function HeroSection({ onOpenInquiry }) {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % HERO_DATA.kineticWords.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-[88vh] flex items-end sm:items-center overflow-hidden bg-tngs-green">
      {/* Layered Background with Slow Ken Burns Zoom */}
      <motion.div
        initial={{ scale: 1.12 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 14, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
        className="absolute inset-0 z-0"
      >
        {/* Base Layer: High-res Graduation Image */}
        {HERO_DATA.graduationImage && (
          <img
            src={HERO_DATA.graduationImage}
            alt="Graduates at The North Green School"
            className="absolute inset-0 h-full w-full object-cover object-center lg:object-[center_25%]"
          />
        )}

        {/* Top Layer: Semi-transparent Campus Background Image */}
        <img
          src={HERO_DATA.image}
          alt="Learners at The North Green School"
          className="absolute inset-0 h-full w-full object-cover object-center opacity-35"
        />

        {/* Mobile-first gradient overlay for high text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-tngs-green/95 via-tngs-green/65 to-tngs-green/20 sm:bg-gradient-to-r sm:from-tngs-green/95 sm:via-tngs-green/60 sm:to-transparent" />
      </motion.div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 pt-24 pb-14 sm:py-24">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EDITORIAL_EASE }}
            className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-tngs-mint bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-5"
          >
            {HERO_DATA.eyebrow}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: EDITORIAL_EASE }}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.15] tracking-tight"
          >
            {HERO_DATA.headlinePrefix}{' '}
            <span className="block sm:inline-block min-h-[1.2em] text-tngs-mint">
              <AnimatePresence mode="wait">
                <motion.span
                  key={HERO_DATA.kineticWords[wordIndex]}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.45, ease: EDITORIAL_EASE }}
                  className="inline-block underline decoration-tngs-mint/50 underline-offset-8"
                >
                  {HERO_DATA.kineticWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.25, ease: EDITORIAL_EASE }}
            className="mt-5 text-base sm:text-lg text-stone-100/90 leading-relaxed max-w-xl"
          >
            {HERO_DATA.subheadline}
          </motion.p>

          {/* Mobile-First Stacked -> Desktop Inline CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: EDITORIAL_EASE }}
            className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
          >
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center justify-center gap-2 bg-tngs-mint text-tngs-green hover:bg-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg transition-all"
            >
              <Calendar size={18} />
              Book a Campus Visit
            </button>
            <Link
              to="/discover"
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full transition-all"
            >
              Discover TNGS
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}