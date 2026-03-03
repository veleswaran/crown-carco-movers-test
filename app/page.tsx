"use client";

import React from "react";
import Link from "next/link";
import DrivingScene from "@/components/DrivingScene";
import { WelcomeSection } from "@/components/WelcomeSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ContactSection } from "@/components/ContactSection";
import { usePathname } from "next/navigation";

export default function Home() {
  const scrollToContent = () => {
    const welcomeSection = document.getElementById("welcome-section");
    if (welcomeSection) {
      welcomeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const pathname = usePathname();
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        id="home"
        className="relative py-4 pb-32 md:h-auto md:py-32 flex items-center justify-center overflow-hidden"
      >
        <DrivingScene key={pathname} />

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-block mb-8 px-6 py-3 bg-gold-500/15 backdrop-blur-md border border-gold-500/30 rounded-full animate-reveal mx-auto">
            <span className="text-gold-500 text-xs font-black tracking-[0.2em] uppercase block">
              Redefining Logistics Excellence
            </span>
          </div>

          <h1 className="text-2xl md:text-6xl font-black text-white mb-8 tracking-tighter leading-[1.1] animate-reveal delay-1">
            MOVING YOUR DREAMS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              FAR AND WIDE
            </span>
          </h1>

          <p className="text-md text-slate-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-90 animate-reveal delay-2">
            Crown Cargo Movers provides end-to-end logistics solutions, reducing transit delays, simplifying global trade, and delivering predictable logistics for growing businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-reveal delay-3">
            <Link
              href="/contact"
              className="group bg-gold-500 hover:bg-gold-600 text-white font-bold py-2 px-10 rounded-2xl transition-all duration-300 shadow-2xl shadow-gold-500/40 flex items-center justify-center gap-3 text-md z-50 pointer-events-auto"
            >
              Start Shipping
              <svg
                className="w-6 h-6 group-hover:translate-x-2 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>

            <Link
              href="/tracking"
              className="bg-white/5 backdrop-blur-md hover:bg-white/10 text-white border border-white/20 font-bold py-2 px-10 rounded-2xl transition-all duration-300 text-md z-50 pointer-events-auto"
            >
              Track Consignment
            </Link>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={scrollToContent}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white hover:text-gold-500 transition-all duration-300"
          aria-label="Scroll down"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] opacity-50 text-center">
              Explore
            </span>
            <div className="w-8 h-12 rounded-full border-2 border-white/20 flex justify-center p-2">
              <div className="w-1 h-3 bg-white rounded-full animate-bounce" />
            </div>
          </div>
        </button>
      </section>

      {/* Main Landing Page Content */}
      <div id="welcome-section" className="mt-24">
        <WelcomeSection />
      </div>

      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
