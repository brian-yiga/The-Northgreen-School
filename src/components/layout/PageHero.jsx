import React from 'react';
import { RevealOnScroll } from '../motion/MotionPrimitives';

export default function PageHero({ eyebrow, title, description, bgImage, children }) {
  return (
    <section className="relative overflow-hidden bg-tngs-green text-white py-14 sm:py-20 px-4 sm:px-8">
      {/* Right-Aligned Background Image with Increased Visibility */}
      {bgImage && (
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none opacity-45 sm:opacity-60">
          <img
            src={bgImage}
            alt=""
            className="h-full w-full sm:w-3/4 lg:w-2/3 object-cover object-right select-none"
          />
        </div>
      )}

      {/* Gradient Overlay: Solid TNGS Green on the left for text legibility, fading to a light tint on the right */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-tngs-green via-tngs-green/85 to-tngs-green/20 pointer-events-none" />

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