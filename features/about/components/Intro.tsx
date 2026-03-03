import React from 'react';
import Image from 'next/image';

export const Intro = () => {
    return (
        <section className="py-24 bg-white border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2 animate-reveal">
                    <h2 className="text-4xl font-black text-slate-900 mb-8 uppercase tracking-tight">Our <span className="text-gold-500">History</span></h2>
                    <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                        <p>
                            Crown Cargo Movers entered the express logistics industry as a professionally managed company, built on reliability, efficiency, and customer trust. With strong operations across Cochin, Chennai, Palakkad, Coimbatore, and Tiruppur, we deliver dependable domestic and international logistics solutions tailored to diverse shipping needs.
                        </p>
                        <p>
                            We offer doorstep pickup with flexible scheduling to ensure a seamless shipping experience.
                        </p>
                        <p>
                            We focus on transparent processes, secure handling, and timely deliveries, giving our customers complete peace of mind while supporting both personal and business shipping requirements.
                        </p>
                    </div>
                </div>
                <div className="lg:w-1/2 animate-reveal delay-2">
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gold-500/10 rounded-xl -z-10 blur-xl"></div>
                        <Image
                            src="/crown.jpg"
                            className="rounded-xl shadow-2xl w-full h-[400px] object-fit"
                            alt="Logistics team"
                            width={1200}
                            height={400}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
