'use client';

import React from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function LandingPage() {
  const handleLoginClick = () => {
    window.location.href = getDerivLoginUrl();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b0e14] text-white">
      <h1 className="text-2xl font-bold mb-4">Synthetic Volatility Terminal</h1>
      
      {/* Your Sign In Button */}
      <button
        onClick={handleLoginClick}
        className="px-6 py-3 font-semibold text-slate-950 bg-amber-500 rounded-xl hover:bg-amber-400 transition-all"
      >
        Sign In & Start Trading
      </button>
    </div>
  );
}