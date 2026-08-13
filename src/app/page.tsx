'use client';

import React from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function Home() {
  const handleLogin = () => {
    window.location.href = getDerivLoginUrl();
  };

  return (
    <main className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl">
        <h1 className="text-3xl font-bold text-white mb-3">AlgoNex</h1>
        <p className="text-sm text-slate-400 mb-8">
          Authorized Deriv Trading Platform with automated Smart Money Concepts and 3% markup integration.
        </p>

        <button
          onClick={handleLogin}
          className="w-full py-3.5 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition duration-200 shadow-lg shadow-red-600/20"
        >
          Sign in with Deriv
        </button>
      </div>
    </main>
  );
}