import React from 'react';

export const ServicesNarrative = () => {
    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-black text-slate-900 mb-6">A One-Stop <span className="text-gold-500">Logistics Shop</span></h2>
                    <p className="text-slate-500 text-lg">We aim to provide comprehensive solutions for all your express delivery needs while maintaining the highest standards of service.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                        <div className="text-4xl mb-6">📦</div>
                        <h3 className="text-xl font-black mb-4">Express Services</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Regular express service for letters and parcels, re-mailing service for huge numbers of mailers, and door-to-door cargo for commercial shipments.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                        <div className="text-4xl mb-6">🌍</div>
                        <h3 className="text-xl font-black mb-4">Export & Import Solutions</h3>
                        <p className="text-slate-500 text-sm leading-relaxed">Complete export and import handling including documentation, customs coordination, and international delivery.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                        <div className="text-4xl mb-6">⛴️</div>
                        <h3 className="text-xl font-black mb-4">Cargo & Freight</h3>
                        <p className="text-slate-500 text-sm leading-relaxed"> We offer air freight and sea freight solutions with door-to-door and port-to-port options through a reliable global network.</p>
                    </div>
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200">
                        <div className="text-4xl mb-6">🛡️</div>
                        <h3 className="text-xl font-black mb-4">Compliance & Responsibility</h3>
                        <p className="text-slate-500 text-sm leading-relaxed"> Ensuring accurate documentation, customs compliance, and regulatory adherence for every shipment.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
