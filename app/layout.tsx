import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MobileBottomBar } from "@/components/MobileBottomBar";
import { ScrollToTop } from "@/components/ScrollToTop";


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crown Cargo Movers Logistics | Global Courier Solutions",
  description: "Reliable and efficient global courier and logistics solutions. Crown Cargo Movers offers professional export, import, air, and sea freight services with real-time tracking.",
  icons: {
    icon: "/crown-cargo-logo.jpeg",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${inter.variable} antialiased bg-slate-50 text-slate-900 font-sans pb-[72px] md:pb-0 selection:bg-gold-500 selection:text-white`}
      >

        {/* HEADER */}
        <Header />

        {/* MAIN CONTENT */}
        <main className="relative z-10 min-h-screen pt-[72px] md:pt-0">
          {children}
        </main>

        {/* FLOATING WHATSAPP (DESKTOP) */}
        <div className="hidden md:block">
          <WhatsAppButton />
        </div>

        <ScrollToTop />
        <MobileBottomBar />
        <Footer />
      </body>
    </html>
  );
}
