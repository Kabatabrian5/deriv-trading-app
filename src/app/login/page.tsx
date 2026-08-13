'use client';

import { useEffect } from 'react';

const APP_ID = '34668T5a68zUtQACHU0u5';
const REDIRECT_URL = 'https://deriv-trading-app.vercel.app/app'; // Make sure this matches your live Vercel domain!

export default function LoginPage() {
  const handleLogin = () => {
    window.location.href = `https://oauth.deriv.com/oauth2/authorize?app_id=${APP_ID}&l=EN&brand=deriv&redirect_uri=${REDIRECT_URL}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0f1d] text-slate-100 flex items-center justify-center p-6">
      <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl max-w-md w-full text-center shadow-xl">
        <h1 className="text-2xl font-bold mb-2">Connect to Deriv</h1>
        <p className="text-slate-400 text-sm mb-6">Authorize your account to start trading on synthetic indices.</p>
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-600/30"
        >
          Authorize with Deriv OAuth
        </button>
      </div>
    </div>
  );
}