import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { NAVIGATION_DATA } from '../../data/mockTngsData';
import logoImage from '../../assets/images/TNGS - Landscape Logo.png';
import navBarBg from '../../assets/images/navBar-bg.png';

export default function Navbar({ onOpenInquiry }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Helper to get the base page route (e.g., "/discover") even if links have hashes
  const getBaseRoute = (navItem) => {
    if (navItem.path) return navItem.path.split('#')[0];
    if (navItem.links && navItem.links.length > 0) {
      return navItem.links[0].path.split('#')[0];
    }
    return '/';
  };

  // Navigate to the page and force scroll to the very top so the Hero is visible
  const handleNavClick = (e, targetPath) => {
    e.preventDefault();
    setActiveDropdown(null);
    setMobileMenuOpen(false);

    const cleanPath = targetPath.split('#')[0];
    navigate(cleanPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
      {/* Top Utility Action Bar */}
      <div className="relative bg-tngs-green text-white text-xs py-2 px-4 sm:px-8 overflow-hidden shadow-inner">
        <img
          src={navBarBg}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none opacity-90"
        />
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-6">
            <a
              href="tel:+256000000000"
              className="flex items-center gap-1.5 hover:text-tngs-mint transition-colors cursor-pointer"
            >
              <Phone size={13} />
              <span>+256 (0) 414 000 000</span>
            </a>
            <a
              href="mailto:info@northgreen.ac.ug"
              className="flex items-center gap-1.5 hover:text-tngs-mint transition-colors cursor-pointer"
            >
              <Mail size={13} />
              <span>info@northgreen.ac.ug</span>
            </a>
          </div>

          <div className="flex items-center gap-3 font-medium">
            <button
              onClick={onOpenInquiry}
              className="bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-xs px-3.5 py-1 rounded-full transition-all shadow-xs cursor-pointer"
            >
              Inquire
            </button>
            <Link
              to="/admissions#process"
              className="bg-white/15 hover:bg-white/25 border border-white/25 backdrop-blur-xs px-3.5 py-1 rounded-full transition-all shadow-xs cursor-pointer"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={(e) => handleNavClick(e, '/')}
          className="flex items-center bg-tngs-green px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl shadow-sm hover:brightness-105 transition-all group cursor-pointer"
        >
          <img
            src={logoImage}
            alt="The North Green School"
            className="h-8 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links with Mega-Menu */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAVIGATION_DATA.map((navItem) => {
            const baseRoute = getBaseRoute(navItem);
            const isOpen = activeDropdown === navItem.label;

            return (
              <div
                key={navItem.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(navItem.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={baseRoute}
                  onClick={(e) => handleNavClick(e, baseRoute)}
                  className={`group/nav flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                    isOpen
                      ? 'bg-tngs-green text-white shadow-xs'
                      : 'text-tngs-charcoal hover:bg-tngs-green hover:text-white'
                  }`}
                >
                  {navItem.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-white'
                        : 'text-stone-400 group-hover/nav:text-white'
                    }`}
                  />
                </Link>

                {/* Animated Mega Menu Dropdown */}
                <AnimatePresence>
                  {isOpen && (
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
                            className="group/link p-2.5 rounded-xl hover:bg-tngs-green transition-all flex flex-col cursor-pointer"
                          >
                            <span className="text-sm font-semibold text-tngs-charcoal group-hover/link:text-white flex items-center justify-between transition-colors">
                              {link.title}
                              <ArrowRight
                                size={13}
                                className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all text-white"
                              />
                            </span>
                            <span className="text-xs text-stone-500 group-hover/link:text-tngs-mint mt-0.5 transition-colors">
                              {link.subtitle}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="bg-tngs-green hover:bg-tngs-lightGreen text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Schedule a Visit
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-tngs-charcoal hover:bg-stone-100 transition-colors cursor-pointer"
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
              {NAVIGATION_DATA.map((section) => {
                const baseRoute = getBaseRoute(section);
                return (
                  <div key={section.label} className="flex flex-col gap-2">
                    <Link
                      to={baseRoute}
                      onClick={(e) => handleNavClick(e, baseRoute)}
                      className="text-xs uppercase tracking-wider font-bold text-tngs-green hover:bg-tngs-green hover:text-white px-2 py-1 rounded-md w-fit transition-colors cursor-pointer"
                    >
                      {section.label}
                    </Link>
                    <div className="flex flex-col gap-2 pl-2 border-l-2 border-tngs-mint">
                      {section.links.map((link) => (
                        <Link
                          key={link.title}
                          to={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="text-sm font-medium text-stone-700 hover:bg-tngs-green hover:text-white px-2.5 py-1.5 rounded-lg transition-colors cursor-pointer"
                        >
                          {link.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
              <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiry();
                  }}
                  className="w-full bg-tngs-green text-white text-center py-3 rounded-full font-semibold shadow cursor-pointer"
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