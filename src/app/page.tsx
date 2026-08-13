// src/app/page.tsx
'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-300">
      
      {/* Top Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-6 flex items-center justify-between border-b border-slate-800/60 sticky top-0 bg-[#0a0f1d]/80 backdrop-blur-md z-50">
        <Link href="/" className="text-xl font-bold tracking-tight text-white font-mono">
          Algo<span className="text-blue-500">Nex</span>
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            href="/login" 
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-md shadow-blue-600/20 flex items-center gap-1.5"
          >
            <span>Connect Deriv</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Hero & Features */}
      <main className="flex-1 flex flex-col">
        <Hero />
        <Features />
      </main>

      {/* Footer */}
      <footer className="w-full max-w-7xl mx-auto px-6 py-8 text-center text-xs text-slate-500 border-t border-slate-800/60">
        © {new Date().getFullYear()} AlgoNex. Deriv 3rd-Party Authorized Application.
      </footer>

    </div>
  );
}