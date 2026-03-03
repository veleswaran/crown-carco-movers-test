import Link from 'next/link';
import Image from "next/image";

interface LogoProps {
  scrolled: boolean;
}

export const Logo: React.FC<LogoProps> = ({ scrolled }) => {
  return (
    <Link href="/" className="flex items-center space-x-3 group relative">
      <div
        className={`p-0.5 rounded-xl transition-all duration-500 transform ${scrolled
          ? 'bg-white border border-slate-200 scale-110 shadow-lg shadow-gold-500/5'
          : 'bg-white scale-100'
          } group-hover:scale-125 overflow-hidden`}
      >
        <Image  
          src="/crown-cargo-logo.jpeg"
          alt="Crown Cargo Movers logo"
          width={52}
          height={52}
          className="transition-all duration-500 object-contain"
          priority
          unoptimized
        />
      </div>

      <div className={`flex flex-col transition-all duration-500 transform ${scrolled ? 'translate-x-0' : '-translate-x-1'}`}>
        <span className={`text-2xl font-black tracking-tighter leading-none transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'
          }`}>
          Crown<span className="text-gold-500">Cargo Movers</span>
        </span>
      </div>
    </Link>
  );
};