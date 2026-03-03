import React from 'react';

export const ContactSection: React.FC = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      {/* Subtle background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">

          {/* Contact Details Column */}
          <div className="lg:w-5/12">
            <div className="inline-block mb-4 px-3 py-1 bg-orange-50 text-gold-500 rounded-full text-xs font-bold tracking-widest uppercase">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
              Excellence in <br />
              <span className="text-gold-500">Communication.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Ready to ship or have questions about our services? Our logistics experts are available to provide the best solutions for your unique requirements.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Corporate Office</h4>
                  <p className="text-slate-500">Crown Cargo Movers<br />435/3A, Saminathapuram,
                    Periyar Colony, Tiruppur – 641604, Tamil Nadu, India</p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Contact Info</h4>
                  <p className="text-slate-500">
                    <strong>Call & WhatsApp:</strong><br />
                    +91 84286 40709<br />
                    +91 88385 77039<br />
                    <strong>Email :</strong> admin@crowncargomoverss.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-gold-500/10 flex items-center justify-center text-gold-500 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-lg">Our Branches</h4>
                  <p className="text-slate-500">
                    • Tiruppur • Coimbatore • Chennai • Palakkad • Cochin
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-gold-500 transition-all shadow-xl"
              >
                Custom Business Solutions
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:w-7/12">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-white relative overflow-hidden group">
              {submitted ? (
                <div className="text-center py-12 animate-reveal">
                  <div className="w-20 h-20 bg-gold-500 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                  <p className="text-slate-500 font-bold mb-8">Thank you for reaching out. Our team will contact you shortly.</p>
                  <button onClick={() => setSubmitted(false)} className="text-gold-500 font-black hover:underline">Send another message</button>
                </div>
              ) : (
                <form
                  name="contact"
                  method="POST"
                  className="space-y-6 relative z-10"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Full Name</label>
                      <input name="fullName" type="text" placeholder="Your Name" className="w-full bg-white border border-slate-200 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 rounded-2xl px-6 py-4 outline-none transition-all font-medium" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Phone Number</label>
                      <input name="phoneNumber" type="text" placeholder="+1 XXX XXX XXXX" className="w-full bg-white border border-slate-200 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 rounded-2xl px-6 py-4 outline-none transition-all font-medium" required />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Message</label>
                    <textarea name="message" rows={4} placeholder="How can we help?" className="w-full bg-white border border-slate-200 focus:border-gold-500 focus:ring-4 focus:ring-gold-500/10 rounded-2xl px-6 py-4 outline-none transition-all font-medium resize-none" required></textarea>
                  </div>
                  <button type="submit" disabled={isLoading} className="w-full bg-gold-500 hover:bg-gold-600 text-white font-black py-5 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 text-lg disabled:opacity-50">
                    {isLoading ? 'Sending...' : 'Submit Inquiry'}
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};