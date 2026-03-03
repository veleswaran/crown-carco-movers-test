import React from 'react';
import { homePageServices } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

export const ServicesSection = () => {
  return (
    <section id="services" className="py-2 bg-slate-50 relative">
       <div className="relative w-full h-[600px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/main-image.jpg"  // use your second image path
          alt="Global Logistics"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/10" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 md:px-12">
          <div className="max-w-xl text-white">

            <span className="inline-block bg-white text-red-600 text-xs font-bold px-3 py-1 mb-5">
              PRECISION WITHOUT COMPROMISE
            </span>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight">
              Your cargo, Our responsibility <br /> Delivered worldwide.
            </h1>

            <blockquote className="mt-6 italic text-gray-300 border-l-4 border-gold-500 pl-4">
              “Logistics is the art of turning promises into performance.”
              <br />
              <span className="not-italic text-gold-400 font-semibold">
                — Crown Cargo Movers
              </span>
            </blockquote>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-black font-bold px-6 py-3 transition"
            >
              Ship Now →
            </Link>

          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Our <span className="text-gold-500">Services</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">Comprehensive logistics solutions tailored for speed and reliability</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homePageServices.map((service) => (
            <div key={service.title} className={`${service.color} p-10 rounded-[2.5rem] border hover:shadow-2xl transition-all duration-500 group animate-reveal ${service.delay}`}>
              <div className={`w-20 h-20 rounded-3xl ${service.color.split(' ').slice(0, 2).join(' ')} flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight group-hover:text-gold-500 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-500 leading-relaxed mb-8 min-h-[100px]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};