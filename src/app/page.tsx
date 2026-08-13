'use client';

import React, { useState } from 'react';
import { getDerivLoginUrl } from '@/config/deriv';

export default function Home() {
  const [showTokenModal, setShowTokenModal] = useState(false);
  const [tokenInput, setTokenInput] = useState('');

  const handleOAuthLogin = () => {
    window.location.href = getDerivLoginUrl();
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tokenInput.trim()) return;
    // Save token locally and redirect to dashboard/auth handler
    localStorage.setItem('deriv_token', tokenInput.trim());
    window.location.href = '/auth?token=' + encodeURIComponent(tokenInput.trim());
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between p-6 md:p-12 relative">
      {/* Header */}
      <header className="max-w-6xl w-full mx-auto flex justify-between items-center py-4 border-b border-slate-900">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-black tracking-wider text-red-500">ALGONEX</span>
          <span className="text-xs bg-slate-900 border border-slate-800 text-slate-400 px-2.5 py-1 rounded-full">
            Deriv API v2
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setShowTokenModal(true)}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium rounded-lg text-sm transition"
          >
            Enter Token Manually
          </button>
          <button
            onClick={handleOAuthLogin}
            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg text-sm transition shadow-lg shadow-red-600/20"
          >
            Sign in with Deriv
          </button>
        </div>
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
            onClick={handleOAuthLogin}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl text-lg shadow-xl shadow-red-600/20 transition transform hover:-translate-y-0.5"
          >
            Connect & Start Trading
          </button>
        </div>
      </div>

      {/* Manual Token Modal Overlay */}
      {showTokenModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-2">Connect via API Token</h3>
            <p className="text-sm text-slate-400 mb-4">
              If your Deriv app ID is configured as a PAT app, generate a Personal Access Token in your Deriv dashboard and paste it here:
            </p>
            <form onSubmit={handleTokenSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="Paste your Deriv API Token..."
                value={tokenInput}
                onChange={(e) => setTokenInput(e.target.value)}
                className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-white text-sm focus:outline-none focus:border-red-500"
              />
              <div className="flex space-x-3">
                <button
                  type="button"
                  onClick={() => setShowTokenModal(false)}
                  className="flex-1 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-xl text-sm transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-xl text-sm transition shadow-lg shadow-red-600/20"
                >
                  Connect App
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="max-w-6xl w-full mx-auto text-center text-xs text-slate-500 py-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} ALGONEX • Authorized Deriv Trading Application
        </div>
        <div className="flex space-x-6 text-slate-400">
          <span>Secure Authentication</span>
          <span>Volatility Indices</span>
          <span>Smart Money Concepts</span>
        </div>
      </footer>
    </main>
  );
}