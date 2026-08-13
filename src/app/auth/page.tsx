'use client';

import { useState } from 'react';
import { DERIV_CONFIG } from '@/config/deriv';

export default function AuthPage() {
  const [loading, setLoading] = useState(false);

  const handleDerivLogin = () => {
    try {
      setLoading(true);

      // Construct the official Deriv OAuth URL with the parameters Deriv expects
      const authUrl = new URL(DERIV_CONFIG.auth_url);
      authUrl.searchParams.append('app_id', DERIV_CONFIG.app_id);
      authUrl.searchParams.append('redirect_uri', DERIV_CONFIG.redirect_uri);
      authUrl.searchParams.append('l', 'EN');
      authUrl.searchParams.append('brand', 'deriv');

      // Redirect user directly to Deriv's login gateway
      window.location.href = authUrl.toString();
    } catch (error) {
      console.error('OAuth initialization error:', error);
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-white p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-2xl text-center">
        <h1 className="text-2xl font-bold mb-2">Connect to Algonex</h1>
        <p className="text-slate-400 text-sm mb-6">
          Authorize your Deriv account securely.
        </p>
        
        <button
          onClick={handleDerivLogin}
          disabled={loading}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl transition-all shadow-lg shadow-red-600/20 disabled:opacity-50"
        >
          {loading ? 'Connecting to Deriv...' : 'Authorize with Deriv'}
        </button>
      </div>
    </main>
  );
}