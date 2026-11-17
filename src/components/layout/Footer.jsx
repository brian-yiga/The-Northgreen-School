import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';
import { NAVIGATION_DATA } from '../../data/mockTngsData';
import logoImage from '../../assets/images/TNGS - Landscape Logo.png';

export default function Footer() {
  return (
    <footer className="bg-tngs-green text-white pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* School Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="inline-block group">
              <img
                src={logoImage}
                alt="The North Green School"
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </Link>
            <p className="text-stone-300 text-sm max-w-sm leading-relaxed">
              A caring, student-centred Cambridge International school in Kampala where learning begins with curiosity, nature, and community.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Website">
                <Globe size={18} />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Social">
                <Share2 size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Columns */}
          {NAVIGATION_DATA.slice(0, 3).map((col) => (
            <div key={col.label} className="flex flex-col gap-3">
              <h3 className="font-semibold text-tngs-mint text-sm uppercase tracking-wider">
                {col.label}
              </h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      to={link.path}
                      className="text-stone-300 hover:text-white text-sm transition-colors"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Contact & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-stone-400">
          <div className="flex flex-wrap items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin size={14} className="text-tngs-mint" /> Ntinda, Kampala, Uganda
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={14} className="text-tngs-mint" /> +256 (0) 414 000 000
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={14} className="text-tngs-mint" /> info@northgreen.ac.ug
            </span>
          </div>
          <div>
            © {new Date().getFullYear()} The North Green School. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}