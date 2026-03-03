import React from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/constants';

export const Testimonials = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">Our Clients & <span className="text-gold-500">Testimonials</span></h2>
                    <p className="text-slate-500 text-lg">Trusted by thousands of customers for safe and timely deliveries.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Truck Image */}
                    <div className="lg:w-1/3">
                        <Image
                            src="/hero-truck-sunrise.jpg"
                            className="rounded-[3rem] shadow-2xl object-cover w-full aspect-[4/5]"
                            alt="Crown Cargo Delivery Truck"
                            width={500}
                            height={600}
                        />
                    </div>

                    {/* Testimonials Grid */}
                    <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {TESTIMONIALS.map((client) => (
                            <div key={client.name} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white">
                                        <Image
                                            src={client.gender === 'm' ? '/logos/male-logo.png' : '/logos/female-logo.jpg'}
                                            alt={client.name}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 leading-tight">{client.name}</h4>
                                        <p className="text-xs text-slate-500 font-bold uppercase tracking-wide">{client.city}</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed italic">
                                    &quot;{client.quote}&quot;
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
