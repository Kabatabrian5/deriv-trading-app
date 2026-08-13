'use client';

import React from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function Home() {
  const handleLogin = () => {
    window.location.href = getDerivLoginUrl();
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12">
      {/* Header */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center py-4 border-b border-slate-900">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-wider text-red-500">ALGONEX</span>
          <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-full">
            Deriv API v2
          </span>
        </div>
        <button
          onClick={handleLogin}
          className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm transition shadow-lg shadow-red-600/20"
        >
          Sign in with Deriv
        </button>
      </header>

      {/* Hero Section */}
      <div className="max-w-4xl w-full mx-auto text-center my-auto py-16">
        <div className="inline-flex items-center space-x-2 py-1 px-3 rounded-full bg-red-500/10 text-red-400 text-xs font-semibold mb-6 border border-red-500/20 shadow-inner">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
          <span>Deriv Third-Party Authorized Platform</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
          Pro Trading & Automated <span className="text-red-500">Synthetic Indices</span>
        </h1>
        
        <p className="text-base md:text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          Access backtested algorithms, Smart Money Concepts (SMC) automation, and precision execution tools built seamlessly for Deriv.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleLogin}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-red-600/20 transition transform hover:-translate-y-0.5"
          >
            Connect & Start Trading
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto text-center text-xs text-slate-500 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} ALGONEX • Authorized Deriv Trading Application
        </div>
        <div className="flex space-x-6 text-slate-400">
          <span>Secure OAuth 2.0</span>
          <span>Volatility Indices</span>
          <span>Digits phsychology</span>
        </div>
      </footer>
    </main>
  );
}