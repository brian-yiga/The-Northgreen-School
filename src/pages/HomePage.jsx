import React from 'react';
import HeroSection from '../components/home/HeroSection';
import NoticesStrip from '../components/home/NoticesStrip';
import PillarsSection from '../components/home/PillarsSection';
import VillageCarousel from '../components/home/VillageCarousel';
import TngsPromiseSection from '../components/home/TngsPromiseSection';

export default function HomePage({ onOpenInquiry }) {
  return (
    <div>
      <HeroSection onOpenInquiry={onOpenInquiry} />
      <NoticesStrip onOpenInquiry={onOpenInquiry} />
      <PillarsSection />
      <VillageCarousel onOpenInquiry={onOpenInquiry} />
      <TngsPromiseSection onOpenInquiry={onOpenInquiry} />
    </div>
  );
}