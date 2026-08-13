'use client';

import React from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function AuthPage() {
  const handleDerivLogin = () => {
    // Redirects user to Deriv OAuth login with your AlgoNex App ID & 3% markup active
    const loginUrl = getDerivLoginUrl();
    window.location.href = loginUrl;
  };

  return (
    <main className="min-h-screen bg-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <h1 className="text-2xl font-bold text-white mb-2">Connect to AlgoNex</h1>
        <p className="text-sm text-slate-400 mb-6">
          Authorize securely using your Deriv account via OAuth 2.0.
        </p>
        
        <button
          onClick={handleDerivLogin}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-red-600/20"
        >
          Sign in with Deriv
        </button>
      </div>
    </main>
  );
}