import React from 'react';

export const Header = () => {
    return (
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter animate-reveal">
                    Our <span className="text-gold-500">Solutions</span>
                </h1>
                <p className="text-md text-slate-400 animate-reveal delay-1 mb-10">
                    Our logistics solutions built for speed, visibility, and global reach.
                </p>
            </div>
        </section>
    );
};
