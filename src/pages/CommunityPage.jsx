import React from 'react';
import { Calendar, Clock, MapPin, HeartHandshake, ArrowRight } from 'lucide-react';
import { COMMUNITY_DATA } from '../data/mockTngsData';
import PageHero from '../components/layout/PageHero';
import {
  RevealOnScroll,
  StaggerContainer,
  StaggerItem,
  EditorialImage,
} from '../components/motion/MotionPrimitives';

// Import local image
import communityBg from '../assets/images/pages-hero-bg-images/community-page.webp';

export default function CommunityPage({ onOpenInquiry }) {
  return (
    <div className="bg-white">
      {/* Page Hero with Right-Aligned Faint Background & Gradient */}
      <PageHero
        eyebrow="The TNGS Village"
        title="Stories, families, and moments that connect us."
        description="Discover daily life across our classrooms and gardens, learn about our Parents’ Association, and mark your calendar for upcoming school gatherings."
        bgImage={communityBg}
      />

      {/* School Stories & News (#stories) */}
      ...

      {/* School Stories & News (#stories) */}
      <section id="stories" className="scroll-mt-28 py-12 sm:py-12 px-4 sm:px-8 max-w-7xl mx-auto">
        <RevealOnScroll className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-tngs-lightGreen">
            Life at TNGS
          </span>
          <h2 className="mt-1.5 font-serif text-2xl sm:text-4xl font-bold text-tngs-green">
            School Stories & News
          </h2>
        </RevealOnScroll>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {COMMUNITY_DATA.stories.map((story) => (
            <StaggerItem
              key={story.id}
              className="bg-tngs-sand/70 rounded-3xl overflow-hidden border border-stone-200/80 flex flex-col"
            >
              <EditorialImage
                src={story.image}
                alt={story.title}
                aspectClass="aspect-[4/3]"
                className="rounded-none"
              />
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold text-tngs-lightGreen mb-2">
                    <span>{story.tag}</span>
                    <span className="text-stone-400">{story.date}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-tngs-charcoal leading-snug">
                    {story.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-stone-600 leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      {/* Parents Association (#parents) & Upcoming Events (#events) */}
      <section className="py-12 sm:py-12 bg-tngs-mint/20 border-t border-stone-200/70 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Parents Association (#parents) */}
          <RevealOnScroll
            id="parents"
            className="scroll-mt-28 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm"
          >
            <div className="w-12 h-12 rounded-2xl bg-tngs-green text-tngs-mint flex items-center justify-center mb-4">
              <HeartHandshake size={22} />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tngs-green">
              {COMMUNITY_DATA.parentsAssociation.title}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed">
              {COMMUNITY_DATA.parentsAssociation.description}
            </p>
            <ul className="mt-5 space-y-2.5">
              {COMMUNITY_DATA.parentsAssociation.initiatives.map((item) => (
                <li
                  key={item}
                  className="text-sm text-stone-700 bg-tngs-sand/80 px-4 py-3 rounded-xl font-medium"
                >
                  • {item}
                </li>
              ))}
            </ul>
            <button
              onClick={onOpenInquiry}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-tngs-green hover:text-tngs-lightGreen"
            >
              Connect with Our Community <ArrowRight size={16} />
            </button>
          </RevealOnScroll>

          {/* Events & Calendar (#events) */}
          <RevealOnScroll
            id="events"
            delay={0.1}
            className="scroll-mt-28 lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-stone-200/80 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-tngs-lightGreen mb-2">
              <Calendar size={14} /> Upcoming Gatherings
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-tngs-green mb-6">
              Events & Calendar
            </h2>

            <div className="space-y-4">
              {COMMUNITY_DATA.upcomingEvents.map((ev) => (
                <div
                  key={ev.title}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-tngs-sand/70 border border-stone-200/70"
                >
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-tngs-green text-white flex flex-col items-center justify-center">
                    <span className="text-lg font-bold leading-none">{ev.day}</span>
                    <span className="text-[10px] font-bold tracking-wider text-tngs-mint mt-1">
                      {ev.month}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-base sm:text-lg font-bold text-tngs-charcoal">
                      {ev.title}
                    </h3>
                    <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={12} className="text-tngs-green" /> {ev.time}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin size={12} className="text-tngs-green" /> {ev.location}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}