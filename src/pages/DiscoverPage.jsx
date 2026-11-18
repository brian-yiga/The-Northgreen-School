import React from 'react';
import { motion } from 'framer-motion'; // <-- Make sure motion is imported here!
import { Quote, Sparkles, Trees, HeartHandshake, ArrowRight } from 'lucide-react';
import { DISCOVER_DATA, RESIDENT_DIRECTOR_DATA } from '../data/mockTngsData';
import PageHero from '../components/layout/PageHero';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  EditorialImage,
} from '../components/motion/MotionPrimitives';

// Import local image using correct assets path
import discoverBg from '../assets/images/pages-hero-bg-images/discover-page.webp';


const PRINCIPLE_ICONS = [Sparkles, Trees, HeartHandshake];

export default function DiscoverPage({ onOpenInquiry }) {
  return (
    <div className="bg-white">
      {/* Page Hero with Subtle Right-Aligned Background Image & Gradient */}
      <PageHero
        eyebrow="Discover The North Green School"
        title="A learning community rooted in nature and purpose."
        description="Explore our educational vision, hear from our Managing Director, and discover the green spaces and educators shaping every child’s journey."
        bgImage={discoverBg}
      />
      
      {/* Section 1: Vision, Mission & Core Principles (#vision) */}
      <section id="vision" className="scroll-mt-10 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
            {DISCOVER_DATA.vision.eyebrow}
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-tngs-green leading-tight">
            {DISCOVER_DATA.vision.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            {DISCOVER_DATA.vision.mission}
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DISCOVER_DATA.vision.principles.map((item, idx) => {
            const Icon = PRINCIPLE_ICONS[idx % PRINCIPLE_ICONS.length];
            return (
              <StaggerItem
                key={item.title}
                className="bg-tngs-sand rounded-3xl p-6 sm:p-8 border border-stone-200/80"
              >
                <div className="w-12 h-12 rounded-2xl bg-tngs-green text-tngs-mint flex items-center justify-center mb-5">
                  <Icon size={22} />
                </div>
                <h3 className="font-serif text-xl font-bold text-tngs-charcoal">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-sm sm:text-base text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </section>

      {/* Section 2: Resident Director's Message (#resident-director) */}
      <section
        id="resident-director"
        className="scroll-mt-28 py-10 sm:py-14 bg-tngs-mint/25 border-y border-stone-200/70 px-4 sm:px-8"
      >
        <span id="mds-corner" className="sr-only" />
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Column */}
          <RevealOnScroll className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[320px] sm:max-w-[340px] lg:max-w-[360px] overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/80 shadow-md aspect-[4/5] flex items-end justify-center">
              <motion.img
                src={RESIDENT_DIRECTOR_DATA.image}
                alt={`${RESIDENT_DIRECTOR_DATA.name} - ${RESIDENT_DIRECTOR_DATA.role}`}
                initial={{ scale: 1.04, opacity: 0.9 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{ scale: 1.02 }}
                viewport={{ once: true, amount: 0.2 }}
                // transition={{ duration: 0.8, ease: EDITORIAL_EASE }}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </RevealOnScroll>

          {/* Editorial Letter Column */}
          <RevealOnScroll delay={0.15} className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tngs-green bg-white px-3.5 py-1.5 rounded-full shadow-sm mb-3">
              <Quote size={14} className="text-tngs-lightGreen" />
              {RESIDENT_DIRECTOR_DATA.sectionTitle}
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-tngs-green leading-snug">
              “{RESIDENT_DIRECTOR_DATA.headline}”
            </h2>

            <div className="mt-4 space-y-3 text-sm sm:text-base text-stone-700 leading-relaxed">
              {RESIDENT_DIRECTOR_DATA.message.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-tngs-green/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg font-bold text-tngs-charcoal">
                  {RESIDENT_DIRECTOR_DATA.name}
                </p>
                <p className="text-xs sm:text-sm text-stone-500">
                  {RESIDENT_DIRECTOR_DATA.role} • The North Green School
                </p>
              </div>
              <button
                onClick={onOpenInquiry}
                className="inline-flex items-center justify-center gap-2 bg-tngs-green hover:bg-tngs-lightGreen text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors"
              >
                Meet Our Team <ArrowRight size={16} />
              </button>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* Section 3: Our Green Campus (#campus) */}
      <section id="campus" className="scroll mt-10 py-8 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="max-w-2xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
            Environment & Facilities
          </span>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-tngs-green">
            Our Green Campus
          </h2>
          <p className="mt-3 text-base text-stone-600 leading-relaxed">
            Every corner of our campus is thoughtfully designed to spark curiosity, movement, and connection with nature.
          </p>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DISCOVER_DATA.campusSpaces.map((space) => (
            <StaggerItem key={space.title} className="flex flex-col">
              <EditorialImage src={space.image} alt={space.title} aspectClass="aspect-[4/3]" />
              <h3 className="mt-5 font-serif text-xl font-bold text-tngs-charcoal">
                {space.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {space.description}
              </p>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Section 4: Leadership & Faculty (#faculty) */}
      <section
        id="faculty"
        className="scroll-mt-10 py-15 bg-tngs-sand/70 border-t border-stone-200/70 px-4 sm:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
              Dedicated Educators
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-tngs-green">
              Leadership & Faculty
            </h2>
            <p className="mt-3 text-base text-stone-600 leading-relaxed">
              Experienced, caring educators committed to knowing every learner by name and nurturing their potential.
            </p>
          </RevealOnScroll>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {DISCOVER_DATA.leadership.map((leader) => (
              <StaggerItem
                key={leader.name}
                className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm"
              >
                <div className="aspect-[4/3] overflow-hidden bg-stone-200">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-tngs-lightGreen">
                    {leader.role}
                  </span>
                  <h3 className="mt-1 font-serif text-xl font-bold text-tngs-charcoal">
                    {leader.name}
                  </h3>
                  <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                    {leader.bio}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}