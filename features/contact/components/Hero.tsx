import React from 'react';

export const Hero = () => {
    return (
        <section className="py-24 bg-slate-900 text-white text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gold-500/20 via-transparent to-transparent" />
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter animate-reveal">
                    Global <span className="text-gold-500">Network</span>
                </h1>
                <p className="text-md text-slate-400 animate-reveal delay-1 mb-10">
                    Whether you’re booking a shipment, tracking cargo, or need logistics advice — reach out to our team anytime. We respond quickly and guide you at every step.
                </p>
                <div className="flex gap-6 justify-center animate-reveal delay-2">
                    <a href="tel:+918428640709" className="bg-gold-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-gold-600 transition-colors flex items-center gap-2">
                        📞 Call Now
                    </a>
                    <a href="https://wa.me/918428640709" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors flex items-center gap-2">
                        💬 WhatsApp Now
                    </a>
                </div>
            </div>
        </section>
    );
};
