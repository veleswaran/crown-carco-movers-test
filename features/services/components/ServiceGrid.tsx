import React from 'react';
import Link from 'next/link';
import { detailedServices } from '@/constants';

export const ServiceGrid = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {detailedServices.map((s) => (
                    <div key={s.title} className={`p-12 rounded-[3.5rem] border ${s.color} hover:shadow-2xl transition-all duration-500 group`}>
                        <div className="text-6xl mb-8 group-hover:scale-110 transition-transform inline-block">{s.icon}</div>
                        <h2 className="text-3xl font-black text-slate-900 mb-4">{s.title}</h2>
                        <p className="text-slate-500 text-lg mb-8 leading-relaxed">{s.desc}</p>
                        <ul className="space-y-3 mb-10">
                            {s.features.map((f) => (
                                <li key={f} className="flex items-center gap-3 text-slate-900 font-bold">
                                    <span className="text-gold-500">✓</span> {f}
                                </li>
                            ))}
                        </ul>
                        <Link href="/contact" className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-black hover:bg-gold-500 transition-colors">Request Quote</Link>
                    </div>
                ))}
            </div>
        </section>
    );
};
