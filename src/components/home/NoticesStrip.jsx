import React from 'react';
import { Link } from 'react-router-dom';
import { Bell, CalendarDays, ArrowUpRight } from 'lucide-react';
import { NOTICES_DATA } from '../../data/mockTngsData';
import { StaggerContainer, StaggerItem } from '../motion/MotionPrimitives';

export default function NoticesStrip({ onOpenInquiry }) {
  return (
    <section className="relative z-20 -mt-8 sm:-mt-12 px-4 sm:px-8 max-w-7xl mx-auto">
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {NOTICES_DATA.map((notice) => (
          <StaggerItem
            key={notice.id}
            className="bg-white rounded-2xl p-5 sm:p-7 shadow-xl shadow-stone-900/5 border border-stone-200/80 flex flex-col justify-between gap-4 hover:border-tngs-lightGreen/50 transition-colors"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tngs-green bg-tngs-mint/60 px-3 py-1 rounded-full">
                  <Bell size={12} />
                  {notice.tag}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-500">
                  <CalendarDays size={13} className="text-tngs-lightGreen" />
                  {notice.date}
                </span>
              </div>

              <h2 className="font-serif text-lg sm:text-xl font-bold text-tngs-charcoal">
                {notice.title}
              </h2>
              <p className="mt-2 text-sm text-stone-600 leading-relaxed">
                {notice.summary}
              </p>
            </div>

            <div className="pt-2">
              {notice.actionType === 'inquiry' ? (
                <button
                  onClick={onOpenInquiry}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-tngs-green hover:text-tngs-lightGreen transition-colors"
                >
                  {notice.ctaText} <ArrowUpRight size={16} />
                </button>
              ) : (
                <Link
                  to={notice.path}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-tngs-green hover:text-tngs-lightGreen transition-colors"
                >
                  {notice.ctaText} <ArrowUpRight size={16} />
                </Link>
              )}
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}