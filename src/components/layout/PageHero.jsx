import React from 'react';
import { RevealOnScroll } from '../motion/MotionPrimitives';

export default function PageHero({ eyebrow, title, description, bgImage, children }) {
  return (
    <section className="relative overflow-hidden bg-tngs-green text-white py-14 sm:py-20 px-4 sm:px-8">
      {/* Right-Aligned, Faint, Subtle Background Image */}
      {bgImage && (
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none opacity-20 sm:opacity-25">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full sm:w-3/4 lg:w-2/3 object-cover object-right select-none"
          />
        </div>
      )}

      {/* Gradient Overlay: Solid/Rich TNGS Green on the left fading to a soft dark gradient on the right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-tngs-green via-tngs-green/90 to-tngs-green/50 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <RevealOnScroll className="max-w-3xl">
          {eyebrow && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-tngs-mint bg-white/15 px-3.5 py-1.5 rounded-full mb-4">
              {eyebrow}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-base sm:text-lg text-stone-100 leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
          {children}
        </RevealOnScroll>
      </div>
    </section>
  );
}