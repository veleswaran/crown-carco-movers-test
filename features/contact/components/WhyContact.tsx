import React from 'react';

export const WhyContact = () => {
    return (
        <div className="py-24 bg-white border-t border-slate-100">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 px-4">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                    Why <span className="text-gold-500">Contact Us?</span>
                </h2>
                <p className="text-slate-500 text-lg">
                    Get fast answers, accurate quotes, and real-time shipment assistance.
                </p>
            </div>

            {/* Contact Reasons */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">💰</div>
                        <h4 className="font-black text-slate-900 mb-3">Need a Quote?</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Get a tailored shipping rate for UAE, UK, USA, Singapore, Malaysia & more.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">❓</div>
                        <h4 className="font-black text-slate-900 mb-3">Have a Query?</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Ask about policies, restrictions, cargo acceptance, or customs procedures.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">📦</div>
                        <h4 className="font-black text-slate-900 mb-3">Track Your Shipment</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Not sure about your shipment status? Share your AWB or Reference Number and we’ll confirm it.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
