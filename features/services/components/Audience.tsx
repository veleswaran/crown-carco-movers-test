import React from 'react';

export const Audience = () => {
    return (
        <div className="py-24 bg-slate-50 border-t border-slate-100">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">
                    Who <span className="text-gold-500">We Serve</span>
                </h2>
                <p className="text-slate-500 text-lg">
                    Tailored logistics solutions for businesses and individuals of every scale.
                </p>
            </div>

            {/* Audience Cards */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">SMEs</h4>
                        <p className="text-slate-500 text-sm">
                            Scalable logistics support designed for growing small and medium enterprises.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">Exporters & Importers</h4>
                        <p className="text-slate-500 text-sm">
                            Reliable international shipping with complete customs and compliance handling.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">E-commerce Sellers</h4>
                        <p className="text-slate-500 text-sm">
                            Fast fulfillment, inventory movement, and last-mile delivery for online businesses.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">Corporate Clients & Co-loaders</h4>
                        <p className="text-slate-500 text-sm">
                            High-volume logistics and consolidated freight solutions for enterprise clients.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">Individuals & Families</h4>
                        <p className="text-slate-500 text-sm">
                            Secure personal shipments, relocations, and international parcel services.
                        </p>
                    </div>

                    <div className="bg-white border border-slate-100 rounded-3xl p-8 hover:shadow-xl transition-all">
                        <h4 className="font-black text-slate-900 mb-2">Students & Walk-in Customers</h4>
                        <p className="text-slate-500 text-sm">
                            Affordable and easy shipping support for students and everyday customers.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};
