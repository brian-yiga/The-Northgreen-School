import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { COMMUNITY_SPOTLIGHTS } from '../../data/mockTngsData';
import { RevealOnScroll } from '../motion/MotionPrimitives';

export default function VillageCarousel({ onOpenInquiry }) {
  const scrollContainerRef = useRef(null);

  const scrollByAmount = (direction) => {
    if (!scrollContainerRef.current) return;
    const cardWidth = 320;
    scrollContainerRef.current.scrollBy({
      left: direction === 'left' ? -cardWidth : cardWidth,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* "We are the village!" Horizontal Spotlight Carousel */}
      <section className="py-8 sm:py-16 bg-tngs-sand/80 border-y border-stone-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <RevealOnScroll className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
                Our People & Stories
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-bold text-tngs-green">
                We are the village!
              </h2>
              <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
                Families, teachers, and students work together to create an environment where everyone contributes and everyone learns.
              </p>
            </RevealOnScroll>

            {/* Desktop Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollByAmount('left')}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-tngs-green hover:bg-tngs-green hover:text-white transition-colors shadow-sm"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollByAmount('right')}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-tngs-green hover:bg-tngs-green hover:text-white transition-colors shadow-sm"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Mobile-First Touch Snap-Scroll Track */}
          <div
            ref={scrollContainerRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
          >
            {COMMUNITY_SPOTLIGHTS.map((person) => (
              <article
                key={person.id}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="aspect-[4/4] overflow-hidden bg-stone-200 relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-tngs-mint">
                      {person.quote}
                    </p>
                    <h3 className="font-serif text-xl font-bold mt-0.5">{person.name}</h3>
                    <p className="text-xs text-stone-200">{person.role}</p>
                  </div>
                </div>
                <div className="p-5 flex-grow flex items-center">
                  <p className="text-sm text-stone-600 leading-relaxed">
                    {person.story}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Montcrest-Style Closing Action Banner */}
      <section className="py-8 sm:py-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="bg-tngs-green rounded-3xl p-8 sm:p-14 text-center text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-tngs-mint">
              Your Child’s Next Chapter
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-bold leading-tight">
              You’ve Got This! <span className="text-tngs-mint block sm:inline">We’ve got you!</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-200 leading-relaxed">
              Come walk our campus, meet our educators, and experience The North Green School community firsthand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="bg-tngs-mint text-tngs-green hover:bg-white font-semibold px-7 py-3.5 rounded-full transition-colors"
              >
                Inquire Now
              </button>
              <Link
                to="/admissions"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold px-7 py-3.5 rounded-full inline-flex items-center justify-center gap-2 transition-colors"
              >
                Admissions Guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}