import React from 'react';
import { locations } from '@/constants';

export const Network = () => {
    return (
        <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gold-500">Network</span></h2>
                        <p className="text-slate-400 text-lg">Our network includes global partners such as DHL, FedEx, UPS, Aramex, along with our own Crown Cargo Movers logistics network..</p>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 text-right">
                        <p className="text-gold-500 font-bold uppercase tracking-widest text-xs mb-1">Domestic Strength</p>
                        <p className="text-2xl font-black">Agents across the country</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {locations.map((loc) => (
                        <div
                            key={loc.city}
                            className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center text-white group transform transition-all duration-500 ease-out hover:scale-110 hover:-translate-y-2 hover:border-gold-500"
                        >
                            <h3 className="text-xl font-bold mb-1 transition-colors duration-500 ease-out group-hover:text-gold-500">
                                {loc.city}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
