// src/components/Navbar.tsx
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [token, setToken] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleConnect = () => {
    if (token.trim()) {
      setIsConnected(true);
    }
  };

  return (
    <header className="w-full bg-[#0b0e14] border-b border-slate-800/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* App Title & Deriv Badge */}
        <div className="flex items-center gap-3">
          <span className="text-xl font-bold tracking-tight text-white font-mono">
            ALGONEX
          </span>
          <span className="px-2.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-[11px] font-semibold">
            Deriv API v2
          </span>
        </div>

        {/* Account API Token Connection */}
        <div className="flex items-center gap-3">
          {!isConnected ? (
            <div className="flex items-center gap-2">
              <input
                type="password"
                placeholder="Enter Deriv API Token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
                className="px-3 py-1.5 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 w-48 sm:w-64"
              />
              <button
                onClick={handleConnect}
                className="px-4 py-1.5 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-lg transition shadow-lg shadow-red-600/20"
              >
                Connect Account
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-300">Account Connected</span>
              </div>
              <button
                onClick={() => setIsConnected(false)}
                className="text-xs font-semibold text-rose-400 hover:underline"
              >
                Disconnect
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}