import React from 'react';
import { faqs } from '@/constants';

export const FAQ = () => {
    return (
        <div className="pt-24 border-t border-slate-100">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="text-4xl font-black text-slate-900 mb-4">
                    Common <span className="text-gold-500">Questions</span>
                </div>
                <div className="text-slate-500">
                    Immediate answers to our most frequent inquiries.
                </div>
            </div>

            {/* FAQ Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {faqs.map((faq, i) => (
                    <div
                        key={i}
                        className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100"
                    >
                        <div className="font-black text-slate-900 mb-3">
                            {faq.q}
                        </div>
                        <div className="text-slate-500 text-sm leading-relaxed">
                            {faq.a}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
