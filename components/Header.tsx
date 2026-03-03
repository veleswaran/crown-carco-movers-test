"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { NavLink } from './NavLink';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { navItems } from '../constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isSolid = true; // Always solid as requested

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isSolid
        ? 'bg-white shadow-md py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Logo scrolled={isSolid} />
          </div>

          <div className="hidden md:flex items-center  space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                scrolled={isSolid}
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-white px-5 py-2.5 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-gold-500/20"
            >
              Ship Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md transition-colors ${isSolid ? 'text-slate-800' : 'text-white'
                }`}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-full bg-current ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
};