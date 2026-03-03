import React from 'react';

export const Excellence = () => {
    return (
        <div className="py-24 bg-white border-t border-slate-100">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                    Our <span className="text-gold-500">Excellence</span>
                </h2>
                <p className="text-slate-500 text-lg">
                    Built on speed, transparency, and customer-first logistics solutions.
                </p>
            </div>

            {/* Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-gold-500 text-2xl font-black mb-4">01</div>
                        <h4 className="font-black text-slate-900 mb-3">Swift Delivery</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Industry-leading turnaround times for all services.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-gold-500 text-2xl font-black mb-4">02</div>
                        <h4 className="font-black text-slate-900 mb-3">End-to-End Tracking</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Full visibility from pickup to the final destination.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-gold-500 text-2xl font-black mb-4">03</div>
                        <h4 className="font-black text-slate-900 mb-3">Compliance & Documentation</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Accurate paperwork and regulatory support for smooth, delay-free transit.
                        </p>
                    </div>
                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-gold-500 text-2xl font-black mb-4">04</div>
                        <h4 className="font-black text-slate-900 mb-3">Global Network</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Reliable logistics coverage across key domestic and international trade routes.
                        </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <div className="text-gold-500 text-2xl font-black mb-4">05</div>
                        <h4 className="font-black text-slate-900 mb-3">Customer-Focused Support</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Dedicated assistance with timely updates and proactive communication.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
