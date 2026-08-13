'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, CheckCircle, Activity, ArrowRight, LogOut } from 'lucide-react';

export default function DashboardApp() {
  const [token, setToken] = useState<string | null>(null);
  const [accountInfo, setAccountInfo] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Deriv redirects back with query parameters or hash tokens (e.g., ?acct1=...&token1=...)
    const params = new URLSearchParams(window.location.search);
    
    // Look for Deriv token pattern in URL parameters
    const extractedToken = params.get('token1') || params.get('acct1');
    
    if (extractedToken) {
      setToken(extractedToken);
      localStorage.setItem('deriv_token', extractedToken);
    } else {
      // Check if already saved in local storage from a previous session
      const savedToken = localStorage.getItem('deriv_token');
      if (savedToken) {
        setToken(savedToken);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('deriv_token');
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top Navigation */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30 font-bold">
            AN
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wide">AlgoNex Dashboard</h1>
            <p className="text-xs text-slate-400 flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Connected to Deriv API
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium transition-all flex items-center gap-2"
        >
          <LogOut className="w-3.5 h-3.5" /> Disconnect
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 space-y-6">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-900/20 via-slate-900 to-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-xl font-bold mb-2">Welcome to your Trading Terminal</h2>
            <p className="text-slate-400 text-sm max-w-xl">
              Your account is successfully authorized. You can now execute trades, track synthetic volatility indices, and run automated bots.
            </p>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 font-medium">Session Status</span>
            <div className="text-lg font-bold text-emerald-400 mt-1 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" /> Authorized
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 font-medium">Active Market Feed</span>
            <div className="text-lg font-bold text-white mt-1 flex items-center gap-2">
              <Activity className="w-5 h-5 text-blue-400" /> Volatility 75 Index
            </div>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
            <span className="text-xs text-slate-400 font-medium">API Connection</span>
            <div className="text-xs font-mono text-slate-300 mt-2 bg-slate-950 p-2 rounded-lg border border-slate-800 truncate">
              {token ? `Token: ${token.substring(0, 10)}...` : 'No active token found'}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}