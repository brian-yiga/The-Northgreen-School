import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Calendar } from 'lucide-react';
import { EDITORIAL_EASE } from '../motion/MotionPrimitives';

export default function InquiryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    parentName: '',
    phone: '',
    email: '',
    gradeLevel: 'Cambridge Early Years',
    visitType: 'Private Campus Tour',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={handleResetAndClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.25, ease: EDITORIAL_EASE }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
          >
            <button
              onClick={handleResetAndClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-stone-600 transition-colors"
            >
              <X size={18} />
            </button>

            {!submitted ? (
              <>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-tngs-green bg-tngs-mint/60 px-3 py-1 rounded-full">
                  <Calendar size={13} /> Admissions & Visits
                </span>
                <h3 className="mt-3 font-serif text-2xl sm:text-3xl font-bold text-tngs-charcoal">
                  Inquire or Schedule a Visit
                </h3>
                <p className="mt-1.5 text-sm text-stone-600">
                  Share a few details below and our Admissions team will reach out within one school day.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Parent / Guardian Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      placeholder="e.g. Sarah Mukasa"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-tngs-green"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+256 7XX XXX XXX"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-tngs-green"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="parent@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-tngs-green"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Child’s Entry Level
                      </label>
                     <select
                        value={formData.gradeLevel}
                        onChange={(e) => setFormData({ ...formData, gradeLevel: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-tngs-green"
                      >
                        <option>Cambridge Early Years</option>
                        <option>Primary Section (Years 1 – 6)</option>
                        <option>Secondary Section (Years 7 – 11)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        How Can We Help?
                      </label>
                      <select
                        value={formData.visitType}
                        onChange={(e) => setFormData({ ...formData, visitType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 text-sm bg-white focus:outline-none focus:border-tngs-green"
                      >
                        <option>Private Campus Tour</option>
                        <option>Open Day Registration</option>
                        <option>Admissions & Fee Structure</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-tngs-green hover:bg-tngs-lightGreen text-white font-semibold py-3.5 rounded-full shadow-md transition-colors mt-2"
                  >
                    Submit Inquiry
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center">
                <div className="w-14 h-14 rounded-full bg-tngs-mint text-tngs-green flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={30} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-tngs-charcoal">
                  Thank you, {formData.parentName || 'Parent'}!
                </h3>
                <p className="mt-2 text-sm text-stone-600 max-w-sm mx-auto leading-relaxed">
                  We have received your request for <strong>{formData.visitType}</strong> ({formData.gradeLevel}). Our Admissions Office will contact you shortly.
                </p>
                <button
                  onClick={handleResetAndClose}
                  className="mt-6 bg-tngs-green text-white font-semibold text-sm px-8 py-3 rounded-full hover:bg-tngs-lightGreen transition-colors"
                >
                  Back to TNGS
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}