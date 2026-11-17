import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { PILLARS_DATA } from '../../data/mockTngsData';
import { RevealOnScroll, StaggerContainer, StaggerItem, EDITORIAL_EASE } from '../motion/MotionPrimitives';

export default function PillarsSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      {/* Editorial Narrative Intro */}
      <RevealOnScroll className="max-w-3xl mb-12 sm:mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
          Our Educational Philosophy
        </span>
        <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold text-tngs-green leading-tight">
          Nature. Inquiry. Village.
        </h2>
        <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
          Yes, we value who your child is today — and we nurture who they are becoming. Learning at TNGS extends beyond four walls into our gardens, community, and the wider world.
        </p>
      </RevealOnScroll>

      {/* 3-Column Pillar Grid (Mobile 1 col -> Desktop 3 cols) */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {PILLARS_DATA.map((pillar) => (
          <StaggerItem key={pillar.id}>
            <Link
              to="/learning"
              className="group block h-full rounded-3xl overflow-hidden bg-tngs-sand border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Smooth Hover Zoom */}
              <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
                <motion.img
                  src={pillar.image}
                  alt={pillar.title}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.7, ease: EDITORIAL_EASE }}
                  className="h-full w-full object-cover"
                />
                <div className={`absolute top-4 left-4 ${pillar.accentColor} text-white text-xs font-semibold px-3 py-1 rounded-full shadow`}>
                  {pillar.kicker}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-tngs-green group-hover:text-tngs-lightGreen transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-sm font-semibold text-tngs-green">
                  <span>Explore {pillar.title.replace('.', '')}</span>
                  <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:bg-tngs-green group-hover:text-white transition-colors">
                    <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}