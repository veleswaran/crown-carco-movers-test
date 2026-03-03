import React from 'react';
import Link from 'next/link';
import { CONTACT_PHONE, CONTACT_WHATSAPP } from '../constants';

export const MobileBottomBar: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        {/* Call Button */}
        <a
          href={`tel:${CONTACT_PHONE}`}
          className="flex flex-col items-center justify-center py-3 active:bg-slate-50 transition-colors"
        >
          <svg className="w-6 h-6 text-gold-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${CONTACT_WHATSAPP}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 active:bg-slate-50 transition-colors"
        >
          <svg className="w-6 h-6 text-[#25D366] mb-1 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.147 1.44 4.744 1.441 5.438 0 9.861-4.424 9.863-9.863.002-5.438-4.422-9.863-9.863-9.863-5.439 0-9.861 4.425-9.863 9.863-.001 1.834.512 3.52 1.482 5.042l-1.011 3.693 3.651-.958zm11.134-4.516c-.272-.136-1.608-.793-1.857-.883-.248-.09-.43-.136-.61.136-.18.272-.696.883-.853 1.063-.156.181-.313.204-.585.068-.271-.136-1.146-.423-2.184-1.348-.807-.72-1.352-1.61-1.51-1.882-.157-.271-.017-.419.119-.554.122-.122.271-.317.407-.475.136-.158.181-.271.272-.452.09-.181.045-.339-.023-.475-.068-.136-.61-1.471-.836-2.014-.22-.53-.442-.457-.61-.466-.157-.008-.339-.01-.52-.01s-.475.068-.724.339c-.249.271-.95.928-.95 2.264 0 1.335.972 2.625 1.108 2.806.136.181 1.912 2.919 4.631 4.097.647.28 1.152.447 1.545.571.65.206 1.241.177 1.708.108.52-.077 1.608-.656 1.835-1.289.226-.633.226-1.177.158-1.289-.068-.113-.249-.181-.52-.317z" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">WhatsApp</span>
        </a>

        {/* Enquire Button */}
        <Link
          href="/contact"
          className="flex flex-col items-center justify-center py-3 active:bg-slate-50 transition-colors"
        >
          <svg className="w-6 h-6 text-gold-500 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-600">Enquire</span>
        </Link>
      </div>
    </div>
  );
};