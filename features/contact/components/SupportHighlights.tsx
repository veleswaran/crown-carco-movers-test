import React from 'react';

export const SupportHighlights = () => {
    return (
        <div className="py-20 bg-slate-900 rounded-2xl">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 px-4">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                    Quick <span className="text-gold-500">Support Highlights</span>
                </h2>
                <p className="text-slate-300 text-lg">
                    Always-on assistance to keep your shipments moving without delays.
                </p>
            </div>

            {/* Highlights */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">🕒</div>
                        <h4 className="font-black text-white mb-2">24×7 Tracking Support</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Real-time shipment updates via WhatsApp, Email & Call.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">✈️</div>
                        <h4 className="font-black text-white mb-2">Export / Import Assistance</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Air & Sea freight guidance with proactive tracking support.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">🏢</div>
                        <h4 className="font-black text-white mb-2">High-Volume Assistance</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Expert handling for large shipments with priority coordination.
                        </p>
                    </div>

                    <div className="bg-slate-800 border border-slate-700 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-3xl mb-4">⚡</div>
                        <h4 className="font-black text-white mb-2">Urgent Shipment Support</h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Priority handling and fast resolution for time-critical deliveries.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
