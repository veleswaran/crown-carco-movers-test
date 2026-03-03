import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white border-b border-slate-100 overflow-hidden scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 animate-reveal">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Our <span className="text-gold-500">Excellence</span>
          </h2>
          <div className="w-24 h-2 bg-gold-500 mx-auto rounded-full mb-8" />
          <p className="text-2xl md:text-3xl font-bold text-slate-700 leading-tight">
            Reliability at your Doorstep, <br className="hidden md:block" />
            <span className="text-gold-500">Global Coverage.</span>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-bold text-slate-900">Swift Delivery</h4>
                <p className="text-sm text-slate-500">
                  Industry-leading turnaround times.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-bold text-slate-900">End-to-End Tracking</h4>
                <p className="text-sm text-slate-500">
                  Full visibility from pickup to destination.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-bold text-slate-900">Global Reach</h4>
                <p className="text-sm text-slate-500">
                  Domestic & international coverage.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-bold text-slate-900">Secure Handling</h4>
                <p className="text-sm text-slate-500">
                  Safe packaging & careful handling.
                </p>
              </div>

              <div className="border-l-4 border-gold-500 pl-4">
                <h4 className="font-bold text-slate-900">Dedicated Support</h4>
                <p className="text-sm text-slate-500">
                  Always-on customer assistance.
                </p>
              </div>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
};