import React from 'react';
import { values } from '@/constants';

export const Values = () => {
    return (
        <section className="py-24 max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Focus & <span className="text-gold-500">Vision</span></h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((v) => (
                    <div key={v.title} className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:shadow-2xl transition-all duration-500 group">
                        <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{v.icon}</div>
                        <h4 className="text-xl font-black text-slate-900 mb-4 group-hover:text-gold-500">{v.title}</h4>
                        <p className="text-slate-500 leading-relaxed text-sm">{v.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
