import React from 'react';

export const Hero = () => {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500 via-transparent to-transparent scale-150" />
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter animate-reveal delay-1">
                    Global Reach, <span className="text-gold-500">Local Care</span>
                </h1>
                <p className="text-md text-slate-400 max-w-3xl mx-auto leading-relaxed animate-reveal delay-2 font-bold">
                    Providing professional export, import, air, and sea freight solutions with real-time tracking and dedicated customer support
                </p>
            </div>
        </section>
    );
};
