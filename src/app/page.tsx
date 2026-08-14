import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0b0e14] text-gray-200 flex flex-col font-sans">
      
      {/* 1. Header Navigation */}
      <header className="border-b border-gray-800 px-8 py-4 flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
          <span className="text-xl font-bold tracking-wide text-white">AlgonexTrading</span>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 transition"
          >
            Log in
          </Link>
          <Link 
            href="/dashboard" 
            className="text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg transition shadow-lg shadow-emerald-900/20"
          >
            Sign up
          </Link>
        </div>
      </header>

      {/* 2. Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-semibold mb-6">
          <span>⚡ Advanced Algorithmic Trading & Synthetics</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          Automate Your Strategy with <span className="text-emerald-400">Algonex</span>
        </h1>
        
        <p className="text-lg text-gray-400 max-w-2xl mb-10">
          Build, load, and run high-performance trading bots optimized for synthetic volatility indices and digital options. Trade smarter with built-in AI insights.
        </p>

        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full justify-center">
          <Link 
            href="/dashboard" 
            className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-8 py-3.5 rounded-xl text-base transition shadow-xl shadow-emerald-900/30 text-center"
          >
            Get Started — Launch App
          </Link>
          <a 
            href="#features" 
            className="w-full sm:w-auto bg-[#161b22] hover:bg-[#1f2630] text-gray-300 font-medium px-8 py-3.5 rounded-xl text-base border border-gray-800 transition text-center"
          >
            Explore Features
          </a>
        </div>
      </main>

      {/* 3. Features Section Preview */}
      <section id="features" className="border-t border-gray-800 bg-[#0e1218] py-20 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#121620] border border-gray-800 p-6 rounded-2xl">
            <div className="text-emerald-400 text-xl font-bold mb-3">🤖 Algorithmic Bots</div>
            <p className="text-sm text-gray-400">Deploy tested automated bots designed to capitalize on volatility and trend shifts smoothly.</p>
          </div>
          <div className="bg-[#121620] border border-gray-800 p-6 rounded-2xl">
            <div className="text-emerald-400 text-xl font-bold mb-3">📊 Advanced Analytics</div>
            <p className="text-sm text-gray-400">Track real-time performance, contracts won/lost, and deep trade metrics directly on your dashboard.</p>
          </div>
          <div className="bg-[#121620] border border-gray-800 p-6 rounded-2xl">
            <div className="text-emerald-400 text-xl font-bold mb-3">✨ AI Integration</div>
            <p className="text-sm text-gray-400">Leverage AI tools and automated analysis helpers to evaluate market conditions on the fly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-6 text-center text-xs text-gray-500">
        © 2026 Algonex Trading Hub. All rights reserved.
      </footer>
    </div>
  );
}