'use client';

import { useState, useEffect } from 'react';
import { Play, RefreshCcw, Bell, Wallet, ChevronDown, Sparkles, HelpCircle, X } from 'lucide-react';

export default function DashboardPage() {
  const [showTour, setShowTour] = useState(true);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [balance, setBalance] = useState('0.00 KES');

  const navItems = [
    'Dashboard', 'Bot Builder', 'Trading Bots', 'Bulk Trader', 
    'Pro AI', 'Dual Edge', 'Analysis Tool', 'Copy Trading', 
    'Charts', 'Risk Calculator', 'Manual Trading'
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col">
      {/* Top Header */}
      <header className="bg-slate-900 border-b border-slate-800 px-4 py-2.5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-6 overflow-x-auto">
          <span className="font-black text-blue-500 tracking-wider text-lg">ALGONEX</span>
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Deriv Volatility Indices Active</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white font-medium px-4 py-1.5 rounded-lg transition-all shadow-sm text-xs">
            Withdraw
          </button>
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-semibold text-emerald-400">
            <Wallet className="w-3.5 h-3.5" />
            <span>{balance}</span>
            <ChevronDown className="w-3 h-3 text-slate-400" />
          </div>
        </div>
      </header>

      {/* Sub Navigation Bar */}
      <nav className="bg-slate-900/60 border-b border-slate-800 px-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveTab(item)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
              activeTab === item 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col lg:flex-row p-4 gap-4">
        {/* Left / Center Workspace Area */}
        <div className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-center items-center text-center relative overflow-hidden">
          <div className="absolute top-4 left-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Live Trading Workspace
          </div>
          <div className="max-w-md py-12">
            <div className="w-16 h-16 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-4 text-blue-400">
              <RefreshCcw className="w-8 h-8 animate-spin" style={{ animationDuration: '8s' }} />
            </div>
            <h2 className="text-xl font-bold mb-2">Connecting to markets...</h2>
            <p className="text-slate-400 text-xs">
              Scanning live tick data from Deriv volatility indices (10, 25, 50, 75). This usually takes a few seconds.
            </p>
          </div>
        </div>

        {/* Right Sidebar - Execution Panel */}
        <div className="w-full lg:w-80 bg-slate-900 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            {/* Sidebar Tabs */}
            <div className="grid grid-cols-3 bg-slate-950 p-1 rounded-lg border border-slate-800 text-xs mb-4 font-medium text-center">
              <span className="bg-slate-800 text-white py-1.5 rounded shadow-sm">Summary</span>
              <span className="text-slate-400 py-1.5 hover:text-white cursor-pointer">Transactions</span>
              <span className="text-slate-400 py-1.5 hover:text-white cursor-pointer">Journal</span>
            </div>

            <div className="text-center py-8 text-slate-500 text-xs border-b border-slate-800 mb-4">
              When you're ready to trade, hit <strong className="text-slate-300">Run</strong>.<br />
              You'll be able to track your bot's performance here.
            </div>

            {/* Metrics Breakdown */}
            <div className="grid grid-cols-2 gap-2 text-xs mb-6">
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Total stake</span>
                <span className="font-bold text-sm">0.00 KES</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Total payout</span>
                <span className="font-bold text-sm">0.00 KES</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Contracts won</span>
                <span className="font-bold text-emerald-400 text-sm">0</span>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-500 block text-[10px]">Contracts lost</span>
                <span className="font-bold text-rose-400 text-sm">0</span>
              </div>
            </div>
          </div>

          {/* Execution Button */}
          <button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-white" />
            <span>Run Strategy</span>
          </button>
        </div>
      </div>

      {/* Welcome Tour Modal Popup */}
      {showTour && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setShowTour(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Welcome to AlgoNex</h3>
            </div>

            <p className="text-slate-300 text-sm mb-6 leading-relaxed">
              Let’s take a quick tour to discover how your automated synthetic indices trading platform works. Press <strong className="text-white">Start</strong> to begin.
            </p>

            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowTour(false)}
                className="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium py-2.5 rounded-xl transition-all text-sm"
              >
                Skip
              </button>
              <button 
                onClick={() => setShowTour(false)}
                className="flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium py-2.5 rounded-xl transition-all shadow-lg shadow-blue-600/20 text-sm"
              >
                Start
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}