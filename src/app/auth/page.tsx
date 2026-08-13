'use client';

import React from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function AuthPage() {
  const handleAuthorizeWithDeriv = () => {
    // This redirects the user directly to Deriv's official OAuth authorization screen
    window.location.href = getDerivLoginUrl();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#07090e] text-slate-200 font-mono">
      <div className="w-full max-w-md p-8 bg-[#0f131f] border border-slate-800/80 rounded-2xl shadow-2xl text-center">
        
        {/* Shield Icon Header */}
        <div className="flex justify-center mb-6">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <h1 className="text-xl font-bold text-white mb-2 tracking-wide">Sign In to Algonex</h1>
        <p className="text-xs text-slate-400 mb-8 leading-relaxed">
          Authorize securely via Deriv OAuth to access your dashboard.
        </p>

        {/* Action Tabs/Buttons */}
        <div className="grid grid-cols-2 gap-2 p-1 bg-slate-950 rounded-xl border border-slate-800 mb-6">
          <button className="py-2.5 text-xs font-semibold text-white bg-blue-600 rounded-lg shadow">
            Sign In
          </button>
          <button className="py-2.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors">
            Sign Up
          </button>
        </div>

        {/* Deriv Authorization Button */}
        <button
          onClick={handleAuthorizeWithDeriv}
          className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm rounded-xl transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2 mb-6"
        >
          <span>Authorize with Deriv</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>

        <div className="text-[11px] text-slate-500 tracking-wider uppercase">
          Secured with official Deriv OAuth API integration.
        </div>

      </div>
    </div>
  );
}