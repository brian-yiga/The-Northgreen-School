import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../../data/mockTngsData';
import { RevealOnScroll, StaggerContainer, StaggerItem, EDITORIAL_EASE } from '../motion/MotionPrimitives';

export default function PillarsSection({ onOpenInquiry }) {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Narrative Intro */}
      <RevealOnScroll className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
          Our Educational Philosophy
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-tngs-green leading-tight">
          Nature. Inquiry. Community.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
          Yes, we value who your child is today — and we nurture who they are becoming. Learning at TNGS extends beyond four walls into our gardens, community, and the wider world.
        </p>
      </RevealOnScroll>

      {/* 2x2 Pillar Grid (Mobile 1 col -> Desktop 2 cols for all 4 Pillars) */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {PILLARS_DATA.map((pillar) => {
          const cardContent = (
            <>
              {/* Image Container with Smooth Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-200">
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
                  className="h-full w-full object-cover object-top"
                />
                <div
                  className={`absolute top-4 left-4 ${pillar.accentColor} text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow`}
                >
                  {pillar.kicker}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tngs-green group-hover:text-tngs-lightGreen transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-sm font-semibold text-tngs-green">
                  <span>{pillar.ctaText}</span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-tngs-green group-hover:text-white transition-colors shadow-xs">
                    <ArrowRight size="{15}"/>
                  </span>
                </div>
              </div>
            </>
          );

          return (
            <StaggerItem key="{pillar.id}">
              {pillar.actionType === 'inquiry' && onOpenInquiry ? (
                <button
                  type="button"
                  onClick={onOpenInquiry}
                  className="group w-full text-left h-full rounded-3xl overflow-hidden bg-tngs-sand border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
                >
                  {cardContent}
                </button>
              ) : (
                <Link className="group block h-full rounded-3xl overflow-hidden bg-tngs-sand border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer" to="{pillar.path}">
                  {cardContent}
                </Link>
              )}
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </section>
  );
}