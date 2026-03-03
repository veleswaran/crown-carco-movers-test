import React from 'react';
import { navItems } from '../constants';
import Link from 'next/link';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 z-[100] md:hidden transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
    >
      <div
        className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        onClick={onClose}
      />

      <div className="absolute right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl flex flex-col p-8">
        <div className="flex justify-end mb-12 ">
          <button onClick={onClose} className="text-slate-400 p-2">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-3xl font-black text-slate-800 hover:text-gold-500 transition-colors"
              onClick={onClose}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-8 border-t border-slate-100">
            <Link
              href="/contact"
              onClick={onClose}
              className="block w-full bg-gold-500 text-white text-center font-black py-5 rounded-2xl shadow-lg shadow-gold-500/30"
            >
              Ship Now
            </Link>
          </div>
        </nav>

        <div className="mt-auto pt-8 border-t border-slate-100">
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-2">Need help?</p>
          <p className="text-slate-900 font-black text-xl">+91 (Customer Support)</p>
        </div>
      </div>
    </div>
  );
};