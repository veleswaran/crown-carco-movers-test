"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { allCountries } from '@/constants';

export default function CargoEnquiry() {
  const [activeTab, setActiveTab] = useState<'ship' | 'enquire'>('ship');
  const [originCountry, setOriginCountry] = useState("");
  const [destinationCountry, setDestinationCountry] = useState("");
  const [showOriginDropdown, setShowOriginDropdown] = useState(false);
  const [showDestDropdown, setShowDestDropdown] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const filteredCountries = (query: string) => allCountries.filter(c =>
    c.toLowerCase().includes(query.toLowerCase())
  );

  const handleCargoRequestSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set('originCountry', originCountry);
    formData.set('destinationCountry', destinationCountry);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setMessage("Your quote request has been sent successfully!");
        form.reset();
        setOriginCountry("");
        setDestinationCountry("");
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEnquirySubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setIsLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Add country manually
    formData.set('country', originCountry);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setMessage("Your enquiry has been sent successfully!");
        form.reset();
        setOriginCountry("");
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-700 relative">

      {/* Tabs */}
      <div className="flex border-b border-slate-700">
        <button
          onClick={() => setActiveTab('ship')}
          className={`flex-1 py-6 text-center font-black text-lg transition-colors ${activeTab === 'ship' ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-300'}`}
        >
          Get a Quote
        </button>
        <button
          onClick={() => setActiveTab('enquire')}
          className={`flex-1 py-6 text-center font-black text-lg transition-colors ${activeTab === 'enquire' ? 'bg-slate-800 text-white' : 'bg-slate-900 text-slate-400 hover:text-slate-300'}`}
        >
          Enquiry
        </button>
      </div>

      {/* Messages */}
      <AnimatePresence>
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-8 mt-6 p-4 text-center text-green-400 font-semibold bg-green-500/10 border border-green-500/20 rounded-xl"
          >
            {message}
          </motion.div>
        )}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mx-8 mt-6 p-4 text-center text-red-400 font-semibold bg-red-500/10 border border-red-500/20 rounded-xl"
          >
            {error}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="p-8 md:p-10">
        <AnimatePresence mode="wait">
          {activeTab === 'ship' ? (
            <motion.form
              key="ship"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              onSubmit={handleCargoRequestSubmit}
              name="cargo-quote"
              method="POST"
            >
              <input type="hidden" name="form-name" value="cargo-quote" />
              <input type="hidden" name="originCountry" value={originCountry} />
              <input type="hidden" name="destinationCountry" value={destinationCountry} />
              {/*  Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Service Type</label>
                  <select name="serviceType" required className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500">
                    <option value="">Select Service Type</option>
                    <option>Domestic Express</option>
                    <option>Hyperlocal Delivery</option>
                    <option>E-commerce Logistics</option>
                    <option>Export & Import Solutions</option>
                    <option>Air Freight</option>
                    <option>Sea Freight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Weight</label>
                  <input
                    name="weight"
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Weight"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Origin Dropdown */}
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Origin Country</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={originCountry}
                      onChange={(e) => {
                        setOriginCountry(e.target.value);
                        setShowOriginDropdown(true);
                      }}
                      onFocus={() => setShowOriginDropdown(true)}
                      onBlur={() => setTimeout(() => setShowOriginDropdown(false), 200)}
                      className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                      placeholder="Select Origin"
                      required
                    />
                    {showOriginDropdown && (
                      <div className="absolute z-20 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1 max-h-48 overflow-y-auto">
                        {filteredCountries(originCountry).map((country) => (
                          <div
                            key={country}
                            className="px-4 py-3 hover:bg-gold-500 hover:text-white cursor-pointer font-bold text-slate-300 text-sm transition-colors"
                            onMouseDown={() => {
                              setOriginCountry(country);
                              setShowOriginDropdown(false);
                            }}
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Destination Dropdown */}
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Destination Country</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={destinationCountry}
                      onChange={(e) => {
                        setDestinationCountry(e.target.value);
                        setShowDestDropdown(true);
                      }}
                      onFocus={() => setShowDestDropdown(true)}
                      onBlur={() => setTimeout(() => setShowDestDropdown(false), 200)}
                      className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                      placeholder="Select Destination"
                      required
                    />
                    {showDestDropdown && (
                      <div className="absolute z-20 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1 max-h-48 overflow-y-auto">
                        {filteredCountries(destinationCountry).map((country) => (
                          <div
                            key={country}
                            className="px-4 py-3 hover:bg-gold-500 hover:text-white cursor-pointer font-bold text-slate-300 text-sm transition-colors"
                            onMouseDown={() => {
                              setDestinationCountry(country);
                              setShowDestDropdown(false);
                            }}
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Enter Phone / WhatsApp"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-4">
                <textarea
                  name="message"
                  placeholder="Shipment details or message"
                  className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                />
              </div>

              <button type="submit" disabled={isLoading} className="w-full bg-gold-500 hover:bg-gold-600 text-white font-black py-4 rounded-xl shadow-lg shadow-gold-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Submitting...' : 'Get Estimate'}
              </button>

              <p className="text-center text-xs text-slate-400 font-bold mt-4">
                *Estimated rates based on standard cargo. <Link href="/contact" className='text-gold-500 hover:underline'>Need custom quote?</Link>
              </p>
            </motion.form>
          ) : (
            <motion.form
              key="enquire"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
              onSubmit={handleEnquirySubmit}
              name="cargo-enquiry"
              method="POST"
            >
              <input type="hidden" name="form-name" value="cargo-enquiry" />
              <input type="hidden" name="country" value={originCountry} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Full Name</label>
                  <input
                    name="fullName"
                    type="text"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Enter Email Address"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone / WhatsApp</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                    placeholder="Enter Phone / WhatsApp"
                  />
                </div>
                <div className="relative">
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Country</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={originCountry}
                      onChange={(e) => {
                        setOriginCountry(e.target.value);
                        setShowOriginDropdown(true);
                      }}
                      onFocus={() => setShowOriginDropdown(true)}
                      onBlur={() => setTimeout(() => setShowOriginDropdown(false), 200)}
                      className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                      placeholder="Select Country"
                      required
                    />
                    {showOriginDropdown && (
                      <div className="absolute z-20 w-full bg-slate-800 border border-slate-700 rounded-xl shadow-xl mt-1 max-h-48 overflow-y-auto">
                        {filteredCountries(originCountry).map((country) => (
                          <div
                            key={country}
                            className="px-4 py-3 hover:bg-gold-500 hover:text-white cursor-pointer font-bold text-slate-300 text-sm transition-colors"
                            onMouseDown={() => {
                              setOriginCountry(country);
                              setShowOriginDropdown(false);
                            }}
                          >
                            {country}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-6 pt-4">
                <textarea
                  name="message"
                  placeholder="Shipment details or message"
                  className="w-full bg-slate-800 border border-slate-700 text-white font-bold rounded-xl px-4 py-4 focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all placeholder:text-slate-500"
                />
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-gold-500 hover:bg-gold-600 text-white font-black py-4 rounded-xl shadow-lg shadow-gold-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoading ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}