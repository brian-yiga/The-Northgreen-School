import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Temporary Home Placeholder Component (until Phase 3)
function HomePlaceholder() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-stone-50">
      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-tngs-green mb-4">
        At TNGS, learning begins with curiosity.
      </h1>
      <p className="text-stone-600 max-w-xl text-lg mb-8">
        We are building a fully fledged, Montcrest-inspired digital experience for The North Green School.
      </p>
      <div className="p-6 bg-white rounded-2xl shadow-md border border-stone-200">
        <p className="text-sm font-semibold text-tngs-green">Phase 2 Header & Footer successfully loaded!</p>
      </div>
    </div>
  );
}

export default function App() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white text-tngs-charcoal font-sans selection:bg-tngs-mint selection:text-tngs-green">
        <Navbar onOpenInquiry={() => setInquiryModalOpen(true)} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePlaceholder />} />
            <Route path="*" element={<HomePlaceholder />} />
          </Routes>
        </main>

        <Footer />

        {/* Inquiry Modal Placeholder */}
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