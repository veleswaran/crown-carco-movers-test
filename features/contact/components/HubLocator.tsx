"use client";

import React, { useState } from 'react';
import { locations } from "@/constants";
import { Search, Map as MapIcon } from 'lucide-react';

export const HubLocator = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [result, setResult] = useState<typeof locations[0] | null>(null);

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const query = searchQuery.toLowerCase().trim();
        if (!query) return;

        const found = locations.find(loc =>
            loc.city.toLowerCase().includes(query)
        );

        setResult(found || null);
        setHasSearched(true);
    };

    return (
        <div className="flex flex-col h-full">
            <h2 className="text-4xl font-black text-slate-900 mb-6 font-display">Hub <span className="text-gold-500">Locator</span></h2>

            <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 flex-grow shadow-xl relative overflow-hidden">

                {/* Search Header */}
                <div className="max-w-xl mx-auto mb-12 text-center">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Find Regular Branches</p>
                    <form onSubmit={handleSearch} className="relative group">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Enter City name (e.g., Chennai, Tiruppur)"
                            className="w-full p-6 pl-8 pr-20 bg-white border-2 border-slate-100 rounded-3xl outline-none focus:ring-4 focus:ring-gold-500/10 focus:border-gold-500 font-bold shadow-xl transition-all placeholder:text-slate-300"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-3 bottom-3 bg-gold-500 hover:bg-gold-600 text-white px-6 rounded-2xl transition-all shadow-lg shadow-gold-500/30 flex items-center justify-center group-hover:scale-[1.02]"
                        >
                            <Search size={22} className="stroke-[3]" />
                        </button>
                    </form>
                </div>

                {/* Results Section */}
                <div className="space-y-8 min-h-[400px]">
                    {!hasSearched ? (
                        <div className="h-full flex flex-col items-center justify-center text-center py-20 opacity-40">
                            <div className="w-20 h-20 bg-slate-200 rounded-3xl mb-6 flex items-center justify-center text-slate-400">
                                <MapIcon size={40} />
                            </div>
                            <p className="text-slate-500 font-bold text-lg">Search for a city to view branch data</p>
                        </div>
                    ) : result ? (
                        <div className="animate-reveal space-y-8">

                            {/* Integrated Map */}
                            <div className="relative h-[400px] rounded-[3rem] overflow-hidden border-4 border-white shadow-2xl bg-slate-200">
                                <iframe
                                    key={result.city}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                    src={result.mapUri}
                                    className="absolute inset-0"
                                ></iframe>
                            </div>
                        </div>
                    ) : (
                        <div className="animate-reveal text-center py-20 bg-white rounded-[2rem] border border-slate-200 shadow-inner">
                            <div className="text-6xl mb-6">📍</div>
                            <h4 className="text-2xl font-black text-slate-900 mb-2">Branch Not Found</h4>
                            <p className="text-slate-500 font-bold max-w-sm mx-auto">
                                We couldn&apos;t find a branch in &quot;<span className="text-slate-900">{searchQuery}</span>&quot;. <br />
                                Try searching for Chennai, Tiruppur, or Coimbatore.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
