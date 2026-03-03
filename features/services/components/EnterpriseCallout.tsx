import React from 'react';
import Link from 'next/link';

export const EnterpriseCallout = () => {
    return (
        <section className="py-24 bg-gold-500 text-white text-center px-4 relative overflow-hidden">
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-black mb-8">Power Your Business with Tailored Logistics?</h2>
                <p className="text-xl text-white/90 mb-12">Custom shipping solutions designed for high-volume enterprises, exporters, and e-commerce businesses. Dedicated account managers, flexible scheduling, and priority handling ensure your operations never miss a beat.</p>
                <Link href="/contact" className="bg-slate-900 text-white px-12 py-5 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all shadow-2xl">Get a Custom Quote</Link>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        </section>
    );
};
