import React from 'react';
import Image from 'next/image';
import { featuredCountries, partners } from '@/constants';

export const WelcomeSection: React.FC = () => {
  return (
    <>
      <section className="py-16 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            OUR DELIVERY PARTNERS
          </h2>

          {/* Moving logos */}
          <div className="relative overflow-hidden">
            <div className="flex gap-14 animate-scroll-left">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="min-w-[160px] flex items-center justify-center"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={140}
                    height={70}
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Welcome Message */}
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Welcome to <span className="text-gold-500">Crown Cargo Movers</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Trusted by exporters, importers, and e-commerce businesses, Crown Cargo Movers specializes in dependable domestic and international logistics solutions designed for scale and speed.
              </p>
            </div>

            {/* Flags / Global Presence */}
            <div className="lg:w-1/2 w-full">
              <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-white">
                <p className="text-sm font-black text-slate-900 uppercase tracking-widest mb-8 text-center lg:text-left">
                  SPECIAL RATES FOR
                </p>
                <div className="flex flex-wrap justify-center lg:justify-between gap-8 sm:gap-4 mt-8 animate-reveal delay-2">
                  {featuredCountries.map((c) => (
                    <div key={c.name} className="flex flex-col items-center group cursor-default">
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <div key={c.code} className="absolute inset-0 bg-gold-500/10 rounded-full scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <Image
                          src={`/flags/${c.code}`}
                          alt={`${c.name} flag`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg ring-1 ring-slate-100"
                        />
                      </div>
                      <span className="text-xs font-bold text-slate-600 group-hover:text-gold-500 transition-colors">
                        {c.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};