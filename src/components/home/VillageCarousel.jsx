import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { COMMUNITY_SPOTLIGHTS } from "../../data/mockTngsData";
import { RevealOnScroll } from "../motion/MotionPrimitives";

export default function VillageCarousel({ onOpenInquiry }) {
  const scrollContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  const scrollByAmount = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // 320px card width + 20px gap
    const cardWidth = 340;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    if (direction === "right") {
      // If at (or very near) the end, loop smoothly back to the start
      if (container.scrollLeft >= maxScrollLeft - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    } else {
      // If at the start, loop smoothly to the end
      if (container.scrollLeft <= 10) {
        container.scrollTo({ left: maxScrollLeft, behavior: "smooth" });
      } else {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" });
      }
    }
  };

  // Auto-advance carousel every 3.5 seconds when not hovered/touched
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      scrollByAmount("right");
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

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
                Families, teachers, and students work together to create an
                environment where everyone contributes and everyone learns.
              </p>
            </RevealOnScroll>

            {/* Desktop Carousel Controls */}
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scrollByAmount("left")}
                aria-label="Scroll left"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-tngs-green hover:bg-tngs-green hover:text-white transition-colors shadow-sm cursor-pointer"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollByAmount("right")}
                aria-label="Scroll right"
                className="w-11 h-11 rounded-full bg-white border border-stone-200 flex items-center justify-center text-tngs-green hover:bg-tngs-green hover:text-white transition-colors shadow-sm cursor-pointer"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Mobile-First Touch Snap-Scroll Track with Auto-Loop */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-none"
          >
            {COMMUNITY_SPOTLIGHTS.map((person) => (
              <article
                key={person.id}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] bg-white overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                {/* Larger 1:1 Image Container */}
                <div className="aspect-[4/4] overflow-hidden bg-stone-200 relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="h-full w-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white">
                    {person.quote && (
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-tngs-mint">
                        {person.quote}
                      </p>
                    )}
                    <h3 className="font-serif text-lg sm:text-xl font-bold mt-0.5">
                      {person.name}
                    </h3>
                    {person.role && (
                      <p className="text-xs text-stone-200">{person.role}</p>
                    )}
                  </div>
                </div>
                {person.story && (
                  <div className="p-5 flex-grow flex items-center">
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {person.story}
                    </p>
                  </div>
                )}
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
            <h2 className="mt-3 font-serif text-[25px] sm:text-[60px] font-bold leading-tight max-w-4xl w-full">
              KEEP ON MOVING
            </h2>
            <p className="mt-4 text-sm sm:text-base text-stone-200 leading-relaxed uppercase tracking-wide">
              Come walk our campus, meet our educators, and experience The North
              Green School community firsthand.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5">
              <button
                onClick={onOpenInquiry}
                className="bg-tngs-mint text-tngs-green hover:bg-white font-semibold px-7 py-3.5 rounded-full transition-colors cursor-pointer"
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