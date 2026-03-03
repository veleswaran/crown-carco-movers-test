"use client";
import { timelineSteps } from '@/constants'
import React, { useState } from 'react';

export default function Tracking() {
    const [trackingId, setTrackingId] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [showResult, setShowResult] = useState(false);

    const handleTrack = (e: React.FormEvent) => {
        e.preventDefault();
        if (!trackingId) return;
        setIsSearching(true);
        setTimeout(() => {
            setIsSearching(false);
            setShowResult(true);
        }, 800);
    };

    return (
        <div className="pt-20 bg-slate-950 min-h-screen text-white">
            <section className="py-24 px-4 max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black mb-6">Track Your <span className="text-gold-500">Shipment</span></h1>
                    <p className="text-slate-400 text-md">Enter your Waybill / Tracking ID for 100% real-time visibility.</p>
                </div>

                <div className="bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                    <form onSubmit={handleTrack} className="flex flex-col md:flex-row gap-4 mb-12">
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            aria-label="Waybill / Tracking ID"
                            className="flex-grow bg-white/10 border border-white/10 text-white px-8 py-5 rounded-2xl focus:outline-none focus:ring-2 focus:ring-gold-500 font-bold text-xl"
                        />
                        <button disabled={isSearching} className="bg-gold-500 hover:bg-gold-600 text-white font-black py-5 px-12 rounded-2xl transition-all shadow-xl shadow-gold-500/20 text-xl disabled:opacity-50 disabled:cursor-not-allowed">
                            Locate Now
                        </button>
                    </form>

                    {showResult && (
                        <div className="animate-reveal space-y-12">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-white/5 rounded-3xl border border-white/5">
                                <div>
                                    <span className="text-[10px] font-black uppercase text-gold-500 tracking-widest">Weight</span>
                                    <p className="text-lg font-bold">2.5 kg</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-gold-500 tracking-widest">Service</span>
                                    <p className="text-lg font-bold">Express</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-gold-500 tracking-widest">Destination</span>
                                    <p className="text-lg font-bold">Mumbai, MH</p>
                                </div>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-gold-500 tracking-widest">Consignee</span>
                                    <p className="text-lg font-bold">H. Verma</p>
                                </div>
                            </div>

                            <div className="space-y-0 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-white/10">
                                {timelineSteps.map((step, index) => (
                                    <div key={index} className="flex gap-6 relative pb-12 animate-reveal" style={{ animationDelay: `${index * 0.15}s` }}>
                                        <div className={`w-6 h-6 rounded-full relative z-10 flex-shrink-0 flex items-center justify-center ${step.active ? 'bg-gold-500 shadow-xl shadow-gold-500/40 scale-125' : 'bg-slate-800'}`}>
                                            {step.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
                                        </div>
                                        <div>
                                            <p className={`font-black text-xl ${step.active ? 'text-gold-500' : 'text-white'}`}>{step.status}</p>
                                            <p className="text-slate-400 font-medium">{step.location}</p>
                                            <p className="text-slate-500 text-sm italic mt-1 font-bold">{step.time}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
