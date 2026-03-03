"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  scrolled: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({ href, children, scrolled }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  // Determine active/hover colors based on scroll state
  const activeColor = scrolled ? 'text-gold-600' : 'text-gold-400';
  const inactiveColor = scrolled ? 'text-slate-800 hover:text-gold-600' : 'text-lg text-white hover:text-gold-400';

  return (
    <Link
      href={href}
      className={`group relative py-2 px-1 font-semibold transition-colors duration-300 inline-block cursor-pointer ${isActive ? activeColor : inactiveColor
        }`}
    >
      {children}
      {/* Animated underline effect */}
      <span className={`absolute bottom-0 left-0 h-0.5 bg-gold-500 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
        }`}></span>
    </Link>
  );
};