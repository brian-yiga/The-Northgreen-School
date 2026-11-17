import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/layout/ScrollToHash';
import InquiryModal from './components/modals/InquiryModal';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import LearningPage from './pages/LearningPage';
import AdmissionsPage from './pages/AdmissionsPage';
import CommunityPage from './pages/CommunityPage';

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col bg-white text-tngs-charcoal font-sans selection:bg-tngs-mint selection:text-tngs-green">
        <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
            <Route path="/discover" element={<DiscoverPage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
            <Route path="/learning" element={<LearningPage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
            <Route path="/admissions" element={<AdmissionsPage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
            <Route path="/community" element={<CommunityPage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
            <Route path="*" element={<HomePage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
          </Routes>
        </main>

        <Footer />

        <InquiryModal
          isOpen={inquiryModalOpen}
          onClose={() => setInquiryModalOpen(false)}
        />
      </div>
    </Router>
  );
}