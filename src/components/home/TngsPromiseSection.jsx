import React from 'react';
import { ArrowRight } from 'lucide-react';
import { RevealOnScroll } from '../motion/MotionPrimitives';

// Import local background video from assets
import footerBgVideo from '../../assets/images/Footerbgvideo.mp4';

export default function TngsPromiseSection({ onOpenInquiry }) {
  return (
    <section className="relative max-w-6xl mx-auto mb-12 overflow-hidden py-8 sm:py-16 shadow-xl bg-black">
      {/* Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={footerBgVideo} type="video/mp4" />
      </video>

      {/* Subtle dark gradient overlay just to ensure text pop, with zero green */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Section Content */}
      <div className="relative z-20 max-w-3xl mx-auto text-center text-white">
        <RevealOnScroll>
          <span className="inline-block text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/90 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full mb-4">
            Core Commitment
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight">
            THE TNGS PROMISE
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.15}>
          <div className="mt-8 space-y-6 text-stone-100 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            <p>
              We promise a culture of challenge and achievement—where every child develops the focus, discipline and tenacity to maintain a competitive edge in an ever-changing world.
            </p>
            <p>
              We believe each child is created for a purpose, and we are committed to helping them discover it.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.25} className="mt-10">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 hover:bg-stone-100 font-semibold text-sm sm:text-base px-8 py-4 rounded-full shadow-lg transition-all"
          >
            JOIN US <ArrowRight size={18} />
          </button>
        </RevealOnScroll>
      </div>
    </section>
  );
}