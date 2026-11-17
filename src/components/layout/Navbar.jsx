import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA } from '../../data/mockTngsData';

export default function Navbar({ onOpenInquiry }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      {/* Top Utility Action Bar */}
      <div className="bg-tngs-green text-white text-xs py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a href="tel:+256000000000" className="flex items-center gap-1.5 hover:text-tngs-mint transition-colors">
              <Phone size={13} />
              <span>+256 (0) 414 000 000</span>
            </a>
            <a href="mailto:info@northgreen.ac.ug" className="flex items-center gap-1.5 hover:text-tngs-mint transition-colors">
              <Mail size={13} />
              <span>info@northgreen.ac.ug</span>
            </a>
          </div>
          
          <div className="flex items-center gap-3 font-medium">
            <button 
              onClick={onOpenInquiry}
              className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all"
            >
              Inquire
            </button>
            <Link to="/admissions#process" className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full transition-all">
              Apply
            </Link>
            <Link to="/discover#mds-corner" className="text-tngs-mint hover:underline font-semibold flex items-center gap-1">
              MD's Corner <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-tngs-green flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            NG
          </div>
          <div>
            <span className="block font-serif text-lg font-bold text-tngs-green tracking-tight">
              The North Green School
            </span>
            <span className="block text-xs uppercase tracking-wider text-stone-500 font-sans">
              Kampala, Uganda
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Mega-Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAVIGATION_DATA.map((navItem) => (
            <div
              key={navItem.label}
              className="relative"
              onMouseEnter={() => setActiveDropdown(navItem.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-tngs-charcoal hover:text-tngs-green hover:bg-tngs-mint/30 transition-all">
                {navItem.label}
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeDropdown === navItem.label ? 'rotate-180 text-tngs-green' : 'text-stone-400'
                  }`}
                />
              </button>

              {/* Animated Mega Menu Dropdown */}
              <AnimatePresence>
                {activeDropdown === navItem.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                    className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-xl border border-stone-100 p-4 mt-1 z-50"
                  >
                    <p className="text-xs text-stone-500 pb-3 mb-2 border-b border-stone-100 font-medium">
                      {navItem.description}
                    </p>
                    <div className="flex flex-col gap-1">
                      {navItem.links.map((link) => (
                        <Link
                          key={link.title}
                          to={link.path}
                          onClick={() => setActiveDropdown(null)}
                          className="group/link p-2.5 rounded-xl hover:bg-tngs-mint/40 transition-all flex flex-col"
                        >
                          <span className="text-sm font-semibold text-tngs-charcoal group-hover/link:text-tngs-green flex items-center justify-between">
                            {link.title}
                            <ArrowRight size={13} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-tngs-green" />
                          </span>
                          <span className="text-xs text-stone-500 mt-0.5">{link.subtitle}</span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="bg-tngs-green hover:bg-tngs-lightGreen text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Schedule a Visit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-tngs-charcoal hover:bg-stone-100 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-b border-stone-200 px-6 py-6 overflow-y-auto max-h-[80vh]"
          >
            <div className="flex flex-col gap-6">
              {NAVIGATION_DATA.map((section) => (
                <div key={section.label} className="flex flex-col gap-2">
                  <span className="text-xs uppercase tracking-wider font-bold text-tngs-green">
                    {section.label}
                  </span>
                  <div className="flex flex-col gap-2 pl-2 border-l-2 border-tngs-mint">
                    {section.links.map((link) => (
                      <Link
                        key={link.title}
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-sm font-medium text-stone-700 hover:text-tngs-green py-1"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full bg-tngs-green text-white text-center py-3 rounded-full font-semibold shadow"
                >
                  Schedule a Visit
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}