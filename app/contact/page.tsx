import React from 'react';
import CargoEnquiry from '@/components/CargoEnquiry';
import { Hero } from '@/features/contact/components/Hero';
import { HubLocator } from '@/features/contact/components/HubLocator';
import { SupportHighlights } from '@/features/contact/components/SupportHighlights';
import { WhyContact } from '@/features/contact/components/WhyContact';
import { FAQ } from '@/features/contact/components/FAQ';
import { Network } from '@/features/contact/components/Network';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="pt-20 bg-white min-h-screen">
            <Hero />
            <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <h1 className="text-3xl md:text-5xl font-black mb-8 tracking-tighter animate-reveal text-center">
                        Contact  <span className="text-gold-500">Us</span>
                    </h1>
                    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-lg">
                        Share your requirements, and our team will connect with you to provide the right solutions and Guidance.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center">

                        {/* Address */}
                        <div className="group">
                            <div className="w-16 h-16 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                <MapPin size={32} />
                            </div>
                            <h6 className="text-xl font-bold mb-3 text-slate-900">Our Address</h6>
                            <p className="text-gray-600 leading-relaxed">
                                435/3A, Saminathapuram, Periyar Colony, Tiruppur – 641604
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="group">
                            <div className="w-16 h-16 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                <Phone size={32} />
                            </div>
                            <h6 className="text-xl font-bold mb-3 text-slate-900">Our Number</h6>
                            <p className="text-gray-600">
                                <Link href="tel:+918428640709" className="hover:text-gold-500 transition-colors font-semibold">
                                    +91 84286 40709
                                </Link>
                                <Link href="tel:+918428640709" className="hover:text-gold-500 transition-colors block font-semibold">
                                    +91 88385 77039
                                </Link>
                            </p>
                        </div>

                        {/* Email */}
                        <div className="group">
                            <div className="w-16 h-16 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                <Mail size={32} />
                            </div>
                            <h6 className="text-xl font-bold mb-3 text-slate-900">Our Email</h6>
                            <p className="text-gray-600">
                                <a
                                    href="mailto:admin@crowncargomoverss.com"
                                    className="hover:text-gold-500 transition-colors font-semibold"
                                >
                                    admin@crowncargomoverss.com
                                </a>
                            </p>
                        </div>

                        {/* Opening Time */}
                        <div className="group">
                            <div className="w-16 h-16 bg-gold-50 text-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold-500 group-hover:text-white transition-all duration-300">
                                <Clock size={32} />
                            </div>
                            <h6 className="text-xl font-bold mb-3 text-slate-900">Opening Time</h6>
                            <div className="text-gray-600 leading-relaxed font-medium">
                                <p>Mon-Sat: 9:00 AM - 11:00 PM</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 my-32">
                    <CargoEnquiry />
                    <HubLocator />
                </div>
                <Network />
                <SupportHighlights />
                <WhyContact />
                <FAQ />
            </section>
        </div>
    );
}
