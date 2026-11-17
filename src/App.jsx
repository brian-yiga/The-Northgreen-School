import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToHash from './components/layout/ScrollToHash';
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import LearningPage from './pages/LearningPage';

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
            <Route path="*" element={<HomePage onOpenInquiry={() => setInquiryModalOpen(true)} />} />
          </Routes>
        </main>

        <Footer />

        {/* Inquiry Modal */}
        {inquiryModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
              <h3 className="font-serif text-2xl font-bold text-tngs-green mb-2">Schedule a Visit</h3>
              <p className="text-stone-600 text-sm mb-6">
                Experience TNGS in person. Fill out your details below and our admissions team will contact you.
              </p>
              <div className="flex flex-col gap-4">
                <input type="text" placeholder="Parent Full Name" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-tngs-green" />
                <input type="text" placeholder="Phone Number" className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-tngs-green" />
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="w-full bg-tngs-green text-white py-3 rounded-xl font-semibold hover:bg-tngs-lightGreen transition-colors"
                >
                  Submit Inquiry
                </button>
                <button
                  onClick={() => setInquiryModalOpen(false)}
                  className="w-full text-stone-500 text-sm font-medium py-2"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}