import React from 'react';

export const WhatsAppButton: React.FC = () => {
  return (
    <div className="fixed bottom-8 left-8 z-[60] group">
      {/* Tooltip */}
      <div className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-slate-900 text-white text-sm font-bold rounded-xl opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
        Chat with us
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full border-8 border-transparent border-r-slate-900" />
      </div>

      {/* Button */}
      <a
        href="https://wa.me/918428640709" // Placeholder number
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-15 h-15 bg-[#25D366] rounded-2xl shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
      >
        <svg 
          className="w-8 h-8 text-white fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.147 1.44 4.744 1.441 5.438 0 9.861-4.424 9.863-9.863.002-5.438-4.422-9.863-9.863-9.863-5.439 0-9.861 4.425-9.863 9.863-.001 1.834.512 3.52 1.482 5.042l-1.011 3.693 3.651-.958zm11.134-4.516c-.272-.136-1.608-.793-1.857-.883-.248-.09-.43-.136-.61.136-.18.272-.696.883-.853 1.063-.156.181-.313.204-.585.068-.271-.136-1.146-.423-2.184-1.348-.807-.72-1.352-1.61-1.51-1.882-.157-.271-.017-.419.119-.554.122-.122.271-.317.407-.475.136-.158.181-.271.272-.452.09-.181.045-.339-.023-.475-.068-.136-.61-1.471-.836-2.014-.22-.53-.442-.457-.61-.466-.157-.008-.339-.01-.52-.01s-.475.068-.724.339c-.249.271-.95.928-.95 2.264 0 1.335.972 2.625 1.108 2.806.136.181 1.912 2.919 4.631 4.097.647.28 1.152.447 1.545.571.65.206 1.241.177 1.708.108.52-.077 1.608-.656 1.835-1.289.226-.633.226-1.177.158-1.289-.068-.113-.249-.181-.52-.317z" />
        </svg>
        
        {/* Pulsing Ring Effect */}
        <span className="absolute inset-0 bg-[#25D366] rounded-2xl animate-ping opacity-20" />
      </a>
    </div>
  );
};