import React from 'react';
import { locations } from '@/constants';

export const Network = () => {
    return (
        <section className="py-24 bg-slate-100 text-black relative overflow-hidden mb-10 rounded-2xl">
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl text-center mx-auto">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">Our <span className="text-gold-500">Branches</span></h2>
                        <p className="text-slate-400 text-lg">Our network includes global partners such as DHL, FedEx, UPS, Aramex, along with our own Crown Cargo Movers logistics network..</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {locations.map((loc) => (
                        <div
                            key={loc.city}
                            className="
                                relative p-6 rounded-2xl text-center text-white group
                                bg-gradient-to-br from-zinc-900 via-black to-zinc-800
                                border border-white/10 backdrop-blur-md
                                transform transition-all duration-300 ease-out
                                hover:scale-110 hover:-translate-y-2
                                hover:border-gold-500
                                hover:shadow-2xl hover:shadow-gold-500/30
                                z-10 hover:z-20
                            "
                        >
                            <h3 className="relative text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-gold-500">
                                {loc.city}
                            </h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
